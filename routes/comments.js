const express = require('express');
const router = express.Router();
const { list, show } = require('../controllers/comments.js');

router.get('/comments', list);

router.get('/comments/:id', show);

module.exports = router;