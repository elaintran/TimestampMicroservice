var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//express server & serve HTML file
app.get("/", function(req, res) {
    res.sendFile( __dirname + "/views/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*const http = require("http");

const requestHandler = (req, res) => {
  console.log(req.url);
  res.end('Hello world!');
};

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 4100, err => {
  if (err) throw err;

  console.log(`Server running on PORT ${server.address().port}`);
});*/
