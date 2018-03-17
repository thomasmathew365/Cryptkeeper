var express = require('express');
var app = express();

const port = 3000;

app.get('/',function (req, res) {
  res.send("Hello, World!");
});



var serve = app.listen(port,  function () {
  console.log('Server running at http://locahost:' + port);
});
