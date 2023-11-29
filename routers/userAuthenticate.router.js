const express = require('express')
const router = express.Router()
const userAuthenticateController = require('../controllers/userAuthenticate.controller')

router.post('/signin', async (req, res) => userAuthenticateController.create(req, res))

module.exports = router