const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter the type of excercise?",
      },

      name: {
        type: String,
        trim: true,
        required: "Please enter the name of excercise?",
      },

      duration: {
        type: Number,
        required: "Please enter duration of exercise in minutes?",
      },

      weights: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
