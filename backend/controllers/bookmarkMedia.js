const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const Media = require('../Models/MediaModel');

const setBookmark = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const { mediaId } = req.params;
	const user = await User.findById(decoded.id);
	const mediaItem = await Media.findById(mediaId);
	// console.log(typeof mediaId);

	if (!user) {
		return res.status(401).json('User not found');
	}

	if (!mediaId) {
		return res.status(400).json('Media not found');
	}

	// user.bookmarkedMedia.includes(mediaItem._id) &&
	// 	console.log(
	// 		user.bookmarkedMedia.filter(
	// 			bm => bm._id.toString() !== mediaItem._id.toString()
	// 		)
	// 	);

	// if (mediaItem) {
	// 	const bookmarked = user.bookmarkedMedia.filter(bm => {
	// 		bm._id.toString() !== mediaItem._id.toString();
	// 	});
	// 	// console.log(bookmarked);
	// }
	// user.bookmarkedMedia.length > 0 &&
	// console.log(
	// 	user.bookmarkedMedia.filter(bm => {
	// 		bm._id.toString() !== mediaItem._id.toString();
	// 	})
	// );

	// check user and mediaItem are sent, if user bookmarkMedia does not contain clicked mediaItem, add it to bookmarklist
	// // if user bookmarkMedia does contain it,remove it from list
	if (user.bookmarkedMedia.includes(mediaItem._id)) {
		// user.bookmarkedMedia = user.bookmarkedMedia.filter(bookmark => {
		// 	bookmark._id.toString() !== mediaItem._id.toString();
		// });
		// console.log(object);
		// res.status(201).send('includes');

		user.bookmarkedMedia = user.bookmarkedMedia
			.map(bookmark => bookmark)
			.filter(bm => bm.toString() !== mediaItem._id.toString());

		console.log('true');
		await user.save();
	} else {
		user.bookmarkedMedia = user.bookmarkedMedia.concat(mediaItem._id);
		console.log('false');
		await user.save();
		// 	user.updateOne({ _id: user._id });
		// 	// res.status(201).send('concat');
	}

	// await user.save();
	// res.status(201).json(user);
	res.status(201).end();
	// }
};

const deleteBookmark = async (req, res) => {
	const token = req.cookies.jwt;
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const { mediaId } = req.params;
	const user = await User.findById(decoded.id);
	const mediaItem = await Media.findById(mediaId);

	if (!user) {
		return res.status(401).json('User not found');
	}

	if (!mediaId) {
		return res.status(400).json('Media not found');
	}
	console.log(!user.bookmarkedMedia.includes(mediaId));

	if (user.bookmarkedMedia.includes(mediaItem._id)) {
		user.bookmarkedMedia.filter(bookmark => {
			bookmark._id === mediaItem._id;
		});
	} else {
		res.status(400).send({ error: 'delete bm error' });
	}
	await user.save();
	res.status(201).end();
};

module.exports = {
	setBookmark,
	deleteBookmark,
};

// if (user && mediaItem) {
// 	// if (user.bookmarkedMedia.includes(mediaId.toString())) {
// 	// user.bookmarkedMedia = user.bookmarkedMedia.filter(bookmark => {
// 	// 	mediaId.toString() !== bookmark._id.toString();
// 	// });

// 	user.bookmarkedMedia
// 		.filter(m => m._id.toString() !== mediaId.toString())
// 		.map(media => {
// 			console.log(media);
// 		});
// 	if (mediaItem.isBookmarked) {
// 		// mediaItem.isBookmarked = false;

// 		// user.bookmarkedMedia.filter(
// 		// 	media => media._id.toString() !== mediaItem._id.toString()
// 		// );

// 		await user.save();
// 	} else {
// 		// mediaItem.isBookmarked = true;
// 		user.bookmarkedMedia = user.bookmarkedMedia.concat(mediaItem);
// 		await user.save();
// 	}
// 	// await user.save();
// } else {
// 	// user.bookmarkedMedia = [...user.bookmarkedMedia, mediaItem];
// 	// mediaItem.isBookmarked = true;
// 	// user.bookmarkedMedia = user.bookmarkedMedia.concat(mediaItem);
// 	// await user.save();
// 	console.log('smt wentwrong');
// }
