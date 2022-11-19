const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  engineCapacity: {
    type: Number,
    required: true
  },
  horsePower: {
    type: Number,
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;