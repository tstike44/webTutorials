// CREATE TABLE cats
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	name varchar(255) NOT NULL,
// 	sleepy BOOLEAN DEFAULT false,
// 	PRIMARY KEY (id)
// );
var Sequelize = require('sequelize');
var Model = Sequelize.Model;
module.exports = function (sequelize, DataTypes) {
    class Cat extends Model {}
    Cat.init({
      // attributes
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sleepy: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Cat'
      // options
    });
    return Cat;
};