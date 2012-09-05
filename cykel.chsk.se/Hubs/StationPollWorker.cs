using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using cykel.chsk.se.Models;

namespace cykel.chsk.se.Hubs
{
    public class StationPollWorker
    {
        private TimeSpan period = TimeSpan.FromSeconds(20);
        public delegate void DataUpdated(CitybikesApiModel data);
        public event DataUpdated Updated;
        private CitybikesApiModel data;

        private Timer timer;

        public StationPollWorker()
        {
            this.timer = new Timer(new TimerCallback(OnTimer), null, TimeSpan.Zero, period);
        }

        private void OnTimer(object state)
        {
            try
            {
                var pollTask = Poll();

                pollTask.ContinueWith(t =>
                {
                    if (t.IsFaulted)
                    {
                        var ae = t.Exception as AggregateException;

                        if (ae != null)
                        {
                            foreach (var ex in ae.InnerExceptions)
                                Debug.WriteLine(ex.GetType().Name + ": " + ex.Message);
                        }
                        else
                        {
                            Debug.WriteLine(t.Exception.GetType().Name + ": " + t.Exception.Message);
                        }

                        return;
                    }

                    var current = this.data;
                    var updated = t.Result;

                    this.data = updated;

                    if (!EqualityComparer<CitybikesApiModel>.Default.Equals(current, updated) && Updated != null)
                        Updated(updated);
                });
            }
            catch (Exception exc)
            {
                Debug.WriteLine("Error when updating data: " + exc.Message);
            }
        }

        protected Task<CitybikesApiModel> Poll()
        {
            return Task.Factory.StartNew(() => GetModel());
        }

        private CitybikesApiModel GetModel()
        {
            var requestUri = new Uri("http://api.citybik.es/goteborg.json");
            var request = (HttpWebRequest)WebRequest.Create(requestUri);
            request.Method = WebRequestMethods.Http.Get;
            request.Accept = "application/json";

            var response = request.GetResponse();

            using (var stream = new StreamReader(response.GetResponseStream()))
            {
                string json = stream.ReadToEnd();
                var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<CitybikesApiModel>(json);

                foreach (var model in deserialized)
                {
                    // convert coords to correct format (xx.xxxxxx)
                    model.lat /= 1000000;
                    model.lng /= 1000000;
                    model.name = NormalizeName(model.name);
                }

                return deserialized;
            }
        }

        private string NormalizeName(string name)
        {
            var parts = name.Split(new char[] {'/'}, StringSplitOptions.RemoveEmptyEntries)
                .Select(s => s.Substring(0,1).ToUpper() + s.Substring(1).ToLower());

            return string.Join(" / ", parts);
        }

        public bool TryGetValue(out CitybikesApiModel value)
        {
            value = this.data;
            return true;
        }
    }
}