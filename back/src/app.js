import express from "express";
import bodyParser from "body-parser";
import clientrouter from "./routes/clientRoute.js"; // Ajoutez ".js"
import employeRouter from "./routes/employeRoute.js"; // Employe route"
import produitRouter from "./routes/produitRoute.js"
import { registerRouter } from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:4200',
}));

app.use("/api/client", clientrouter);
app.use("/api/employe", employeRouter);
app.use("/api/produit", produit);
app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

export default app;
