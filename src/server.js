import express from "express";
import { reset } from "nodemon";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("Final Rounge");
};

app.get("/", logger, handleHome);

const handleListening = () => console.log(`✔️ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
