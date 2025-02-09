import express from "express";
import {
  addProduit,
  deleteEmploye,
  deleteProduit,
  getEmploye,
  getEmployeByID,
  getproduit,
  getProduitByID,
  updateEmploye,
  updateProduit,
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


//Add Produit
employeRouter.post(
  "/produit/add",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  addProduit
)
//Get All Produit
employeRouter.get(
  "/produit/all",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  getproduit
)
//Get Produit by ID
employeRouter.get(
  "/produit/getOneProduit/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  getProduitByID
)
//Update produit
employeRouter.put(
  "/produit/update/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  updateProduit
)

//Delete Produit
employeRouter.delete(
  "/produit/delete/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "employer"]),
  deleteProduit
)

export default employeRouter;
