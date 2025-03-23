import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";



dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

if(process.env.NODE_ENV !== 'production'){
  
}
app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use(notFound);
app.use(errorHandler);
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
