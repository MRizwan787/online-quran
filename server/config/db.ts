import { MongoClient, Db, MongoClientOptions } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "local";

// No need for client options like useNewUrlParser and useUnifiedTopology in recent versions
let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<Db> => {
  if (!client) {
    const options: MongoClientOptions = {
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
      // You can add other options here if needed, like retryWrites
    };

    client = new MongoClient(uri, options); // Pass options to MongoClient

    try {
      await client.connect();
      console.log("Connected to MongoDB successfully!");
      db = client.db(dbName);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit the process if the connection fails
    }
  }
  return db;
};

export default connectDB;
