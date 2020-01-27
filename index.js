const express = require("express");
const players = require("./routes/players");

const app = express();

app.use(express.json());
app.use("/players", players);

const server = app.listen(3000, () =>
  console.log("Le serveur est en écoute...")
);

module.exports = server;
