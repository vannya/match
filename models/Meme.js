const mongoose = require("mongoose");
const { Schema } = mongoose;

//Creates a new meme model
const memeSchema = new Schema({
  link: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("memes", memeSchema);
