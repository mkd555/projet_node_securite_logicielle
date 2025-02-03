import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server running on PORT: ${PORT}`);
});
