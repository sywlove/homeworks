var express = require('express');
var app = express();
app.set('views', './templates');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { name: 'niyi'});
});
app.listen(3000);
