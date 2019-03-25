var db = require("../models");

module.exports = function(app) {
  app.get("/api/blood", function(req, res) {
    db.Donor.findAll({
      include: [db.Blood]
    }).then(function(dbBlood) {
      res.json(dbBlood);
    });
  });
  
  app.post("/api/blood", function(req, res) {
    db.Donor.create(req.body).then(function(dbBlood) {
      res.json(dbBlood);
    });
  });
};