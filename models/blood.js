module.exports = function(sequelize, DataTypes) {
  var Blood = sequelize.define("Blood", {
    quantity: DataTypes.INTEGER,
    bloodType: DataTypes.STRING
  });
  
  Blood.associate = function(models) {
    Blood.belongsTo(models.Donor, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Blood;
};