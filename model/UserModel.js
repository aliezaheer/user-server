const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  city: String,
  email: String,
  phone: Number,
});

const user = mongoose.model("user", UserSchema);

module.exports = user;
