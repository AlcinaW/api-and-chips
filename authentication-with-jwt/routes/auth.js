const router = require('express').Router();
const User = require('../model/User');

//Validation
const Joi = require('@hapi/joi');

//schema for elevation
const schema = {
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()

}

//create empty router 
router.post('/register', async (request, response) => {
    //validate the data before making the user
    const { error } = Joi.validate(request.body, schema);
    //check in Postman what the object is with the errors
    //show the error message
    response.send(error.details[0].message);
    //create new user with POST
    // const user = new User({
    //     name: request.body.name,
    //     email: request.body.email,
    //     password: request.body.password
    // });
    // try {
    //     const savedUser = await user.save();
    //     response.send(savedUser);
    // } catch (err) {
    //     response.status(400).send(err);
    // }

});


module.exports = router;