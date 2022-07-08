const express = require('express');
const Media = require('../Models/MediaModel');

const router = express.Router();

app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Origin',
		'https://ent-lesley.herokuapp.com/api/media'
		// 'http:localhost:5000/api/feedbacks'
	); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

router.get('/all', async (req, res) => {
	try {
		const allMedia = await Media.find({});
		res.status(200).json(allMedia);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
