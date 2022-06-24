require('dotenv').config();
const cors = require('cors');
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

app.get('/api/media/all', async (req, res) => {});

app.listen(PORT, () => {
	console.log(`Netflixclone is running on port ${PORT}`);
});
