
function SiteVisitsController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

SiteVisitsController.prototype = {
  get: get
};

var sitevisitsController = new SiteVisitsController();

module.exports = sitevisitsController;
