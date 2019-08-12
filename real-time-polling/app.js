const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//set public folder 
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false }));

//enable CORS
app.use(cors());

//create port number
const port = 3000;

//start server 
app.listen();