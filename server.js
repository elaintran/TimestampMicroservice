var express = require('express');
var app = express();

//The API endpoint is GET [project_url]/api/timestamp/:date_string?
app.get("/api/timestamp/:date_string?", function(req, res) {
	var date_string = req.params.date_string;
	//empty date_string returns current date
	if (!date_string) {
		date = new Date();
	} else {
		if (isNaN(date_string)) { //if date_string is not a number
			date = new Date(date_string);
		} else {
			date = new Date(parseInt(date_string));
		}
	}
	res.json({unix: date.getTime(), utc: date.toUTCString()});
});

//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

//access public/css folder
app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port 3000!')
});