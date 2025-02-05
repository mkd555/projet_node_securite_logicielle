import app from "./src/app.js";
import dotenv from "dotenv";
import sequelize from "./src/config/sequelize.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server running on PORT: ${PORT}`);
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("creation des tables avec success");
    })
    .catch((err) => {
      console.log(`Error lors de la creation des table : ${err}`);
    });
});
