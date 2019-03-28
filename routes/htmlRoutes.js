var path = require("path");
// var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/home.html"));
   
  });
  app.get("/donor", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/donor.html"));
   
  });
  app.get("/login", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/login.html"));
   
  });
  app.get("/admin", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/admin.html"));
   
  });


  // app.get("/donor", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render(__dirname, "" {});
  //   });
  // });
  // app.get("/schedule", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("schedule", {});
  //   });
  // });

  // // Load example page and pass in an example by id
  // // app.get("/donor/", function(req, res) {
  // //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  // //     res.render("example", {
  // //       example: dbExample
  // //     });
  // //   });
  // // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");

  });

  app.get("/donor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/donor.html"));
  });
}

 