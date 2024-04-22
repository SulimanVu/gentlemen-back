const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  image: [],
  email: String,
  siteUrl: String,
  address: String,
  news: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "UniversityNews",
    },
  ],
  institute: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Institute",
    },
  ],
  dormitory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dormitore",
  },
  docsImg: {
    type: String,
  },
  selectionCommittee: {
    mail: String,
    phone: String,
  },
  reviews: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Review",
    },
  ],
  users: [
    {
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },  
      comment: {
        type: String,
      },
      time: {
        type: String,
      },
    },
  ],
  access: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const University = mongoose.model("University", universitySchema);
module.exports = University;
