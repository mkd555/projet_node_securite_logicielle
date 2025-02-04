import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const Client = sequelize.define("Client", {
  id: {
    type: DataTypes.INTEGER, // Correction : autoIncrement doit être INTEGER et non STRING
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Client;
