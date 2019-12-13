const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

const Pusher = require('pusher');

//put key here
let channels_client = new Pusher({
    appId: process.env.PUSHER_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_KEY,
    cluster: 'us2',
    encrypted: true
});

router.get('/', (request, response) => {
    response.send('Poll');
});

router.post('/', (request, response) => {
    channels_client.trigger('os-poll', 'os-vote', {
        points: 1,
        os: request.body.os
    });
    return response.json({ success: true, message: 'Thank you for voting' })
});

module.exports = router;


