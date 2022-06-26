const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: [isEmail, 'Please enter a valid email address'],
	},
	password: {
		type: String,
		required: true,
		minlength: [6, 'Password must be at least 6 characters'],
	},
	bookmarkedMedia: {
		type: Array,
		// ref: 'Media',
	},
});

module.exports = mongoose.model('User', UserSchema);
