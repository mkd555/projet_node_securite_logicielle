import express from "express";
import bodyParser from "body-parser";
import router from "./routes/clientRoute.js"; // Ajoutez ".js"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

export default app;
