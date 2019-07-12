const express = require('express');
const router = express.Router();
//create the post by importing the model
const Post = require('../models/Post');


//Get back all posts
router.get('/', async (request, response) => {
    try {
        const posts = await Post.find();
        response.json(posts);
    } catch (err) {
        response.json({ message: err });
    }
});

//Submit a post
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

//Get back a specific post
router.get('/:postId', async (request, response) => {
    try {
        const post = await Post.findById(response.params.postId);
        response.json(post);
    } catch (err) {
        response.json({ message: err });
    }
});

//Delete Post
router.delete('/:postId', async (request, response) => {
    try {
        const removedPost = await Post.remove({ _id: request.params.postId });
        response.json(removedPost);
    } catch (err) {
        response.json({ message: err });
    }
});

//Update a post
router.patch(':/postId', async (request, response) => {

    try {
        const updatedPost = await Post.updateOne(
            { _id: request.params.postId },
            { $set: { title: request.body.title } }
        );
        response.json(updatedPost);
    } catch (err) {
        response.json({ message: err });
    }

});

module.exports = router;

