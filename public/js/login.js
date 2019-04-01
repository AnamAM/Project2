$(document).ready(function() {
    $("#login-form").on("click", function(event) {
        event.preventDefault();

        var emailAddress = $("#exampleInputEmail1").val().trim();
        var password = $("#exampleInputPassword1").val().trim();

        if (emailAddress === "h.a.s.bloodclinic@gmail.com" && password === "hasblood") {
            location.href = "http://localhost:8080/admin";
            console.log("It worked.....")
        }
        else {
            alert("Access Denied!");
        }
    })
})