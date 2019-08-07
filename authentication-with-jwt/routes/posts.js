const router = require('express').Router();
const verify = require('./verifyToken');

//start private routes
router.get('/', verify, (request, response) => {
    response.send(request.user);
    Usre.findbyOne({ _id: request.user });
});

module.exports = router;