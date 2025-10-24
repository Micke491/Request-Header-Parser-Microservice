require('dotenv').config();
var express = require('express');
var cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
    var ipaddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'];
    var software = req.headers['user-agent'];
    res.json({ipaddress: ipaddress, language: language, software: software});
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});