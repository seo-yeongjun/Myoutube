import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  name: {
    type: String,
    default: "추가 예정",
  },
  avartaImgUrl: {
    type: String,
    default: 0,
  },
  title: {
    type: String,
    requierd: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video",
    },
  ],
});

const model = mongoose.model("video", videoSchema);
mongoose.model.remove;
export default model;
