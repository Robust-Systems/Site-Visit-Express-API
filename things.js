var express = require("express");
var router = express.Router();
var fs = require("fs");
const SiteVisitService = require("./SiteVisitService");

router.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

router.get("/", function (req, res) {
  let siteVisitService = new SiteVisitService();
  let temp = siteVisitService.AverageSiteVisitsByDate();

  res.send("GET route on things.");
});

router.get("/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});

router.get("/:dateFrom([0-9]{2,4}-[0-9]{1,2}-[0-9]{1,2})", function (req, res) {
  let siteVisitService = new SiteVisitService();
  let avgSitesVisited = siteVisitService.AverageSiteVisitsByDate(
    req.params.dateFrom,
    null
  );

  res.send(
    "Average site visits for " + req.params.dateFrom + ":" + avgSitesVisited
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
        ":" +
        avgSitesVisited
    );
  }
);

router.post("/", function (req, res) {
  res.send("POST route on things.");
});

//export this router to use in our index.js
module.exports = router;
