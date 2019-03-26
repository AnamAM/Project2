module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define("Schedule", {
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          },
          updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          }
    });
    return Schedule;
  };
  