const router = require('express').Router();
const User = require('../model/User');




//create empty router 
router.post('/register', async (request, response) => {
    //validate the data before we create a user
    const { error } = Joi.validate(request.body, schema);
    if (error) return response.status(400).send(error.details[0].message);

    //create new user with POST
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });
    try {
        const savedUser = await user.save();
        response.send(savedUser);
    } catch (err) {
        response.status(400).send(err);
    }

});


module.exports = router;