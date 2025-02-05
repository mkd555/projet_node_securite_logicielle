import { DataTypes } from "sequelize";

export default function (sequelize) {
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
  return Commande;
}
