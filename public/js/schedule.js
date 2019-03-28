$(document).ready(function () {
  $("#submitSch").on("click", function (event) {
    event.preventDefault();
    console.log('this worked')
    var newSchedule = {
      date: $("#appt-date").val(),
      time: $("#appt-time").val(),
      city: $("#city").val(),
      email: $("#email").val()
    };

    $("#appt-date").val("");
    $("#appt-time").val("");
    $("#city").val("");
    $("#email").val("");
    console.log(newSchedule.date);
    console.log(newSchedule.time);
    console.log(newSchedule);
    $.ajax("/api/schedule", {
      type: "POST",
      data: newSchedule,
      success: function() { window.location.href="/"; }
    }).then(function (req, res) {
      console.log("created schedule!!");
      // Reload the page to get the updated list
      // location.reload();
    }
    );
  })


})
