var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
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
  });

  app.get("/donor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/donor.html"));
  });
  
  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/schedule.html"));
  });

  app.get("/help", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/help.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
}
