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
      
    });
  });

  app.get("/api/Donor/:id", function(req, res) {
    
    db.Donor.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbDonor) {
      res.json(dbDonor);
    });
  });

};