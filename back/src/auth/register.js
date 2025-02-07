import bcrypt from "bcrypt";
import sequelize from "../config/sequelize.js"; // Import de sequelize
import { DataTypes } from "sequelize";
import clientModel from "../models/clientModel.js";
import employeModel from "../models/employeModel.js";

//import { Client } from "pg";
const Employe = employeModel(sequelize)
const Client = clientModel(sequelize)
const User = sequelize.models.User; // Récupération du modèle User

//This function is used for client registration 
export const registerUserClient = async (req, res) => {
  const { email, password,nom,prenom,telephone } = req.body;

  if (!email || !password || !prenom || !nom || !telephone) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
      email,
      password: hashedPassword, // Correction ici
      role:'client',
    }).then((user)=>{
      Client.create({
        nom,
        prenom,
        telephone,
        userId:user.id
      }
      )
      res.status(203).json({ message: "Utilisateur créé", user });
    }).catch((error) =>{
      res.status(500).json({ message: `Erreur serveur : ${error.message}` });
    })
   
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};

//This function is used for employe registration 
export const registerUserEmploye = async (req, res) => {
  const { email, password,nom,prenom,telephone,adresse } = req.body;

  if (!email || !password || !prenom || !nom || !telephone || !adresse) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword, // Correction ici
      role:'employe',
    }).then((user)=>{
      Employe.create({
        nom,
        prenom,
        telephone,
        adresse,
        userId:user.id
      }
      )
      res.status(203).json({ message: "Utilisateur créé", user });
    }).catch((error) =>{
      res.status(500).json({ message: `Erreur serveur : ${error.message}` });
    })
   
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};
