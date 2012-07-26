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
            return View();
        }
    }
}
