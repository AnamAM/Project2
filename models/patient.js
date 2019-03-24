module.exports = function(sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      contactNumber: DataTypes.STRING,
      bloodType: DataTypes.STRING
    });
    return Patient;
  };
  