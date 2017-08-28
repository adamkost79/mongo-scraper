var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Article;
