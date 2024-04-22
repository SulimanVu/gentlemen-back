const mongoose = require("mongoose");

const universityNewsSchema = mongoose.Schema({
   title: String,
   description: String,
   image: [
      {
         type: mongoose.SchemaTypes.String,
      },
   ],
   reviews: [
      {
         type: mongoose.SchemaTypes.ObjectId,
         ref: "Review"
      }
   ]
});

const UniversityNews = mongoose.model("UniversityNews", universityNewsSchema);
module.exports = UniversityNews;
