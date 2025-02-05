import jwt from "jsonwebtoken";

export const middlewareAuthentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: `Access interdit Aucun TOKEN` });
  }
  //verifier le Token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json("Token invalide");
  }
};

export const authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Accès interdit." });
  }
  next();
};
