import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
