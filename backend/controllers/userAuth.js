const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

// Generate jwt token, high maxeAge
const maxAge = 30 * 24 * 60 * 60;
const generateToken = user => {
	return jwt.sign(
		{ id: user._id, name: user.name, email: user.email },
		process.env.JWT_SECRET,
		{
			expiresIn: maxAge,
		}
	);
};
const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	const checkUser = await User.findOne({
		email,
	});

	if (checkUser) {
		res.status(400).json({ errorMsg: `Email is already registered` });
	} else {
		const salt = await bcryptjs.genSalt();
		const hashedPassword = await bcryptjs.hash(password, salt);
		// const token = jwt.sign()
		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
			profiles: [
				{
					username: name,
					bookmarkedMedia: [],
				},
			],
			bookmarkedMedia: [],
		});

		const token = generateToken(newUser);
		// const token = jwt.sign(
		// 	{
		// 		id: newUser._id,
		// 		name: newUser.name,
		// 		email: newUser.email,
		// 	},
		// 	process.env.JWT_SECRET,
		// 	{ expiresIn: maxAge }
		// );

		res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });

		return res.status(201).json(newUser);
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const checkUser = await User.findOne({ email });

	if (checkUser) {
		const user = await User.findOne({ email }).select('-password');
		const verifyPassword = await bcryptjs.compare(password, checkUser.password);

		if (user && verifyPassword) {
			const token = generateToken(user);

			res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
			return res.status(200).json(user);
		} else {
			return res.status(401).json('Wrong password');
		}
	} else {
		return res.status(401).json(`Email is not registered`);
	}
};

module.exports = { registerUser, loginUser };
