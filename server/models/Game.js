const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const gameSchema = new Schema({
  teams: [
    {
      type: String,
      required: true,
    },
  ],
  scores: [
    {
      type: Number,
      required: true,
    },
  ],
  // saved book id from GoogleBooks
  location: {
    type: String,
  },
});

module.exports = gameSchema;
