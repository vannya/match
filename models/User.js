const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates a new user model
const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
