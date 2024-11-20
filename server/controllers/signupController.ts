import { Request, Response } from "express";

// Example signup handler function
const createSignupEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, gender, course, pricingPlan, message } = req.body;
    // Perform signup logic, e.g., saving to the database
    res.status(200).json({ message: "Signup successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default createSignupEntry; // Default export
