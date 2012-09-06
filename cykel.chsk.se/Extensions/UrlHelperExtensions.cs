using cykel.chsk.se.Properties;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace cykel.chsk.se.Extensions
{
    public static class UrlHelperExtensions
    {
        private static string BundleUrl(UrlHelper helper, string url, string action)
        {
            string baseUrl = "";
            string version = url.Split(new char[] { '=' }, StringSplitOptions.RemoveEmptyEntries).Last();

            if (Settings.Default.EnableCloudfront)
                baseUrl = Settings.Default.CloudfrontBaseurl;
            
            return baseUrl + "/Bundles/" + action + "/" + version;
        }

        public static MvcHtmlString ScriptsBundleUrl(this UrlHelper helper)
        {
            string url = BundleTable.Bundles.ResolveBundleUrl(Settings.Default.JsBundlePath);
            return new MvcHtmlString(BundleUrl(helper, url, "Scripts"));
        }

        public static MvcHtmlString StylesBundleUrl(this UrlHelper helper)
        {
            string url = BundleTable.Bundles.ResolveBundleUrl(Settings.Default.CssBundlePath);
            return new MvcHtmlString(BundleUrl(helper, url, "Styles"));
        }

        public static MvcHtmlString StaticContent(this UrlHelper helper, string absolutePath)
        {
            if (!absolutePath.StartsWith("/"))
                absolutePath = "/" + absolutePath;

            if (Settings.Default.EnableCloudfront)
            {
                string baseUrl = Settings.Default.CloudfrontBaseurl;
                return new MvcHtmlString(baseUrl + absolutePath);
            }
            else
            {
                return new MvcHtmlString(absolutePath);
            }
        }
    }
}