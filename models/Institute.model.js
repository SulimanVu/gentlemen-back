const mongoose = require("mongoose");

const instituteSchema = mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image: [{
    type: mongoose.SchemaTypes.String
  }],
  reviews:[{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'Review'
  }],
});

const Institute = mongoose.model("Institute", instituteSchema);
module.exports = Institute;
