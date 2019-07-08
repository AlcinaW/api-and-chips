const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('We are on posts');
});

router.get('/specific', (request, response) => {
    response.send('Specific posts');
});

module.exports = router;