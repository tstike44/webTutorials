// // CALLBACK SOLUTION:

// var orm = require("./config/orm.js");

// orm.selectWhere("parties", "party_type", "grown-up", function (data) {
//     console.log(data);
// });

// PROMISE SOLUTION:

var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up").then(function (data) {
    console.log(data);
})