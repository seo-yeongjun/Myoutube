import "core-js";
import express from "express";
const app = express();
const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello");
const handleprofile = (req, res) => res.send("It's my profile");
app.get("/", handleHome);
app.get("/profile", handleprofile);
app.listen(PORT, handleListening);
