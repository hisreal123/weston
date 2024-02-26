const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  imgURL: { type: String },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Blog = model("blog", blogSchema);
module.exports = Blog;
