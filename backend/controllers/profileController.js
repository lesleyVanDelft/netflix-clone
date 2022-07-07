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

const editProfile = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded.id);
	const currentProfile = user.profiles.filter(
		profile => profile._id.toString() === req.body.profileId.toString()
	);

	if (!user) {
		return res.status(400).json('User not found');
	} else {
		currentProfile[0].username = req.body.username;
		await user.save();
		// console.log(currentProfile);
	}

	res.status(201).end();
};

const deleteProfile = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded.id);
	// const currentProfile = user.profiles.filter(
	// 	profile => profile._id.toString() === req.body.profileId.toString()
	// );

	if (!user) {
		return res.status(400).json('Not allowed....');
	}

	// if (!currentProfile) {
	// 	return res.status(400).json('Profile does not exist in database');
	// }

	console.log(
		user.profiles.filter(
			prof => prof._id.toString() !== req.body.profileId.toString()
		)
	);

	user.profiles = user.profiles.filter(
		prof => prof._id.toString() !== req.body.profileId.toString()
	);

	await user.save();
	res.status(200).end();
};

module.exports = { addProfile, editProfile, deleteProfile };
