var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/dogs", function(req, res) {
  db.Dog.findAll({
  }).then(function(data) {
    var hbsObject = {
      dogs: data
    };
    console.log(JSON.stringify(hbsObject, null, 2));
    res.render("dogs", hbsObject);
  });
});

router.post("/api/dogs", function(req, res) {
  db.Dog.create({
    name: req.body.name,
    sleepy: req.body.sleepy,
    hungry: req.body.hungry
  }).then(function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/dogs/:id", function(req, res) {
  console.log('body', req.body);
  console.log('params', req.params)
  db.Dog.update({
    sleepy: req.body.sleepy,
    hungry: req.body.hungry
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    console.log(result);
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/dogs/:id", function(req, res) {
  db.Dog.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
