const fs = require("fs");
const SiteVisit = require("./SiteVisit");

class SiteVisitService {
  constructor() {
    this.SiteVistArr = [];
    this.JsonDataFile = "data.json";

    this.Initialise();
  }

  Initialise() {
    var file = fs.readFileSync(this.JsonDataFile, "utf8");
    var data = JSON.parse(file);

    for (var i = 0; i < data.length; i++) {
      let obj = data[i];

      let siteVisit = new SiteVisit(
        obj.id.$oid,
        obj.domain,
        obj.visitors,
        obj.date
      );

      this.SiteVistArr.push(siteVisit);
    }
  }

  /*
  1. Provide average site visits for a given date
  2. Provide average site visits given a date range (from and to).
  3. Provide an array of key-value pairs, with key being the date and value being an array of
     sites that have site visits for that date
  */
  AverageSiteVisitsByDate() {
    let objDate = new Date('2019-12-09');
    let newArray = this.SiteVistArr.filter(function (el) {
      return (
        el.dateOnlyVisited.getTime() === objDate.getTime()
      );
    });

    return newArray;
  }
}

module.exports = SiteVisitService;
