const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const Media = require('../Models/MediaModel');

const addProfile = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded.id);

	// console.log(req.body);

	if (!user) {
		return res.status(400).json('User not found');
	} else {
		user.profiles = user.profiles.concat(req.body);
		await user.save();
	}

	res.status(201).end();
	// res.status(200).send('addProfile');
};

module.exports = { addProfile };
