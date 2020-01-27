const mongoose = require("mongoose");

const Player = mongoose.model(
  "Player",
  new mongoose.Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    shortname: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    country: {
      type: new mongoose.Schema({
        picture: {
          type: String
        },
        code: {
          type: String
        }
      }),
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    data: new mongoose.Schema({
      rank: Number,
      points: Number,
      weight: Number,
      height: Number,
      age: Number,
      last: Array()
    })
  })
);

exports.Player = Player;
