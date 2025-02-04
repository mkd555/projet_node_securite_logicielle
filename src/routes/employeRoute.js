import express from "express";
import { addEmploye, deleteEmploye, getEmploye, getEmployeByID, updateEmploye } from "../controllers/employeController.js";

const router = express.Router();

router.post("/add", addEmploye);
router.get("/all", getEmploye);
router.get("/getOne/:id", getEmployeByID);
router.delete("/delete/:id", deleteEmploye);
router.put("/update/:id", updateEmploye);

export default router;
