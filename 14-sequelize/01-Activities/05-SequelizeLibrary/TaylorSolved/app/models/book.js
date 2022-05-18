// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)
var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

const Model = Sequelize.Model;
class Book extends Model {}
Book.init({
  // attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pages: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'book'
  // options
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;