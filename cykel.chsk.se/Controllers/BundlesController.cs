using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using cykel.chsk.se.Extensions;

namespace cykel.chsk.se.Controllers
{
    public partial class BundlesController : Controller
    {
        private static readonly string JsVirtualPath = "~/Scripts/js";
        private static readonly string CssVirtualPath = "~/Content/css";

        public virtual ActionResult Scripts(string version)
        {
            return BundleResponse(JsVirtualPath);
        }

        public virtual ActionResult Styles(string version)
        {
            return BundleResponse(CssVirtualPath);
        }

        private ActionResult BundleResponse(string bundleVirtualPath)
        {
            var context = new BundleContext(base.HttpContext, BundleTable.Bundles, "");
            var bundle = context.BundleCollection.SingleOrDefault(b => b.Path == bundleVirtualPath);
            if (bundle == null)
            {
                Response.StatusCode = 404;
                return Content("404", "text/plain");
            }

            var response = bundle.GenerateBundleResponse(context);
            Response.Cache.SetCacheability(response.Cacheability);
            
            string url = BundleTable.Bundles.ResolveBundleUrl(bundleVirtualPath);
            string version = url.Split(new char[] { '=' }, StringSplitOptions.RemoveEmptyEntries).Last();
            Response.Cache.SetETag(version);
            return Content(response.Content, response.ContentType);
        }

        public virtual ActionResult GetVersion(string bundle)
        {
            string virtualPath;
            if (bundle == "js")
                virtualPath = JsVirtualPath;
            else
                virtualPath = CssVirtualPath;

            return Content(BundleTable.Bundles.ResolveBundleUrl(virtualPath), "text/plain");
        }
    }
}
