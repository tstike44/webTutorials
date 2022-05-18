module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT(12, 2) 
      }
    }, {
        freezeTableName: true
    });
  
    return Inventory;
  };
  