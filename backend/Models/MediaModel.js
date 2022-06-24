const mongoose = require('mongoose');

const MediaModel = mongoose.Schema({
	title: {
		type: String,
	},
	thumbnail: {
		type: Object,
		trending: {
			type: Object,
			small: {
				type: String,
			},
			large: {
				type: String,
			},
		},
		regular: {
			type: Object,
			small: {
				type: String,
			},
			medium: {
				type: String,
			},
			large: {
				type: String,
			},
		},
	},
	year: {
		type: Number,
	},
	category: {
		type: String,
	},
	rating: {
		type: String,
	},
	isBookmarked: {
		type: Boolean,
	},
	isTrending: {
		type: Boolean,
	},
});

module.exports = mongoose.model('Media', MediaModel);
