import { DataTypes } from "sequelize";

export default function (sequelize) {
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
  return Produit;
}
