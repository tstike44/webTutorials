const DataTypes = require('sequelize');
const connection = require('../config/connection.js');
const Model = DataTypes.Model;
class Character extends Model {}

Character.init({
  // attributes
  routeName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  forcePoints: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize: connection,
  modelName: 'character'
  // options
});

Character.sync();

module.exports = Character;