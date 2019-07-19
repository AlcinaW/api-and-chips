const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Connect to database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to database!'));

//Import routes
//navigate to route folder and get this file 
const authRoute = require('./routes/auth');

//Middlewares
//every auth route requires going to this URL
app.use('/api/user', authRoute);

//callback to check if the server is running
app.listen(3000, () => console.log('Server is a go!'));

