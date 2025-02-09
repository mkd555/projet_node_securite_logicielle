import express from "express";
import {
  deleteEmploye,
  getEmploye,
  getEmployeByID,
  updateEmploye,
 
} from "../controllers/employeController.js";

import {
  authorizeRole,
  middlewareAuthentication,
} from "../middleware/middlewareAuth.js";

const employeRouter = express.Router();

employeRouter.get(
  "/all",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  getEmploye
);
employeRouter.get(
  "/getOne/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  getEmployeByID
);
employeRouter.delete(
  "/delete/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  deleteEmploye
);
employeRouter.put(
  "/update/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  updateEmploye
);

export default employeRouter;
