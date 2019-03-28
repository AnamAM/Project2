var db = require("../models");

module.exports = function(app) {
  app.get("/api/Donor", function(req, res) {
    db.Donor.findAll({
      include: [db.Schedule]
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });
  
  app.post("/api/Donor", function(req, res) {
    console.log(req.body)
    db.Donor.create(req.body).then(function(dbDonor) {
      res.json(dbDonor);
      // res.redirect('/schedule')
    });
  });
};