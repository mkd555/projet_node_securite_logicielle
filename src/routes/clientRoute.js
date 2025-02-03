import express from "express";
import { addClient } from "../controllers/clientController.js";

const router = express.Router();

router.post("/add", addClient);

export default router;
