import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import ClientModel from "../models/clientModel.js";
import EmployeModel from "../models/employeModel.js";
import CommandeModel from "../models/commandeModel.js";
import ProduitModel from "../models/produitModel.js";
import UserModel from "../models/userModel.js";

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
// Initialisation des 

const Client = ClientModel(sequelize);
const Employe = EmployeModel(sequelize);
const Commande = CommandeModel(sequelize);
const Produit = ProduitModel(sequelize);
const User = UserModel(sequelize); // Correction de la casse

// One-to-One entre User et Client
User.hasOne(Client, { foreignKey: "userId", as:'clients', onDelete: "CASCADE" });
// One-to-One entre User et Employé
User.hasOne(Employe, {foreignKey: "userId", as : 'employes', onDelete: "CASCADE" });

// One-to-Many entre Client et Commande
Client.hasMany(Commande, {foreignKey: "clientId", as: "commandes", onDelete: "CASCADE" });
Commande.belongsTo(Client,{foreignKey: "clientId", as: "client", onDelete: "CASCADE" });


// Many-to-Many entre Commande et Produit
Commande.belongsToMany(Produit, { through: "comm_prod", onDelete: "CASCADE" });
Produit.belongsToMany(Commande, { through: "comm_prod", onDelete: "CASCADE" });


// Many-to-Many entre Employé et Commande
Commande.belongsToMany(Employe, { through: "comm_emp", onDelete: "CASCADE" });
Employe.belongsToMany(Commande, { through: "comm_emp", onDelete: "CASCADE" });


export default sequelize;