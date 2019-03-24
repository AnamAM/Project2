module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    bloodType: DataTypes.STRING
  });
  return Patient;
};
