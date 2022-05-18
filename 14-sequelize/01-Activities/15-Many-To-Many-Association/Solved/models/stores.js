module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
    // Giving the Store model a name of type STRING
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Store.associate = function(models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    Store.belongsToMany(models.Product, {
      through: models.Inventory
    });
  };

  return Store;
};
