//require express package
const express = require('express');
//call express 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
//the function that executes when routes are being hit 
//any time hit a route, use body-parser
app.use(bodyParser.json());

// app.use('/posts', () => {
//     console.log('Middleware running');
// });
//Import Routes
const postsRoute = require('./routes/posts');

//every time you go to /posts, use this route with middleware
app.use('/posts', postsRoute);

//ROUTES
//can add, edit, post, etc. and get a response back ex. sending a form
app.get('/', (request, response) => {
    response.send('We are on home');
});

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, //add object
    () => console.log('connected to database!'));

//listen to port 3000
app.listen(3000);

