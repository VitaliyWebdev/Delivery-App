import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const signInValidation = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").trim().notEmpty().withMessage("Password cannot be empty"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
