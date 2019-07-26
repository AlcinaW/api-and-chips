//Validation
const Joi = require('@hapi/joi');

//Register validation
//wrap in function
const registerValidation = () => {
    const schema = {
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()

    };
}