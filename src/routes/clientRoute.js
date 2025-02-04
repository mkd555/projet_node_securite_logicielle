import express from "express";
import {
  addClient,
  getClient,
  getClientByID,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/client/add", addClient);
router.get("/client/all", getClient);
router.get("/client/:id", getClientByID);
router.put("/client/update/:id", updateClient);
router.delete("/client/delete/:id", deleteClient);

export default router;
