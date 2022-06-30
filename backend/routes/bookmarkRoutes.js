const express = require('express');
const { setBookmark, deleteBookmark } = require('../controllers/bookmarkMedia');

const router = express.Router();

router.post('/add/:mediaId', setBookmark);
router.post('/add/:mediaId', deleteBookmark);
// router.post('/delete/:mediaId', deleteBookmark);

module.exports = router;
