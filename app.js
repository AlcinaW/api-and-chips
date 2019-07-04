//require express package
const express = require('express');
//call express 
const app = express();

//ROUTES
//can add, edit, post, etc. and get a response back ex. sending a form
app.get('/', (request, response) => {
    response.send('We are on home');
});
//listen to port 3000
app.listen(3000);

