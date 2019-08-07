const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelsSchema = new Schema(
  {
    name: String,
    urlBooking: String,
    score: Number,
    description: String,
    owner: [{type: String, ref: 'User'}]
  },
  { timestamps: true }
)

const Hotels = mongoose.model('Hotels', hotelsSchema)
module.exports = Hotels
