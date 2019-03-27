var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/donor", function(req, res) {
    db.Donor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      age: req.body.age,
      contactNumber: req.body.contactNumber,
      bloodTypeID: req.body.bloodTypeID
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
