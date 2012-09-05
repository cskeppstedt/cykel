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
        private static bool EnableCloudfront
        {
            get
            {
                string setting = ConfigurationManager.AppSettings["EnableCloudfront"];
                if (setting == null)
                    return false;

                return setting.Equals(bool.TrueString, StringComparison.InvariantCultureIgnoreCase);
            }
        }

        private static string BundleUrl(UrlHelper helper, string url, string action)
        {
            string baseUrl;
            string version;

            if (EnableCloudfront)
            {
                baseUrl = ConfigurationManager.AppSettings["cloudfront.baseurl"];
                version = "036";
            }
            else
            {
                baseUrl = "";
                version = url.Split(new char[] { '=' }, StringSplitOptions.RemoveEmptyEntries).Last();
            }
            
            return baseUrl + "/Bundles/" + action + "/" + version;
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

        public static MvcHtmlString StaticContent(this UrlHelper helper, string absolutePath)
        {
            if (!absolutePath.StartsWith("/"))
                absolutePath = "/" + absolutePath;

            if (EnableCloudfront)
            {
                string baseUrl = ConfigurationManager.AppSettings["cloudfront.baseurl"];
                return new MvcHtmlString(baseUrl + absolutePath);
            }
            else
            {
                return new MvcHtmlString(absolutePath);
            }
        }
    }
}