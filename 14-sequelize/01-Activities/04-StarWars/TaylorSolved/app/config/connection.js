const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('sequelize_starwars', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
