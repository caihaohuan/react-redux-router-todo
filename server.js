var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static('./dist'));

app.get("/", function(req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log("Express server listening on port", port);
  }
});
console.log('test');
