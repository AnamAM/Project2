$(document).ready(function () {
  $("#donorSubmit").on("click", function (event) {
    event.preventDefault();
    getDonors();
    var newDonor =
    {
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
    
    insertDonor({
      newDonor
    });
    console.log(newDonor)
    $.ajax("/api/Donor", {
      type: "POST",
      data: newDonor,
      success: function () { window.location.href = "/schedule"; }
    }).then(function (req, res) {
      console.log("Created new Donor!!");
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

    $("#fname").val("");
    $("#lname").val("");
    $("#gender").val("");
    $("#age").val("");
    $("#contactNumber").val("");
    $("#bloodType").val("");

    console.log(newDonor)
    $.ajax("/api/Donor", {
      type: "POST",
      data: newDonor,
      success: function () { window.location.href = "/"; }
    }).then(function (req, res) {
      console.log("Created new Donor!!");
      // Reload the page to get the updated list
     
      // location.reload();
    }
    );
  });

  

  function insertDonor(Donordata) {
    $.post("/api/Donor", Donordata)
      .then(getDonors);
      console.log(Donordata);
  }
  function createDonorRow(Donordata) {
    var newTr = $("<tr>");
    newTr.append("<td>" + Donordata.firstName + "</td>");
   
  }

  function getDonors() {
    $.get("/api/Donor", function (data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createDonorRow(data[i]));
      }
      nameInput.val("");
    });

  }


});
