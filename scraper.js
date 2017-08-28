//require request and cheerio to scrape
var request = require('request');
var cheerio = require('cheerio');
var Article = require('./models/Article');


function scrape(res, db) {
  request('http://www.theonion.com/popular-news', function(error, response, body) {
    var $ = cheerio.load(body);

    var data = $('bulbs-reading-list-item').map(function() {
      var href = 'http://www.theonion.com' + $(this).attr('data-href');
      var title = $(this).attr('data-title');
      return {href: href, title: title};
    }).get();

    data.forEach(function(item) {
      Article.count({title: item.title}, function(count) {
        if (count === 0) {
          Article.create(item);
        }
        else {

        }
      });
    });


    res.render('news.handlebars', { articles: data });
  });
}

module.exports = scrape;
