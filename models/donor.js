module.exports = function(sequelize, DataTypes) {
  var Donor = sequelize.define("Donor", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    contactNumber: DataTypes.INTEGER,
    bloodType: DataTypes.STRING
  });

  // Donor.associate = function(models) {
  //   Donor.hasMany(models.Blood, {
  //     onDelete: "CASCADE"
  //   });
  // };

  return Donor;
};



