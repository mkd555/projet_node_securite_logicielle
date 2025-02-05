import sequelize from "../config/sequelize";
import { DataTypes } from "sequelize";

const Commande = sequelize.define("commande", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  dateCommande: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
export default Commande;
