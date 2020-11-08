var express = require("express");
var router = express.Router();
const SiteVisitService = require("./SiteVisitService");

router.get("/GroupedByDate", function (req, res) {
  let siteVisitService = new SiteVisitService();
  let sitesGroupedByDate = siteVisitService.GetSitesGroupedByDate();

  res.send(sitesGroupedByDate);
});

router.get("/:dateFrom([0-9]{2,4}-[0-9]{1,2}-[0-9]{1,2})", function (req, res) {
  let siteVisitService = new SiteVisitService();
  let avgSitesVisited = siteVisitService.AverageSiteVisitsByDate(
    req.params.dateFrom,
    null
  );

  res.send(
    "Average site visits for " + req.params.dateFrom + ": " + avgSitesVisited
  );
});

router.get(
  "/:dateFrom([0-9]{2,4}-[0-9]{1,2}-[0-9]{1,2})/:dateTo([0-9]{2,4}-[0-9]{1,2}-[0-9]{1,2})",
  function (req, res) {
    let siteVisitService = new SiteVisitService();
    let avgSitesVisited = siteVisitService.AverageSiteVisitsByDate(
      req.params.dateFrom,
      req.params.dateTo
    );
    res.send(
      "Average site visits from " +
        req.params.dateFrom +
        " to " +
        req.params.dateTo +
        ": " +
        avgSitesVisited
    );
  }
);

module.exports = router;
