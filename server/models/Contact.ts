import mongoose from "mongoose";

// Define the schema for the contact form
const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
