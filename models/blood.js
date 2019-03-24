module.exports = function(sequelize, DataTypes) {
    var Blood = sequelize.define("Blood", {
      quantity: DataTypes.INTEGER,
      bloodType: DataTypes.STRING
    });
    return Blood;
  };
  