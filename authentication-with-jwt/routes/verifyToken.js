const jwt = require('jsonwebtoken');

//middleware function
function auth(request, response, next) {
    //for each request, check if header token is present
    const token = request.header('auth-token');
    if (!token) return response.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //if okay, add to user
        request.user = verified;
    } catch (err) {
        response.status(400).send('Invalid token');
    }
}
