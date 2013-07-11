var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data;
    var fileStream = require('fs');
    data = fileStream.readFileSync('index.html');
    response.send(data.toString('utf-8', 0, data.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
