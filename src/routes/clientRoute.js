import express from "express";
import {
  addClient,
  getClient,
  getClientByID,
  updateClient,
  deleteClient,
  getClientCommande,
} from "../controllers/clientController.js";
import {
  authorizeRole,
  middlewareAuthentication,
} from "../middleware/middlewareAuth.js";

const clientRouter = express.Router();

clientRouter.post(
  "/add",
  middlewareAuthentication,
  authorizeRole(["admin", "client"]),
  addClient
);
clientRouter.get(
  "/all",
  middlewareAuthentication,
  authorizeRole(["admin", "client"]),
  getClient
);
clientRouter.get(
  "/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "client"]),
  getClientByID
);
clientRouter.put(
  "/update/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "client"]),
  updateClient
);
clientRouter.delete(
  "/delete/:id",
  middlewareAuthentication,
  authorizeRole(["admin", "client"]),
  deleteClient
);

clientRouter.get("/getCom",getClientCommande)
export default clientRouter;
