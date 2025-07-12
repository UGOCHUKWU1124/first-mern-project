//const express = require('express'); old 
import express from "express"; //mordern
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

const app = express();//create an express app
app.use(cors()); //It lets your frontend (5173) talk to backend (5000)
const PORT = process.env.PORT || 5000;
dotenv.config(); //load env variables
app.use(express.json());//allows us to accept JSON data in the req.body
app.use("/api/products", productRoutes);//product route


//listen to the port 5000
app.listen(PORT, () => { 
    connectDB();
    console.log("Server started at http://localhost:" + PORT); //call back function A function passed into another function to be run later 
});
