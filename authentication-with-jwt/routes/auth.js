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
    const validation = Joi.validate(request.body, schema);
    response.send(validation);
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