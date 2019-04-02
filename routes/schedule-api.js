var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/Schedule", function(req, res) {
    db.Example.findAll({}).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  app.put("/api/Schedule", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.dbSchedule.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });



};
