'use strict';

module.exports = {};

var gpio = require("pi-gpio");
var state = 1;
gpio.open(16, "output", function(err) {

});

var http = require('http');
var PORT=8080; 
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    	gpio.write(16, state, function() {
    		state=state===1?0:1;
		});
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
