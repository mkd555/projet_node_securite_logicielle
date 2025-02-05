import express from "express";
import { register } from "../auth/register.js";

export const registerRouter = express.Router();
registerRouter.post("/register", register);
