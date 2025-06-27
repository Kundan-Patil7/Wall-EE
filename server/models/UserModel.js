import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteWallpapers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallpaper",
    },
  ],
  uploadedWallpapers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallpaper",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
