const router = require('express').Router();
const shortVideoController = require('../controller/shortVideoController');

router.get('/read',shortVideoController.readShortVideo);

module.exports = router;