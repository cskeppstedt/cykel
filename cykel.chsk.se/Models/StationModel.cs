using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace cykel.chsk.se.Models
{
    public class StationModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public decimal lat { get; set; }
        public decimal lng { get; set; }
        public DateTime timestamp { get; set; }
        public int bikes { get; set; }
        public int free { get; set; }
    }
}