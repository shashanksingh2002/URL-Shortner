const express = require('express')
const router = express.Router()
const userAuthenticateController = require('../controllers/userAuthenticate.controller')

router.post('/login', async (req, res) => userAuthenticateController.create(req, res))

module.exports = router