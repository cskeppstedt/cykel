using cykel.chsk.se.Models;
using cykel.chsk.se.Properties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace cykel.chsk.se.Controllers
{
    public partial class DefaultController : Controller
    {
        public virtual ActionResult Index()
        {
            var model = new IndexModel
            {
                PollIntervalFriendlyString = string.Format("{0} sekunders", Settings.Default.ApiPollInterval.TotalSeconds)
            };
            
            return View(model);
        }
    }
}
