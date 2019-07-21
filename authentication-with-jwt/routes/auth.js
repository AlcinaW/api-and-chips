const router = require('express').Router();
const User = require('../model/User');

//create empty router 
router.post('/register', (request, response) => {
    //create new user with POST
    const user = new User({
        name: request.body.name,
        email: request.body.email
    });
});


module.exports = router;