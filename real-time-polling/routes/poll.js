const express = require('express');
const router = express.Router();

const pusher = require('pusher');

//put key here

router.get('/', (request, response) => {
    response.send('Poll');
});

router.post('/', (request, response) => {

});

module.exports = router;


