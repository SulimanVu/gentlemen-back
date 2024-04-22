const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  userId: String,
  comment: String,
  raiting: Number,
});

const Institute = mongoose.model("Review", reviewSchema);
module.exports = Institute;
