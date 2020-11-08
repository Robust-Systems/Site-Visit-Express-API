global.__basedir = __dirname;

//console.log(__basedir);

var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

//app.listen(3000);

app.listen(3000, () =>
  console.log("API running on http://localhost:3000")
);