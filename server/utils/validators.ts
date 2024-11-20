import { body } from "express-validator";

// Reusable validation rules for signup
export const signupValidationRules = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Invalid email address."),
  body("phone").notEmpty().withMessage("Phone number is required."),
  body("gender")
    .isIn(["male", "female", "other"])
    .withMessage("Gender must be 'male', 'female', or 'other'."),
  body("course").notEmpty().withMessage("Course selection is required."),
];

// Reusable validation rules for contact messages
export const contactValidationRules = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Invalid email address."),
  body("message").notEmpty().withMessage("Message cannot be empty."),
];
