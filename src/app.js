import express from "express";
import bodyParser from "body-parser";
import clientrouter from "./routes/clientRoute.js"; // Ajoutez ".js"
import employeRouter from "./routes/employeRoute.js"; // Employe route"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", clientrouter );
app.use("/api/employe",employeRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

export default app;
