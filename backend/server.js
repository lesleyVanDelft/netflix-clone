require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/connectDB');
const express = require('express');

connectDB();

const app = express();
const router = express.Router();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
	res.status(200).send('test works');
});

app.listen(PORT, () => {
	console.log(`Netflixclone is running on port ${PORT}`);
});
