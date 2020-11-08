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
  Provide average site visits for a given date
  Provide average site visits given a date range (from and to).
  */
  AverageSiteVisitsByDate(dateFrom, dateTo) {
    let objDateFrom = new Date(dateFrom);
    objDateFrom.setHours(0, 0, 0, 0);

    let objDateTo = null;
    if (dateTo) {
      objDateTo = new Date(dateTo);
      objDateTo.setHours(0, 0, 0, 0);
    }

    let totalVisits = 0;
    let sites = 0;
    for (var i = 0; i < this.SiteVistArr.length; i++) {
      if (
        this.isWithinDates(
          this.SiteVistArr[i].dateOnlyVisited,
          objDateFrom,
          objDateTo
        )
      ) {
        totalVisits += this.SiteVistArr[i].visitors;
        sites++;
      }
    }

    let avgVisits = totalVisits / sites || 0;

    return avgVisits;
  }

  /*
  Provide an array of key-value pairs, with key being the date and value being an array of
  sites that have site visits for that date
  */


  isWithinDates(dateVisitedSite, objDateFrom, objDateTo) {
    if (!objDateTo) {
      return dateVisitedSite.getTime() === objDateFrom.getTime();
    }

    if (
      dateVisitedSite.getTime() >= objDateTo.getTime() &&
      dateVisitedSite.getTime() <= objDateTo.getTime()
    ) {
      return true;
    }

    return false;
  }
}

module.exports = SiteVisitService;
