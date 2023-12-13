const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


//include config file for database
const config = require('./config/database');


//connect to MongoDB using config file variable
mongoose.connect(config.database);

//check for connection/error and log
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database)
});

mongoose.connection.on('error', (err) => {
    console.log('Databse error '+err)
});


//initialize app variable
const app = express();

//bring in users file for routes
const users = require('./routes/users');

//create port number
const port = 3000;

//cors middleware
app.use(cors());

//set static folder to public
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



