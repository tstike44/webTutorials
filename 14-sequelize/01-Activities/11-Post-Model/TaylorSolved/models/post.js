var Sequelize = require('sequelize');
const Model = Sequelize.Model;

module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  class Post extends Model {}
  Post.init({
    // attributes
    title: {
      type: Sequelize.STRING(160),
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
      // allowNull defaults to true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Personal"
    }
  }, {
    sequelize,
    modelName: 'Post'
    // options
  });
  return Post
};
