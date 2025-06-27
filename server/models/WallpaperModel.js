import mongoose from "mongoose";

const WallpaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  imageURL: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
  isAIGenerated: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Wallpaper = mongoose.model("Wallpaper", WallpaperSchema);

export default Wallpaper;
