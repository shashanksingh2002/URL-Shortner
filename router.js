const express = require('express');
const router = express.Router();
const userAuthenticate = require('./routers/userAuthenticate.router');

router.use('/auth', userAuthenticate);

module.exports = router;
