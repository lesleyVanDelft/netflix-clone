const express = require('express');
const Media = require('../Models/MediaModel');

const router = express.Router();

router.get('/all', async (req, res) => {
	try {
		const allMedia = await Media.find({});
		res.status(200).json(allMedia);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
