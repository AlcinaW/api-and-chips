const router = require('express').Router();

//create empty router 
router.post('/register', (request, response) => {
    response.send('Register!');
});


module.exports = router;