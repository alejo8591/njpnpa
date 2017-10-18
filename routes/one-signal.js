var express = require('express');
var router = express.Router();
var one_signal = require('../controllers/one-signal');

router.post('/one-signal/send-message', function(req, res, next) {
    one_signal.sendMessage({
        user_auth_key: req.body.user_auth_key,
        app_auth_key: req.body.app_auth_key,
        app_id: req.body.app_id,
        message: req.body.message
    }, function(result) {
        res.json(result);
    });
});

module.exports = router;