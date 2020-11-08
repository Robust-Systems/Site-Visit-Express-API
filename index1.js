var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Good bye.");
 });
 
 app.get('/hello', function(req, res){
   res.send("Hello world!");
});

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
 
app.listen(3000);