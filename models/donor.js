module.exports = function(sequelize, DataTypes) {
  var Donor = sequelize.define("Donor", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    bloodTypeID: DataTypes.STRING
  });
  Donor.associate = function(models) {
    Donor.hasMany(models.Schedule, {
      onDelete: "cascade"
    });
  };
  return Donor;
};


