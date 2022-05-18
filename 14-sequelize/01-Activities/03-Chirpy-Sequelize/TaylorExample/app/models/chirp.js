var DataTypes = require("sequelize");
var database = require('../config/connection.js');
var Model = DataTypes.Model;
class Chirp extends Model {}
Chirp.init({
  // attributes
  author: {
    type: DataTypes.STRING
  },
  body: {
    type: DataTypes.STRING
  }
}, {
  sequelize: database,
  modelName: 'user'
  // options
});

Chirp.sync();

module.exports = Chirp;