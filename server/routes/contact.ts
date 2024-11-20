import express from "express";
import { body, validationResult } from "express-validator";
import createContactMessage from "../controllers/contactController"; // Default import

const router = express.Router();

// Define POST route for contact form submission with express-validator middleware
router.post(
  "/",
  // Validation middleware using express-validator
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("message").notEmpty().withMessage("Message is required."),

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

  // Pass control to the contact controller if validation passes
  createContactMessage
);

export default router;
