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

router.post('/', async (request, response) => {
    const post = new Post({
        title: request.body.title,
        description: request.body.description
    });
    //save to database, returns a promise
    try {
        const savedPost = await post.save();
        response.json(savedPost);
    } catch (err) {
        response.json({ message: err });
    }
});

module.exports = router;

