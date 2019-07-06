//require express package
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
//call express 
const app = express();

//Middlewares
//the function that executes when routes are being hit 
// app.use('/posts', () => {
//     console.log('Middleware running');
// });

//ROUTES
//can add, edit, post, etc. and get a response back ex. sending a form
app.get('/', (request, response) => {
    response.send('We are on home');
});
app.get('/posts', (request, response) => {
    response.send('We are on posts');
});

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, //add object
    () => console.log('connected to database!'));

//listen to port 3000
app.listen(3000);

