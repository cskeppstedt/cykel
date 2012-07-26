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
            string version = url.Split(new char[] { '=' }, StringSplitOptions.RemoveEmptyEntries).Last();
            string baseUrl = ConfigurationManager.AppSettings["cloudfront.baseurl"];
            return baseUrl + "Bundles/" + action + "/" + version;
        }

        public static MvcHtmlString ScriptsBundleUrl(this UrlHelper helper)
        {
            string url = BundleTable.Bundles.ResolveBundleUrl("~/Scripts/js");
            return new MvcHtmlString(BundleUrl(helper, url, "Scripts"));
        }

        public static MvcHtmlString StylesBundleUrl(this UrlHelper helper)
        {
            string url = BundleTable.Bundles.ResolveBundleUrl("~/Content/css");
            return new MvcHtmlString(BundleUrl(helper, url, "Styles"));
        }
    }
}