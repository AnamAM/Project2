module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING
  })
  
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Donor, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Schedule;
};
