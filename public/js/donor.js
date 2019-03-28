$(document).ready(function () {
  $("#donorSubmit").on("click", function (event) {
    event.preventDefault();
<<<<<<< HEAD
    console.log('this worked')
    var newDonor = {
=======

    var newDonor =
    {
>>>>>>> 1790d88238043a25d5d6c6358a538a6106701f0c
      firstName: $("#fname").val(),
      lastName: $("#lname").val().trim(),
      gender: $("#gender").val().trim(),
      age: parseInt($("#age").val().trim()),
      contactNumber: $("#contactNumber").val().trim(),
      bloodTypeID: $("#bloodType").val().trim()
    };

    $("#fname").val("");
    $("#lname").val("");
    $("#gender").val("");
    $("#age").val("");
    $("#contactNumber").val("");
    $("#bloodType").val("");

    console.log(newDonor)
    $.ajax("/api/donor", {
      type: "POST",
      data: newDonor,
      success: function() { window.location.href="/schedule"; }
    }).then(function (req, res) {
      console.log("Created new Donor!!");
      // Reload the page to get the updated list
      // location.reload();
    }
    );
  });

  $("#donorClose").on("click", function (event) {
    event.preventDefault();

    var newDonor =
    {
      firstName: $("#fname").val(),
      lastName: $("#lname").val().trim(),
      gender: $("#gender").val().trim(),
      age: parseInt($("#age").val().trim()),
      contactNumber: $("#contactNumber").val().trim(),
      bloodTypeID: $("#bloodType").val().trim()
    };
<<<<<<< HEAD
  $("#fname").val("");
  $("#lname").val("");
  $("#gender").val("");
  $("#age").val("");
  $("#contactNumber").val("");
  $("#bloodType").val("");
  
  console.log(newDonor)
  $.ajax("/api/donor", {
    type: "POST",
    data: newDonor,
    success: function() { window.location.href='/schedule';}
  }).then(function(req, res) {
      console.log("created new Donor!!");
=======

    $("#fname").val("");
    $("#lname").val("");
    $("#gender").val("");
    $("#age").val("");
    $("#contactNumber").val("");
    $("#bloodType").val("");

    console.log(newDonor)
    $.ajax("/api/donor", {
      type: "POST",
      data: newDonor,
      success: function() { window.location.href="/"; }
    }).then(function (req, res) {
      console.log("Created new Donor!!");
>>>>>>> 1790d88238043a25d5d6c6358a538a6106701f0c
      // Reload the page to get the updated list
     
      // location.reload();
    }
    );
  });
});
