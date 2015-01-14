var request = require("request")

var url = "https://watrcoolr.duckduckgo.com/watrcoolr.js?o=json";

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})