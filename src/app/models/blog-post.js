// Require mongoose
var mongoose = require('mongoose');

// Each schema maps to a MongoDB collection
// and defines the shape of the documents within that collection.
// Get a reference to Schema and define our blog.
var Schema = mongoose.Schema;

var blogSchema = new Schema ({
  description: String,
  author: String,
  content: String,
  comments: [{ body: String, date: Date}],
  date: { type: Date, default: Date.now}
});

// Allow access in server.js to use in our app
module.exports = mongoose.model('Blog', blogSchema);
