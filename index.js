var express = require('express');
var app = express();
var OneSignalClient = require('node-onesignal').default;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var client_one = new OneSignalClient('570909850918', 'YTJmNGU0NzktNzczNC00ZjI5LWI2ZTgtOGJmNTNlZWMwYzM4');
  var client_two = new OneSignalClient('8200443519', 'ZjQ2NWM4OTQtOGVmOC00ZDU3LThkNmEtMDVmMzc1Y2QzNmIw');
  client_one.sendNotification('lab11001', {
      included_segments: 'all'
  });
  client_two.sendNotification('lab11002', {
      included_segments: 'all'
  });
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
