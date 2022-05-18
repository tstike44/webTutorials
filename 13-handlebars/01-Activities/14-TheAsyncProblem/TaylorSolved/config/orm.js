// // WITH A CALLBACK SOLUTION:
// var connection = require("../config/connection.js");

// var orm = {
//   selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       cb(result);
//       return result;
//     });
//   }
// };

// module.exports = orm;

// WITH A PROMISE SOLUTION:

var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    return new Promise(function (resolve, reject) {
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) { 
          reject(err); 
        } else { 
          resolve(result); 
        }
      });
    });
  }
};

module.exports = orm;
