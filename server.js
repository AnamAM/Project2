require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.post("/api/schedule", function(req, res) {
  db.Schedule.create(req.body).then(function(dbSchedule) {
    res.json(dbSchedule);
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "h.a.s.bloodclinic@gmail.com",
        pass: "hasblood"
    }
});

let mailOptions = {
    from: "h.a.s.bloodclinic@gmail.com",
    to: req.body.email,
    subject: "Confirmation Email",
    html: "<h3>Your appointment is scheduled for " + req.body.date + " at " + req.body.time + "! We'll be looking forward to seeing you soon. Thank you for your service!</h3>"
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error occured.", err);
    }
    else {
        console.log("Email sent!")
    }
});
});

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/donor-Api.js")(app);
// require("./routes/schedule-Api.js")(app);
require("./routes/htmlRoutes.js")(app);

var syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
  });
});

module.exports = app;
module.exports = nodemailer;
