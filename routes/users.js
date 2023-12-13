const express = require('express');
const router = express.Router();

//all links dont need /user because its in users.js so its automatic

//Register 
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//validate (for checking tokens) 
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;