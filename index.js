var express = require('express');
var app = express();

const https = require('https');



const url =
  "https://api.coinmarketcap.com/v1/ticker/";

const port = 3000;

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('static'));

app.get('/',function (req, res) {
  res.sendfile('./views/index.html');
});

app.get('/all',function (req, servRes) {

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      servRes.send(body);
    });
  });

});



var serve = app.listen(port,  function () {
  console.log('Server running at http://locahost:' + port);
});
