import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contact";  // Using default export
import signupRoutes from "./routes/signup";   // Using default export
import { connectDB } from "./config/db";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/contact", contactRoutes); // Contact form routes
app.use("/api/signup", signupRoutes);   // Signup form routes

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;
