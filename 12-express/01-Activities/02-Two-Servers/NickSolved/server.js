// Require/import the HTTP module
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You are a javascript king!!!");

  }

  function handleRequestTwo(request, response) {

    response.end("You are a javascript queen!!!")
  }

var server = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequestTwo)

server.listen(PORTONE, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTONE);
  });

  serverTwo.listen(PORTTWO, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTTWO);
  });