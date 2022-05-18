var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

app.get("/icecream/:name", function(req, res) {
    for (var i = 0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            return res.render("icecream", icecreams[i]);
        }
    }
    console.log("I found nothing");
    return res.render("404");
});

app.get("/icecreams", function(req, res) {
    res.render("icecreams", {
        icecreams
    })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
