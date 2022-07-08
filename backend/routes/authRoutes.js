const express = require('express');
const { setBookmark } = require('../controllers/bookmarkMedia');
const {
	addProfile,
	editProfile,
	deleteProfile,
} = require('../controllers/profileController');
const { registerUser, loginUser } = require('../controllers/userAuth');

const router = express.Router();

app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Origin',
		'https://feedback-lesley.herokuapp.com/api/users'
		// 'http:localhost:5000/api/feedbacks'
	); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/addBookmark', setBookmark);

router.post('/addProfile', addProfile);

router.post('/editProfile', editProfile);

router.delete('/deleteProfile', deleteProfile);

module.exports = router;
