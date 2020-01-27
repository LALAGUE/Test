const { Player } = require("../models/player");
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const players = await axios.get(
    "https://alivebyacadomia.github.io/headtohead.json"
  );
  res.send(players.data.players.sort((a, b) => a.id > b.id));
});

router.get("/:id", async (req, res) => {
  let { data } = await axios.get(
    "https://alivebyacadomia.github.io/headtohead.json"
  );

  if (data.players.findIndex(player => player.id == req.params.id) === -1)
    return res.status(404).send("The player does not exist");

  res.send(data.players.filter(pl => pl.id == req.params.id));
});

module.exports = router;
