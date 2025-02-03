import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize( // Ajout de "new"
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD || "",
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

export default sequelize;
