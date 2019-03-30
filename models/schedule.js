module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    created_at: {
      type: 'TIMESTAMP',
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull:false
    },
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
