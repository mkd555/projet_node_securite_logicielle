import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_USER);
console.log(process.env.DB_NAME);

const sequelize = new Sequelize( // Ajout de "new"
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.PASSWORD || "",
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

export default sequelize;
