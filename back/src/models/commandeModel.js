import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Commande = sequelize.define("Commande", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dateCommande: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    clientId: { // Ajout de la clé étrangère
      type: DataTypes.INTEGER,
      references: {
        model: "Clients", 
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  });
  return Commande;
}
