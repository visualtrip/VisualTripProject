const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema(
  {
    name: String,
    url: String,
    lat: Number,
    lon: Number,
    category: String,
    localization: String

  },
  { timestamps: true }
)

const Places = mongoose.model('Places', placesSchema)
module.exports = Places
