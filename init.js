import app from "./app";
import "./db";
import dotenv from "dotenv";
import "./models/video";
dotenv.config();
const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`😊listening on : html//localhost:${PORT}`);

app.listen(PORT, handleListening);
