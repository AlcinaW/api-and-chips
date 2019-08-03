const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

//create empty router 
router.post('/register', async (request, response) => {
    //validate the data before we create a user
    const { error } = registerValidation(request.body);
    if (error) return response.status(400).send(error.details[0].message);

    //check if user is already in database
    const emailExist = await User.findOne({ email: request.body.email });
    if (emailExist) return response.status(400).send('Email already exists');

    //hash passwords, generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt);

    //create new user with POST
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        response.send({ user: user._id });
    } catch (err) {
        response.status(400).send(err);
    }

});

//log in 
router.post('/login', async (request, response) => {

    const { error } = loginValidation(request.body);
    if (error) return response.status(400).send(error.details[0].message);
    //check if email exists
    const user = await User.findOne({ email: request.body.email });
    if (!user) return response.status(400).send('Email or password is wrong');
    //is password correct?
    const validPassword = await bcrypt.compare(request.body.password, user.password);
    if (!validPassword) return response.status(400).send('Invalid password or email');

    //create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    response.send('Logged in');
});

module.exports = router;