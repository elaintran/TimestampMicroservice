var express = require('express');
var bodyParser = require('body-parser');
var moment = require("moment");
var app = express();

//get route
var route = require("./routes/routes.js");

//route to routes
app.use("/api/", route);
app.use("/api/v1", route);
app.use("/", route);

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});