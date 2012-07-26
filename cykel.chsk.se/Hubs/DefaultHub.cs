using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using cykel.chsk.se.Models;
using SignalR;
using SignalR.Hubs;

namespace cykel.chsk.se.Hubs
{
    public class DefaultHub : Hub, IConnected
    {
        static StationPollWorker Worker { get; set; }

        static DefaultHub()
        {
            Worker = new StationPollWorker();
            var connectionManager = new SignalR.ConnectionManager(new SignalR.DefaultDependencyResolver());
            
            Worker.Updated += (d) => 
            {
                var context = GlobalHost.ConnectionManager.GetHubContext<DefaultHub>();
                context.Clients.onDataUpdated(new ClientDataModel { stations = d });
            };
        }

        private void SendData()
        {
            CitybikesApiModel model;
            if (Worker.TryGetValue(out model) && model != null)
                Clients[Context.ConnectionId].onDataUpdated(new ClientDataModel { stations = model });
        }

        public Task Connect()
        {
            SendData();
            return Clients.joined(Context.ConnectionId, DateTime.Now.ToString());
        }

        public Task Reconnect(IEnumerable<string> groups)
        {
            SendData();
            return Clients.rejoined(Context.ConnectionId, DateTime.Now.ToString());
        }
    }
}