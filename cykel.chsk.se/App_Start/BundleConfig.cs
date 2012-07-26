﻿using System.Web;
using System.Web.Optimization;

namespace cykel.chsk.se
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/js")
                .Include("~/Scripts/modernizr.custom.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/knockout-2.1.0.js")
                .Include("~/Scripts/knockout-mapping.js")
                .Include("~/Scripts/jquery.signalR-0.5.2.js")
                .Include("~/Scripts/utils.js")
                .Include("~/Scripts/site.js"));
            
            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/bootstrap.min.css")
                .Include("~/Content/site.css")
                .Include("~/Content/bootstrap-responsive.min.css"));
        }
    }
}