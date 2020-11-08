const moment = require("moment");

class SiteVisit {
   constructor(id, domain, visitors, dateVisited) {
       this.id = id;
       this.domain = domain;
       this.visitors = visitors;
       this.dateVisited = dateVisited;
       this.dateOnlyVisited = new Date(dateVisited);
       this.dateOnlyVisited.setHours(0, 0, 0, 0);
   }
}

module.exports = SiteVisit;
