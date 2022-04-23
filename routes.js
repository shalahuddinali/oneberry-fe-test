const express = require('express');
const apicache = require('apicache');
const controller = require('./controller');

const router = express.Router();
let cache = apicache.middleware;

router.get('/all-data', cache('30 minutes'), controller.getAllData);

module.exports = router;
