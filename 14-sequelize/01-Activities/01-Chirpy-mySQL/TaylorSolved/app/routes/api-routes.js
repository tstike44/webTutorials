// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get('/api/chirp/all', function (req, res) {
    connection.query("SELECT * FROM chirps", function (err, results) {
      if (err) return res.status(500).json(err);
      res.json(results);
    })
  });

  // Add a chirp
  app.post('/api/chirp', function (req, res) {
    connection.query("INSERT INTO chirps SET ?", req.body, function (err, results) {
      if (err) return res.status(500).json(err);
      res.json(results);
    })
  })

};
