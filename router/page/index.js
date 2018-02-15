const router = require('express').Router();
const main = require('./main');

router.get('/main', main.mainPage);

module.exports = router;