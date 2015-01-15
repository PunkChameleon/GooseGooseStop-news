var request = require("request"),
    _ = require('underscore'),
    twitter = require('twode'),
    twit = new twitter({
        consumer_key: 'Your',
        consumer_secret: 'Keys',
        access_token_key: 'Go',
        access_token_secret: 'Here'
    });

var url = "https://watrcoolr.duckduckgo.com/watrcoolr.js?o=json",
    memory = {};

function getStream(callback) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            
            if (!_.isEqual(body, memory)) {1
                _.each(body, function (item) {
                    if (!_.where(memory, item).length) {
                        // twit.updateStatus([item.title, item.url].join(" "), function (err, data) {
                        //     if (!err) {
                        //         console.log([item.title,"has been posted"].join(" "));
                        //     }
                        // });
                    }
                    
                });

                memory = body;
            }
        }
    })
};

setInterval(getStream, 1000)