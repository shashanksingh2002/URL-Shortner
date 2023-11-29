const Joi = require('joi')

const isValidForCreate = async (payload) => {
    const schema = Joi.object({
        first_name: Joi.string().min(2).max(50).required().messages({
            'string.base': `"first_name" should be a type of 'text'`,
            'string.empty': `"first_name" cannot be an empty field`,
            'any.required': `"first_name" is a required field`,
            'string.min': `"first_name" should have a minimum length of {#limit}`,
            'string.max': `"first_name" should have a maximum length of {#limit}`,
        }),
        last_name: Joi.string().min(2).max(50).required().messages({
            'string.base': `"last_name" should be a type of 'text'`,
            'string.empty': `"last_name" cannot be an empty field`,
            'any.required': `"last_name" is a required field`,
            'string.min': `"last_name" should have a minimum length of {#limit}`,
            'string.max': `"last_name" should have a maximum length of {#limit}`,
        }),
        email: Joi.string().email().required().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'any.required': `"email" is a required field`,
            'string.email': `"email" should be a valid email address`,
        }),
        password: Joi.string().min(8).required().messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'any.required': `"password" is a required field`,
            'string.min': `"password" should have a minimum length of {#limit}`,
        }),
        ph_number: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
            'string.base': `"ph_number" should be a type of 'text'`,
            'string.empty': `"ph_number" cannot be an empty field`,
            'any.required': `"ph_number" is a required field`,
            'string.pattern.base': `"ph_number" should be a 10-digit number`,
        }),
    })
    return schema.validateAsync(payload);
}

module.exports = {
    isValidForCreate,
}
