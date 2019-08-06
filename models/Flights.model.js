const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightsSchema = new Schema(
  {
    origin: String,
    destination: String,
    departureDate: Number,
    returnDate: Number,
    price: String,

  },
  { timestamps: true }
)

const Flights = mongoose.model('Flights', flightsSchema)
module.exports = Flights
