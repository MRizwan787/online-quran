import mongoose, { Schema, Document } from "mongoose";

export interface ISignup extends Document {
  name: string;
  email: string;
  phone: string;
  gender: string;
  course: string;
  pricingPlan?: string;
  message?: string;
}

const SignupSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    course: { type: String, required: true },
    pricingPlan: { type: String },
    message: { type: String },
  },
  { timestamps: true } // Auto-adds createdAt and updatedAt
);

const Signup = mongoose.model<ISignup>("Signup", SignupSchema);
export default Signup;
