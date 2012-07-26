using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace cykel.chsk.se.Controllers
{
    public partial class BundlesController : Controller
    {
        public virtual ActionResult Scripts(string version)
        {
            return BundleResponse("~/Scripts/js");
        }

        public virtual ActionResult Styles(string version)
        {
            return BundleResponse("~/Content/css");
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
    }
}
