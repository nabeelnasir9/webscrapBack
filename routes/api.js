const express = require('express');
const router = express.Router();
const { getScrapedData } = require('../controller/scrapingController.js');

router.post('/scrape', getScrapedData);

module.exports = router;
