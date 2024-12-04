import { Request, Response } from "express";
import { connectDB } from "../config/db";

// POST route: Create signup entry
const createSignupEntry = async (req: Request, res: Response) => {
  const { name, email, phone, gender, course, pricingPlan, message } = req.body;

  try {
    // Get database connection
    const db = await connectDB();
    const signupsCollection = db.collection("signups");

    // Insert new signup entry
    const result = await signupsCollection.insertOne({
      name,
      email,
      phone,
      gender,
      course,
      pricingPlan,
      message,
      createdAt: new Date(),
    });

    // Respond with the ID of the newly created entry
    res.status(201).json({
      message: "Signup entry created!",
      signupId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating signup entry", error); // Log the error for debugging
    res.status(500).json({ message: "Error creating signup entry", error });
  }
};

// GET route: Fetch all signup entries
const getSignupEntries = async (req: Request, res: Response) => {
  try {
    // Get database connection
    const db = await connectDB();
    const signupsCollection = db.collection("signups");

    // Retrieve all signup entries
    const signups = await signupsCollection.find().toArray();

    // Return the retrieved signup entries
    res.status(200).json(signups);
  } catch (error) {
    console.error("Error fetching signup entries", error);
    res.status(500).json({ message: "Error fetching signup entries", error });
  }
};

export { createSignupEntry, getSignupEntries };
