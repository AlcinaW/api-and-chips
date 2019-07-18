const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('');

//Import routes
//navigate to route folder and get this file 
const authRoute = require('./routes/auth');

//Middlewares
//every auth route requires going to this URL
app.use('/api/user', authRoute);

//callback to check if the server is running
app.listen(3000, () => console.log('Server is a go!'));

