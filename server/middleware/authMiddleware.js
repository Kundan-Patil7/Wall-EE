import jwt from "jsonwebtoken";
import User from "../models/UserModel.js"; // Ensure correct import for User model

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Check if token exists and starts with "Bearer"
    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Extract the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

      // Fetch the user from the database and exclude the password
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      next(); // Proceed to the next middleware or route handler
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token missing or invalid" });
    }
  } catch (error) {
    console.error("Error in protect middleware:", error.message);
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

export default protect;
