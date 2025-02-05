import { DataTypes } from "sequelize";

export default function(sequelize){
const Employe = sequelize.define("employe", {
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
});
return Employe
}

