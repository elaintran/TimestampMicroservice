var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();


//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// css folder
app.use(express.static('public'));