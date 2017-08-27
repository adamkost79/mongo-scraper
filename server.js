var express = require('express');
var scrape = require('./scraper');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/news', function(req, res) {
  scrape(res);
});

app.listen(8080, function() { console.log('running'); });
