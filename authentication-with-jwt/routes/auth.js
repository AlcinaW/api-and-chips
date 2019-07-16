const router = require('express').Router();

//create empty router 
router.post('/register', (response, request) => {
    response.send('Register!');
});


module.exports = router;