import mongoose from "mongoose";

// MongoDB URI
const MONGO_URI = "mongodb://localhost:27017/myDatabase"; // Replace `myDatabase` with your database name

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // No need for 'useNewUrlParser' or 'useUnifiedTopology'
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1); // Stop the application if the connection fails
  }
};
