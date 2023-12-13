const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize app variable
const app = express();

const users = require('./routes/users');

//create port number
const port = 3000;

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//will go to users file with route
app.use('/users', users)

//route to homepage
app.get('/', (req, res) => {
    res.send('invalid endpoint')
}
)

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
} );



