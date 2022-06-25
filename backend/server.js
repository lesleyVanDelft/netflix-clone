require('dotenv').config();
const cors = require('cors');
const path = require('path');

const bodyParser = require('body-parser');
const colors = require('colors');
const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/connectDB');
const mediaRoutes = require('./routes/mediaRoutes');
connectDB();

const app = express();
// const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/media', mediaRoutes);

// app.get('/api/media/all', async (req, res) => {});

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
