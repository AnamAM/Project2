module.exports = function(sequelize, DataTypes) {
  var Donor = sequelize.define("Donor", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    contactNumber: DataTypes.STRING,
    bloodTypeID: DataTypes.INTEGER
  });
  return Donor;
};
