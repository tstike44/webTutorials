var express = require("express");
var path = require("path");

var PORT = 3004;

// Initialize Express
var app = express();




// Routes
app.use(express.static('build'));

// Route to post our form submission to mongoDB via mongoose
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
