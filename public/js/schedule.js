$(document).ready(function(){
  $("#submitSch").on("click", function(event){
    event.preventDefault();
    console.log('this worked')
    var newSchedule = {
      date: $("#what-date").val(),
        time: $("#what-time").val(),
        city: $("#what-city").val(),
        email: $("#exampleInputEmail1").val()
      
      
    };
    $("#what-date").val("");
    $("#what-time").val("");
    $("#what-city").val("");
    $("#exampleInputEmail1").val("");
    console.log(newSchedule.date);
    console.log(newSchedule.time);
  console.log(newSchedule)
  $.ajax("/api/schedule", {
    type: "POST",
    data: newSchedule,
  }).then(function(req, res) {
      console.log("created schedule!!");
      // Reload the page to get the updated list
     
      // location.reload();
    }
    );
    
  })


})
