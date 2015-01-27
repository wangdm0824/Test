using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Test.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            var data = new[] { 
                              new {ID=1,Name="1"},
                              new {ID=2,Name="2"},
                              new {ID=3,Name="3"},
                              new {ID=4,Name="4"}
            };
            //var result = Map(x => x.ID, data);         //高阶函数Map Filter Fold
            return View();
        }

    }
}
