var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index');
var one_signal = require('./routes/one-signal');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/v1', one_signal);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
