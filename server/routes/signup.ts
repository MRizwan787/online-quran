import express from "express";
import { body, validationResult } from "express-validator";
import { createSignupEntry, getSignupEntries } from "../controllers/signupController"; // Import both controller functions

const router = express.Router();

// POST route: Create signup entry
router.post(
  "/",
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("phone")
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage("Please provide a valid phone number."),
  body("gender").isIn(["male", "female"]).withMessage("Gender must be 'male' or 'female'."),
  body("course").notEmpty().withMessage("Course is required."),
  body("pricingPlan").optional().isString().withMessage("Pricing plan must be a string."),
  body("message").optional().isString().withMessage("Message must be a string."),
  (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  },
  createSignupEntry
);

// GET route: Fetch all signup entries
router.get("/", getSignupEntries);

export default router;
