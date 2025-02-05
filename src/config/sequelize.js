import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import ClientModel from "../models/clientModel.js";
import EmployeModel from "../models/employeModel.js";
import CommandeModel from "../models/commandeModel.js";
import ProduitModel from "../models/produitModel.js";
import userModel from "../models/userModel.js";

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
//Initializing models
const Commande = CommandeModel(sequelize);
const Produit = ProduitModel(sequelize);
const Client = ClientModel(sequelize);
const Employe = EmployeModel(sequelize);
const User = userModel(sequelize);

//Many to many between Cammande and Produit
Commande.belongsToMany(Produit, { through: "comm_prod", onDelete: "cascade" });
Produit.belongsToMany(Commande, { through: "comm_prod", onDelete: "cascade" });

//One to many between client and Commande
Client.hasMany(Commande, { as: "commandes", onDelete: "cascade" });
Commande.belongsTo(Client);

//Many to many between Employe and Commande
Commande.belongsToMany(Employe, { through: "comm_emp", onDelete: "cascade" });
Employe.belongsToMany(Commande, { through: "comm_emp", onDelete: "cascade" });

User.hasOne(Employe, { foreignKey: "userId" });
Employe.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasOne(Client, { foreignKey: "userId" });
Client.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

export default sequelize;
