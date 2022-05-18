// Dependencies
var http = require("http");
var fs = require("fs");
var path = require("path");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Saving the request data as a variable
  var url = req.url;

  if (req.method === "POST") {
    if (url === '/hotdog') {
      var requestData = "";

      // When the server receives data...
      req.on("data", function(data) {
    
        // Add it to requestData.
        requestData += data;
      });
    
      // When the request has ended...
      req.on("end", function() {
    
        // Log (server-side) the request method, as well as the data received!
        console.log("You did a", req.method, "with the data:\n", requestData);
        res.end(requestData);
      });
        
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end();
    }
  } else if (req.method === "GET") {
    if (url === '/') {
      serveHtml("index.html", res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }

}

function serveHtml(file, res) {
  fs.readFile(path.join(__dirname, file), function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
