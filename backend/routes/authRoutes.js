const express = require('express');
const { setBookmark } = require('../controllers/bookmarkMedia');
const {
	addProfile,
	editProfile,
	deleteProfile,
} = require('../controllers/profileController');
const { registerUser, loginUser } = require('../controllers/userAuth');

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/addBookmark', setBookmark);

router.post('/addProfile', addProfile);

router.post('/editProfile', editProfile);

router.delete('/deleteProfile', deleteProfile);

module.exports = router;
