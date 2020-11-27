var express = require("express");
var app = express()

app.use(express.static("public"));

var path = require("path");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/page/index.html");
})

app.get("/historia", function(req, res){
    res.sendFile(__dirname + "/public/page/historia.html");
})

app.get("/naruto", function(req, res){
    res.sendFile(__dirname + "/public/page/naruto.html");
})


app.listen(8080, function(){
    console.log("Executando.");
});