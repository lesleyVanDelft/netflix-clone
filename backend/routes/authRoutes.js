const express = require('express');
const { setBookmark } = require('../controllers/bookmarkMedia');
const { addProfile } = require('../controllers/profileController');
const { registerUser, loginUser } = require('../controllers/userAuth');
const User = require('../Models/UserModel');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/addBookmark', setBookmark);

router.post('/addProfile', addProfile);

module.exports = router;
