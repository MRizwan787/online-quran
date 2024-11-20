import { Request, Response } from "express";

// Example contact message handler function
const createContactMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, message } = req.body;
    // Perform actions like saving to database here
    res.status(200).json({ message: "Contact message received successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default createContactMessage; // Default export
