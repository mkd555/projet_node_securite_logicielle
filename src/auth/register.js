import bcrypt from "bcrypt";
import sequelize from "../config/sequelize.js"; // Import de sequelize
import { DataTypes } from "sequelize";

const User = sequelize.models.User; // Récupération du modèle User

export const register = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res
      .status(400)
      .json({ message: "Tous les champs sont obligatoires" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword, // Correction ici
      role,
    });

    res.status(201).json({ message: "Utilisateur créé", user });
  } catch (error) {
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }
};
