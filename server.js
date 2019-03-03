var express = require('express');
var bodyParser = require('body-parser');
var moment = require("moment");
var app = express();

//get route
//var route = require("./routes/routes.js");

app.get("/api/timestamp/:date_string?", function(req, res) {
	var date_string = req.params.date_string;
	console.log(date_string);
	var date;
	if (!date_string) {
		date = new Date();
	}
	//res.send(date_string);
	res.json({unix: date.getTime(), utc: date.toUTCString()});
});

//route to routes
/*app.use("/api/", route);
app.use("/api/v1", route);
app.use("/", route);*/

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});