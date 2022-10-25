const { Schema, model } = require("mongoose");

// import schema from Book.js
const gameSchema = require("./Game");

const recordSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  // set savedBooks to be an array of data that adheres to the bookSchema
  game: gameSchema,
  date: String,
});

const Record = model("Record", recordSchema);

module.exports = Record;
