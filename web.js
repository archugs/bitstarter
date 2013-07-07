var fs = require('fs'); 
var express = require('express');

var app = express.createServer(express.logger());
var buffer;

fs.readFileSync('~/bitstarter/index.html', function (err, data) {
    if (err) console.log(err);
    var buffer = new buffer(256);
    buffer.write(data);
}

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
