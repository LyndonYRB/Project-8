import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Game = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  yearRelease: { type: Number },
  console: { type: String },
  maxPlayerNumber: { type: Number },
  onlinePlay: { type: Boolean },
  playableCharacters: [{ type: String }],
});

export default mongoose.model("games", Game);
