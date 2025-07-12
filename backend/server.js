import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config(); // Load .env variables first

const app = express(); // Create express app

// ✅ CORS Setup: Allow your Vercel frontend
app.use(cors({
    origin: "https://hugo-mern-project.vercel.app", // This is your actual frontend domain
    credentials: true
}));

// Middleware
app.use(express.json()); // Accept JSON payloads

// Routes
app.use("/api/products", productRoutes); // Products API

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
