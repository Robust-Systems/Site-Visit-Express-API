global.__basedir = __dirname;

var express = require('Express');
var app = express();
var sitesRouter = require('./sites-router');

app.use('/sites', sitesRouter);

app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, () =>
  console.log("API running on http://localhost:3000")
);