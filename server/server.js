import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";



dotenv.config(); 

const app = express();

connectDB();

app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Working !!!");
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
