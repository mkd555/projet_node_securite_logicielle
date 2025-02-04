import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const Produit = sequelize.define("Produit", {
  id: {
    type: DataTypes.INTEGER, // Correction : autoIncrement doit être INTEGER et non STRING
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  libelle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
});

export default Produit;
