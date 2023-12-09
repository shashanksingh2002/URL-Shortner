require('./envloader')();
const jwt = require('jsonwebtoken');
const {TOKEN, AUTHORISED} = require('../constants/errorMessage');

const secretKey = process.env.JWT_SECRET_KEY;


module.exports = {
  createJWT: (data) => {
    return jwt.sign({...data}, secretKey, {
      expiresIn: 3*60*60*24,
    });
  },
  authenticateJWT: (req, res, next) => {
    const auth = req.cookies.jwt;
    if (auth) {
      jwt.verify(auth, secretKey, (err) => {
        if (err) return res.json(TOKEN);
        else next();
      });
    } else {
      return res.json(AUTHORISED);
    }
  },
};
