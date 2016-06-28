var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

var authCheck = jwt({
  secret: new Buffer('hI54XA6pOYwUkA9ME0nbAKeBkTsAh2xsITyXXCLsqjqYt0X6mCxszFjvHj_udMFT', 'base64'),
  audience: 'i3sWJipIqjZJE3Mfax1zrLbH0oPGwG3V'
});

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

app.listen(3001);
console.log('Listening on http://localhost:3001');