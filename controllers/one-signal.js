var OneSignal = require('onesignal-node');

exports.sendMessage = function(payload, callback) {
    var client = new OneSignal.Client({
        userAuthKey: payload.user_auth_key,
        app: { appAuthKey: payload.app_auth_key, appId: payload.app_id }
    });

    var notificationClient = new OneSignal.Notification({
        contents: {
            en: payload.message
        }
    });

    notificationClient.setIncludedSegments(['All']);

    client.sendNotification(notificationClient)
    .then(function (response) {
        console.log(response.data, response.httpResponse.statusCode);
        callback(response);
    })
    .catch(function (err) {
        console.error('Something went wrong...', err);
        callback(err);
    });
};