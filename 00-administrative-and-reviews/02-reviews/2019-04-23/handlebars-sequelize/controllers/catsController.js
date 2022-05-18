var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Cat.findAll({
  }).then(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(JSON.stringify(hbsObject, null, 2));
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  db.Cat.create({
    name: req.body.name,
    sleepy: req.body.sleepy
  }).then(function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  console.log('body', req.body);
  console.log('params', req.params)
  db.Cat.update({
    sleepy: req.body.sleepy
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

router.delete("/api/cats/:id", function(req, res) {
  db.Cat.destroy({
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
