import express from "express";
import {
  addClient,
  getClient,
  getClientByID,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/add", addClient);
router.get("/all", getClient);
router.get("/:id", getClientByID);

export default router;
