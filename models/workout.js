const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number,
    default: Date.now
  },
  exercises: Array
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout