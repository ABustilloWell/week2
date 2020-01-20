var express = require("express");
var path = require("path");
var hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get("/index", function (req,res){
    res.render("index.hbs");
});

app.get("/form", function(req,res){
    res.render("form.hbs");
});

app.get("/about", function (req,res){
    res.render("about.hbs");
});

app.all("/results", function(req,res){
    console.log(req)
    res.render("results.hbs", {junk:req.body.first + " " + req.body.email + " " + req.body.comment});
});

app.listen(3000, ()=>{console.log("Server running on port 3000")});