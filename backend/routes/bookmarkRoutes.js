const express = require('express');
const { setBookmark, deleteBookmark } = require('../controllers/bookmarkMedia');

const app = express();
const router = express.Router();
app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Origin',
		'https://feedback-lesley.herokuapp.com/api/bookmarks'
		// 'http:localhost:5000/api/feedbacks'
	); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

router.post('/add/:mediaId', setBookmark);
router.post('/add/:mediaId', deleteBookmark);
// router.post('/delete/:mediaId', deleteBookmark);

module.exports = router;
