import express from "express";

import { userSignUpController } from "../controllers/userController";
import { signInController } from "../controllers/authControllers/signInController";
import { signInValidation } from "../validators/authValidator";

const router = express.Router();

router
  .post("/signup", userSignUpController)
  .post("/login", signInValidation, signInController);

export default router;
