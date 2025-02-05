import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Client from "../models/clientModel";
import Employe from "../models/employeModel";
import Commande from "../models/commandeModel";
import Produit from "../models/produitModel";

dotenv.config();
console.log(process.env.DB_USER);
console.log(process.env.DB_NAME);

const sequelize = new Sequelize( // Ajout de "new"
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.PASSWORD || "",
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

Commande.belongsToMany(Produit, { through: "comm_prod", onDelete: "cascade" });
Produit.belongsToMany(Commande, { through: "comm_prod", onDelete: "cascade" });

Client.hasMany(Commande, { as: "commandes", onDelete: "cascade" });
Commande.belongsTo(Client);
export default sequelize;
