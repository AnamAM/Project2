var db = require("../models");

module.exports = function(app) {
  app.post("/api/schedule", function(req, res) {
    db.Schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });
}