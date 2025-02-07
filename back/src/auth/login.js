import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sequelize from "../config/sequelize.js";
const User = sequelize.models.User;

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email et password requis." });
  }
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ message: `l'email n'exite pas` })
        .send("email ou mot de passe invalide");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: `Password invalide` })
        .send("email ou mot de passe invalide");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
