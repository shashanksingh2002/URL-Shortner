const Users = require('../models/UserInfo');
const { hashPassword } = require('../helpers/bcrypt')
const create = async (payload) => {
    const { first_name, last_name, email, password, ph_number } = payload
    const existingUser = await Users.query()
        .where({ email, ph_number })
        .first();

    if (existingUser) {
        return { message: 'This user already exists. Please go to login.', user: existingUser.message };
    } else {
        const hashedPassword = await hashPassword(password)
        const newUser = await Users.query().insert({
            email,
            ph_number,
            password: hashedPassword,
            first_name,
            last_name,
        });

        return { message: 'User created successfully.', user: newUser };
    }
};

module.exports = {
    create,
};
