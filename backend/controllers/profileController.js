const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const Media = require('../Models/MediaModel');

const createProfile = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded.id);

	if (!user) {
		return res.status(400).json('User not found');
	}
};
