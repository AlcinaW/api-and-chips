const router = require('express').Router();
const User = require('../model/User');
const { registerValidation } = require('../validation');



//create empty router 
router.post('/register', async (request, response) => {
    //validate the data before we create a user
    const { error } = registerValidation(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    //check if user is already in database
    const emailExist = await User.findOne({ email: request.body.email });
    if (emailExist) return response.status(400).send('Email already exists');

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