$("#donorSubmit").on("click", function (event) {
    
    event.preventDefault();

    // Make a newDonor object
    var newDonor = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        gender: $("#gender").val().trim(),
        age: parseInt($("#age").val().trim()),
        contactNumber: parseInt($("#contactNumber").val().trim()),
        bloodType: $("#bloodType").val().trim()

    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/donor", newDonor)
        // On success, run the following code
        .then(function (data) {
            // Log the data we found
            console.log(data);
        });

    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#gender").val("");
    $("#age").val("");
    $("#contactNumber").val("");
    $("#bloodType").val("");

    
});