var express = require("express");
var router = express.Router();
var fs = require("fs");
const SiteVisitService = require("./SiteVisitService");

router.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

router.get("/", function (req, res) {
  console.log("A new request received at " + Date.now());
  console.log(__dirname);
  console.log(__filename);
  console.log(__basedir);

  let siteVisitService = new SiteVisitService();
  let temp = siteVisitService.AverageSiteVisitsByDate();
  //    var file = fs.readFileSync('data.json', 'utf8');
  //    var data = JSON.parse(file);
  //    var siteVistArr = [];

  //    for(var i = 0; i < data.length; i++) {
  //       let obj = data[i];
  //       let siteVisit = new SiteVisit(obj.id.$oid, obj.domain, obj.visitors, obj.date);
  //       siteVistArr.push(siteVisit);

  //       console.log(obj.id);
  //   }

  res.send("GET route on things.");
});

router.get("/:id([0-9]{5})", function (req, res) {
  res.send("id: " + req.params.id);
});

router.get("/:dateFrom([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})", function (req, res) {
  res.send("dateFrom: " + req.params.dateFrom);
});

router.get(
  "/:dateFrom([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})/:dateTo([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})",
  function (req, res) {
    res.send(
      "dateFrom: " + req.params.dateFrom + " dateTo: " + req.params.dateTo
    );
  }
);

router.post("/", function (req, res) {
  res.send("POST route on things.");
});

//export this router to use in our index.js
module.exports = router;
