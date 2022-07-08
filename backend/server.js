require('dotenv').config();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/authRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const bookmarkRoutes = require('./routes/bookmarkRoutes');

// Connect to MongoDB and initialize express app
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('tiny'));

// app.get('/', (req, res) => {
// 	res.status(302).redirect('http://localhost:3000');
// });

// Routes
app.use('/api/users', authRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

app.get('/login', (req, res) => {
	// res.status(301).redirect('http://localhost:3000/login');

	res.status(301).redirect('https://ent-lesley.herokuapp.com');
});

app.get('/register', (req, res) => {
	res.status(301).redirect('https://ent-lesley.herokuapp.com');
});

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('/*', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
		);
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}

app.listen(PORT, () => {
	console.log(`Netflixclone is running on port ${PORT}`);
});
