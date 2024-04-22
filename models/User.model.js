const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  nikname: String,
  login: String,
  password: String,
  role: String,
  photo: String,
  institute: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Institute",
  },
  raiting: Number,
  showName: Boolean,
  passport: String,
  myMessage: [
    {
      type: String,
    },
  ],
  favorite: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Institute",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
