const express = require('express')
const router = express.Router()
const demo = require('./route/demo.js')
const login = require('./route/login.js')
const authen = require('./route/authen.js')
const emailsender = require('./route/emailsender.js')


router.use('/demo', demo)
router.use('/login', login)
router.use('/authen', authen)
router.use('/emailsender', emailsender)

module.exports = router