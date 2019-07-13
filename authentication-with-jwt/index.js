const express = require('express');
const app = express();

//callback to check if the server is running
app.listen(3000, () => console.log('Server is a go!'));