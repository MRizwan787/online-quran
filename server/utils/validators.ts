import { body, validationResult } from "express-validator";

// Validation rules for the signup form
export const signupValidationRules = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("phone")
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage("Please provide a valid phone number."),
  body("gender").isIn(["male", "female", "other"]).withMessage("Gender must be 'male', 'female', or 'other'."),
  body("course").notEmpty().withMessage("Course is required."),
  body("pricingPlan").optional().isString().withMessage("Pricing plan must be a string."),
  body("message").optional().isString().withMessage("Message must be a string."),
];

// Validation rules for the contact form
export const contactValidationRules = [
  body("fullName").notEmpty().withMessage("Full name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("phone").matches(/^\+?[1-9]\d{1,14}$/).withMessage("Please provide a valid phone number."),
  body("country").notEmpty().withMessage("Country is required."),
  body("message").isString().withMessage("Message must be a string.").isLength({ min: 10 }).withMessage("Message must be at least 10 characters long."),
];

// Helper function to handle validation errors
export const handleValidationErrors = (req: any, res: any, next: any): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // No errors, proceed to the next middleware
};
