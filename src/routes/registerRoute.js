import express from "express";
import {registerUserClient, registerUserEmploye } from "../auth/register.js";

export const registerRouter = express.Router();
registerRouter.post("/registerClient", registerUserClient);
registerRouter.post("/registerEmploye", registerUserEmploye);

