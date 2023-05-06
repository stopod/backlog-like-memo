import mongoose from "mongoose";

const mainTaskSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  author: {
    type: String,
  },
});

module.exports = mongoose.model("MainTask", mainTaskSchema);
