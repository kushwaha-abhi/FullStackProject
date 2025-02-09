import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import path from "path";
import {authMiddleware }from "./Milldleware/auth.js";
dotenv.config();
const app = express();

app.use("/uploads", express.static(path.resolve("uploads")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.use("/api/foods", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.listen(process.env.Port, (req, res) => {
  console.log(`server is running on port ${process.env.Port}`);
});

authMiddleware();