
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

//  Set allowed frontend origins
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

//  CORS Configuration
app.use(
  cors({
    origin: FRONTEND_URL, 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  API Routes
app.use("/api/users", userRoutes);

//  Default API Response
app.get("/", (req, res) => {
  res.send("API is running...");
});

//  Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

//  Dynamic Port Handling
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server is running on port ${PORT}`)
);

