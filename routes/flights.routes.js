require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Places = require('../models/Places.model')




module.exports = router