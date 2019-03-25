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
    }
  })
  
  Schedule.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Schedule.belongsTo(models.Donor, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Schedule;
};