const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const Media = require('../Models/MediaModel');
const setBookmark = async (req, res) => {
	// console.log(req.cookies);
	// console.log(req.cookie);
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	const user = await User.findById(decoded.id);
	// console.log(req.body.content);
	const mediaItem = await Media.findById(req.body._id);

	// console.log(user.bookmarkedMedia);

	if (!user) {
		return res.status(401).json('User not found');
	}

	if (user && mediaItem) {
		const updatedUser = await User.findByIdAndUpdate(
			decoded.id,
			{ ...user, user: user.bookmarkedMedia.push(mediaItem) },
			{ new: true }
			// (user.bookmarkedMedia = user.bookmarkedMedia.push(mediaItem))
		);

		return res.status(204).json(updatedUser);
	}
};

module.exports = {
	setBookmark,
};
