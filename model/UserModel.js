const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  city: String,
  email: String,
  phone: Number,
});

const user = mongoose.model("user", UserSchema);

module.exports = user;
