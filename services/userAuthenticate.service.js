const Users = require('../models/UserInfo');
const {hashPassword, cmpHashedPassword} = require('../helpers/bcrypt');
const {createJWT} = require('../helpers/jwt');
const create = async (payload) => {
  const {first_name, last_name, email, password, ph_number} = payload;
  const existingUser = await Users.query()
      .where({email, ph_number})
      .first();

  if (existingUser) {
    return {message: 'This user already exists. Please go to login.', user: existingUser.message};
  } else {
    const hashedPassword = await hashPassword(password);
    const newUser = await Users.query().insert({
      email,
      ph_number,
      password: hashedPassword,
      first_name,
      last_name,
    });

    return {message: 'User created successfully.', user: newUser};
  }
};

const login = async (payload) => {
  const {email, password} = payload;
  const user = await Users.query().findOne({
    email,
  });
  if (user) {
    const isPasswordCorrect = await cmpHashedPassword(password, user.password);
    if (isPasswordCorrect) {
      const jwToken = createJWT({
        email: user.email,
        name: user.first_name+user.last_name,
      });
      return {message: 'Logged in sucessfully', token: jwToken};
    } else {
      return {message: 'Wrong Password'};
    }
  } else {
    return {message: 'This email does not exists'};
  }
};

module.exports = {
  create,
  login,
};
