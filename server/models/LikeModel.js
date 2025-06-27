import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  wallpaper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallpaper",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Like = mongoose.model("Like", LikeSchema);

export default Like;
