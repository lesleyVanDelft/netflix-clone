const express = require('express');
const { registerUser, loginUser } = require('../controllers/userAuth');
const User = require('../Models/UserModel');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

module.exports = router;
