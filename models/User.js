const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  localization: String,
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"],
    default: "Pending Confirmation"
  },
  confirmationCode: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;
