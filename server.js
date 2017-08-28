var express = require('express');
var scrape = require('./scraper');
var path = require('path');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('mongodb://adamkost79:password1979@ds161503.mlab.com:61503/mongo-scraper');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/news', function(req, res) {
  scrape(res);
});

app.listen(process.env.PORT, function() { console.log('running'); });
