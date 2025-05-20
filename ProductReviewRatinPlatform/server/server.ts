import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import productRoutes from "./routes/products";
import reviewRoutes from "./routes/reviews";

dotenv.config();
const app = express();

app.use((req, res, next) => {
  console.log(`🚀 ${req.method} ${req.url}`);
  next();
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/products", productRoutes);
app.use("/reviews", reviewRoutes);

connectDB().then(() => {
  app.listen(8000, () => console.log("Server running on port 8000"));
});
