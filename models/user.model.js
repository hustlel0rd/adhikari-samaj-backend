const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
  })
);

module.exports = User;