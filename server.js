var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

var goodServer = http.createServer(function(request, response) {
    response.end("You are super smart.");
});

var badServer = http.createServer(function(request, response) {
    response.end("You smell.");
});

goodServer.listen(goodPORT, function() {
    console.log("Server listening on: http://localhost:%s", goodPORT);
});

badServer.listen(badPORT, function() {
    console.log("Server listening on: http://localhost:%s", badPORT);
});
