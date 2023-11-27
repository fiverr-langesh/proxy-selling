const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  { timestamps: true, collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
