import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan"; // Logger
import dotenv from "dotenv"; // Environment variables
import path from "path"; // Path for serving static files
import contactRoutes from "./routes/contact";
import signupRoutes from "./routes/signup"; // Import routes with both GET and POST for signup
import { connectDB } from "./config/db";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // Allow all origins in development, restrict in production
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies if needed
  })
);

app.use(bodyParser.json());
app.use(morgan("dev")); // Log HTTP requests

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/signup", signupRoutes); // This includes both GET and POST routes for signup

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

// Handle favicon requests
app.get("/favicon.ico", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/favicon.ico"));
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error details
  res.status(500).json({ message: "An unexpected error occurred" });
});

export default app;
