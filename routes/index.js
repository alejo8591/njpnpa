var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'NodeJS Push Notifications' });
});

module.exports = router;