const mongoose = require("mongoose");
const schema = mongoose.Schema;

const taskSchena = new schema({
  name: String,
  description: String,
  done: Boolean,
  date: Date,
});

const Task = mongoose.model("Task", taskSchena, "Tasks");

module.exports = Task;
