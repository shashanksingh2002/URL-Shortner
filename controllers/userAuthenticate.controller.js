const {VALIDATION} = require('../constants/errorMessage');
const {isValidForCreate, isValidForLogin} = require('../validators/userAuthenticate.validator');
const userAuthenticateService = require('../services/userAuthenticate.service');

const create = async (req, res) => {
  try {
    const validatedData = await isValidForCreate(req.body);
    if (validatedData) {
      const createUser = await userAuthenticateService.create(validatedData);
      return res.json(createUser);
    } else {
      return res.json(validatedData);
    }
  } catch (err) {
    return res.json(err.details[0].message);
  }
};

const login = async (req, res) => {
  try {
    const validatedData = await isValidForLogin(req.body);
    if (validatedData) {
      const userLogin = await userAuthenticateService.login(validatedData);
      return res.json(userLogin);
    } else {
      return res.json(validatedData);
    }
  } catch (err) {
    return res.json(err.details[0].message);
  }
};

module.exports = {
  create,
  login,
};
