module.exports = function (sequelize, DataTypes) {
  var Donor = sequelize.define("Donor", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bloodTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Donor.associate = function (models) {
    Donor.hasMany(models.Schedule, {
      onDelete: "cascade"
    });
  };
  return Donor;
};
