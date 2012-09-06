using cykel.chsk.se.Models;
using cykel.chsk.se.Properties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using cykel.chsk.se.Extensions;
using System.Security.Cryptography;
using System.Text;

namespace cykel.chsk.se.Controllers
{
    public class ResourceController : Controller
    {
        public ActionResult Manifest()
        {
            var result = new ManifestResult
            {
                NetworkResources = new string[] {"*"}
            };

            result.CacheResources.Add("/favicon.ico");
            result.CacheResources.Add("/signalr/hubs");

            if (Settings.Default.EnableBundles)
            {
                var urlHelper = new UrlHelper(Request.RequestContext);
                result.CacheResources.Add(urlHelper.StylesBundleUrl().ToString());
                result.CacheResources.Add(urlHelper.ScriptsBundleUrl().ToString());
            }

            if (Settings.Default.EnableCloudfront)
            {
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.glyphicons_halflings_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.glyphicons_halflings_white_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_1_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_2_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_3_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_4_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_5_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.markers_location_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.touch_icon_v1_114_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.touch_icon_v1_144_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.touch_icon_v1_57_png);
                result.CacheResources.Add(Settings.Default.CloudfrontBaseurl + Links.Content.images.touch_icon_v1_72_png);
            }

            result.CacheResources.Add("http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js");
            result.CacheResources.Add("http://fonts.googleapis.com/css?family=EB+Garamond");
            result.CacheResources.Add("http://themes.googleusercontent.com/static/fonts/ebgaramond/v4/kYZt1bJ8UsGAPRGnkXPeFYbN6UDyHWBl620a-IRfuBk.woff");

            using (var sha = SHA256.Create())
            {
                string joined = string.Join("\n", result.CacheResources);
                byte[] data = sha.ComputeHash(Encoding.UTF8.GetBytes(joined));
                
                var sb = new StringBuilder();
                for (int i = 0; i < data.Length; i++)
                    sb.Append(data[i].ToString("x2"));
                
                result.Version = sb.ToString();
            }

            return result;
        }
    }
}
