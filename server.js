var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
//app.use(bodyParser.json());
//app.use(cors());

//get api routes
var api = require("./routes/api")


//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

// css folder
app.use(express.static('public'));

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  	res.json({greeting: 'hello API'});
});


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
