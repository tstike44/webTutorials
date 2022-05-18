// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedRedirect = require("../config/middleware/isAuthenticatedRedirect");

var router = require('express').Router();

router.get("/", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/login", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticatedRedirect, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/tacos", isAuthenticatedRedirect, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/tacos.html"));
});

module.exports = router;
