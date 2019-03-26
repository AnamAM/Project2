var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {});
    });
  });
  app.get("/donor", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("donor", {});
    });
  });
  app.get("/schedule", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("schedule", {});
    });
  });

  // Load example page and pass in an example by id
  // app.get("/donor/", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
=======
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/aboutUs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutUs.html"));
  });

  app.get("/help", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/help.html"));
  });

  app.get("/locations", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/locations.html"));
>>>>>>> e2a14c33580406613a71daa51dcb1c3e03995907
  });
}

