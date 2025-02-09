import express from "express";
import {
    addProduit,
    deleteProduit,
    getproduit,
    getProduitByID,
    updateProduit,
  } from "../controllers/employeController.js";

  import {
    authorizeRole,
    middlewareAuthentication,
  } from "../middleware/middlewareAuth.js";
  
  const produitRouter = express.Router();

//Add Produit
produitRouter.post(
    "/produit/add",
    middlewareAuthentication,
    authorizeRole(["admin", "employer"]),
    addProduit
  )
  //Get All Produit
  produitRouter.get(
    "/all",
    middlewareAuthentication,
    authorizeRole(["admin", "employer"]),
    getproduit
  )
  //Get Produit by ID
  produitRouter.get(
    "/getOneProduit/:id",
    middlewareAuthentication,
    authorizeRole(["admin", "employer"]),
    getProduitByID
  )
  //Update produit
  produitRouter.put(
    "/update/:id",
    middlewareAuthentication,
    authorizeRole(["admin", "employer"]),
    updateProduit
  )
  
  //Delete Produit
  produitRouter.delete(
    "/delete/:id",
    middlewareAuthentication,
    authorizeRole(["admin", "employer"]),
    deleteProduit
  )

  export default produitRouter;
