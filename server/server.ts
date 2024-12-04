import app from "./app"; // Importing the app from app.ts
import dotenv from "dotenv"; // Environment variables
import { connectDB } from "./config/db";
import express from "express"; // Import express to serve static files
import path from "path"; // Import path for resolving directories

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

const startServer = async () => {
  try {
    await connectDB(); // Ensure MongoDB connection is established
    console.log("MongoDB connection established successfully");

    // Start the server
    const server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    // Handle server shutdown gracefully
    process.on("SIGINT", () => {
      server.close(() => {
        console.log("Server closed. Exiting process.");
        process.exit(0);
      });
    });

  } catch (error) {
    console.error("Failed to connect to MongoDB. Exiting process.", error);
    process.exit(1); // Exit with failure code if DB connection fails
  }
};

startServer();

export { startServer };
