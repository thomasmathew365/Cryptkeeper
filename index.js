var express = require('express');
var app = express();

const port = 3000;
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('static'));

app.get('/',function (req, res) {
  res.sendfile('./views/index.html');
});



var serve = app.listen(port,  function () {
  console.log('Server running at http://locahost:' + port);
});
