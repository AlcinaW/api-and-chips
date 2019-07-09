const express = require('express');
const router = express.Router();
//create the post by importing the model
const Post = require('../models/Post');

router.get('/', (request, response) => {
    response.send('We are on posts');
});

// router.get('/specific', (request, response) => {
//     response.send('Specific posts');
// });

router.post('/', (request, response) => {
    console.log(request.body);
});

module.exports = router;

