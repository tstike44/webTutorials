var db = require("../models");

var router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in and 403 if they aren't
var isAuthenticated403 = require("../config/middleware/isAuthenticated403");


router.use(isAuthenticated403);
router.get("/", function (req, res) {
    console.log(req.user);
    db.Taco.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

router.post("/", function (req, res) {
    db.Taco.create({
        name: req.body.name,
        description: req.body.description,
        UserId: req.user.id
    }).then(function (dbPost) {
        res.json(dbPost);
    })
});

module.exports = router;
