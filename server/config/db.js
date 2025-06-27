import mongoose from "mongoose";

const connectDB = async () => {
  try {
   
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected successfully 🚀");
  } catch (error) {
    console.error("Database connection failed. Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
