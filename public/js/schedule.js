$(document).ready(function(){
  $("#donorSubmit").on("click", function(event){
    event.preventDefault();
    console.log('this worked')
    var newSchedule = {
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
  
  console.log(newSchedule)
  $.ajax("/api/schedule", {
    type: "POST",
    data: newDonor,
  }).then(function(req, res) {
      console.log("created schedule!!");
      // Reload the page to get the updated list
     
      // location.reload();
    }
    );
    
  })


})
