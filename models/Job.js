const mongoose = require("mongoose")

const Job = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  compagny: {
    type: String,
    required: true
  },
  description: String,
  requiredYearsExperience: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  admin: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model("job", Job)