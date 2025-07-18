import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
} from "../controller/userController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/profile", protect, getUserProfile);

export default router;
