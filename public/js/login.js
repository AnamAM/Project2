$(document).ready(function() {
    $("#login-form").on("click", function(event) {
        event.preventDefault();

        var emailAddress = $("#exampleInputEmail1").val().trim();
        var password = $("#exampleInputPassword1").val().trim();

        if (emailAddress === "h.a.s.bloodclinic@gmail.com" && password === "hasblood") {
            location.href = "https://protected-dusk-63750.herokuapp.com/admin";
            console.log("It worked.....")
        }
        else {
            alert("Access Denied!");
        }
    })
})