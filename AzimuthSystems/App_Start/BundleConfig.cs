using System.Web.Optimization;

namespace AzimuthSystems
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/JsSupport")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/ui-bootstrap-tpls-0.13.0.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/AzimuthDemoApp")
               .Include("~/ngSource/app/app.js")
               .IncludeDirectory("~/ngSource/Factories", "*.js")
               .IncludeDirectory("~/ngSource/Controllers", "*.js"));
        }
    }
}
