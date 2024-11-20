import express from "express";
import { body, validationResult } from "express-validator";
import createSignupEntry from "../controllers/signupController"; // Default import

const router = express.Router();

// Define POST route for signup form submission with express-validator middleware
router.post(
  "/",
  // Validation middleware using express-validator
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("phone")
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage("Please provide a valid phone number."),
  body("gender").isIn(["male", "female"]).withMessage("Gender must be 'male' or 'female'."),
  body("course").notEmpty().withMessage("Course is required."),
  body("pricingPlan").optional().isString().withMessage("Pricing plan must be a string."),
  body("message").optional().isString().withMessage("Message must be a string."),

  // Validation result handling
  (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const errors = validationResult(req);

    // If there are validation errors, send the errors as response
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      next(); // If validation passes, move to the controller
    }
  },

  // Pass control to the signup controller if validation passes
  createSignupEntry
);

export default router;
