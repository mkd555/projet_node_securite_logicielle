import { DataTypes } from "sequelize";

export default function (sequelize) {
  const Employe = sequelize.define("Employe", {
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
    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: { 
      type: DataTypes.INTEGER,
      references: {
        model: "Users", 
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  });
  return Employe;
}
