var express = require('express');
var app = express();
var OneSignal = require('onesignal-node');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {

    var lab11001Client = new OneSignal.Client({
        userAuthKey: 'NzY4YTgxODktYjY0OC00ZDk5LWFhMDgtYzJiNGIxOWY4Yjc3',
        app: { appAuthKey: 'YTJmNGU0NzktNzczNC00ZjI5LWI2ZTgtOGJmNTNlZWMwYzM4', appId: 'c0eb632b-f498-4a63-a277-9ef5948a5e65' }
    });

    var lab11002Client = new OneSignal.Client({
        userAuthKey: 'NzY4YTgxODktYjY0OC00ZDk5LWFhMDgtYzJiNGIxOWY4Yjc3',
        app: { appAuthKey: 'ZjQ2NWM4OTQtOGVmOC00ZDU3LThkNmEtMDVmMzc1Y2QzNmIw', appId: '012bfcf0-8c09-4b9b-aa35-a47b5c13777a' }
    });

    var firstNotificationlab11001Client = new OneSignal.Notification({
        contents: {
            en: "Test notification lab11001"
        }
    });

    var firstNotificationlab11002Client = new OneSignal.Notification({
        contents: {
            en: "Test notification lab11002"
        }
    });

    firstNotificationlab11001Client.setIncludedSegments(['All']);

    firstNotificationlab11002Client.setIncludedSegments(['All']);

    lab11001Client.sendNotification(firstNotificationlab11001Client)
        .then(function (response) {
            console.log(response.data, response.httpResponse.statusCode);
        })
        .catch(function (err) {
            console.error('Something went wrong...', err);
        });

    lab11002Client.sendNotification(firstNotificationlab11002Client)
        .then(function (response) {
            console.log(response.data, response.httpResponse.statusCode);
        })
        .catch(function (err) {
            console.error('Something went wrong...', err);
        });
    response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
