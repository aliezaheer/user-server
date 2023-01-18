const mongoose = require("mongoose");

const phoneRegex = /^\d{10}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: emailRegex },
  phone: { type: Number, required: true, unique: true, match: phoneRegex },
});

const user = mongoose.model("user", UserSchema);

module.exports = user;
