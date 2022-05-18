var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "default"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded());
app.use(express.json());

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "wishes_db"
});

connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

app.get('/', function (req, res) {
    connection.query('SELECT * FROM wishes', function (err, wishes) {
        if (err) {
            res.send(500);
            throw err;
        }
        res.render("index", {
            wishes
        })
    })
});

app.post('/', function (req, res) {
    connection.query('INSERT INTO wishes (wish) VALUES (?)', [req.body.wish], function (err) {
        if (err) {
            res.send(500);
            throw err;
        }
    
        res.redirect("/");
    })
})

app.listen(port, function () {
    console.log('you can find your site at http://localhost:' + port);
});