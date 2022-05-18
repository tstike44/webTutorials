
module.exports = function(sequelize, DataTypes) {
  var Taco = sequelize.define("Taco", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Taco.associate = function(models) {
    // We're saying that a Taco should belong to an User
    // A Taco can't be created without an User due to the foreign key constraint
    Taco.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Taco;
};
