const router = require('express').Router();
const api = require('./api');
const page = require('./page');

router.use('/', page);
router.use('/api', api);

module.exports = router;