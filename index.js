var request = require("request"),
	_ = require('underscore'),
	twitter = require('twode'),
	twit = new twitter({
		consumer_key: 'tVdNWoXlrFZhU7sEowczFv4Sd',
		consumer_secret: 'aYUL4iW9hAKG5Xb4EPTCL3UgKWhwmxuP3dYVY0RSuWCqgdrE7D',
		access_token_key: '82392495-eoDRODmVwmye7IKb0VTe89QrwIvu7X76ZuxQLspvM',
		access_token_secret: 'XTM4cmF1PlSdixf30Y658uaNWlo7EmGkf0Iukq8HAUFzh'
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
	    		console.log('hey hey hey');
	    		_.each(body, function (item) {
	    			twit.updateStatus();
	    		});
	    		
	    		
	    		memory = body;
	    	}
	    }
	})
};

setInterval(getStream, 1000)