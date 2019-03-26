$(document).ready(function() {

    $("#donor-submit").on("click", function(event) {
        event.preventDefault();

        var newDonor = {
            firstName: $("fname").val().trim(),
            lastName: $("lname").val().trim(),
            age: $("age").val().trim(),
            gender: $("gender").val().trim(),
            contactNumber: $("contactNumber").val().trim(),
            bloodType: $("bloodType").val().trim()
        }
    });
});