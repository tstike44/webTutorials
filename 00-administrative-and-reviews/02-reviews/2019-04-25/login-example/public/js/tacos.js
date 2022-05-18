$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/taco").then(function (data) {
        $("#taco-infos").text(JSON.stringify(data));
    });
    // Getting references to our form and inputs
    var loginForm = $("form.taco");
    var name = $("input#name-input");
    var descriptionInput = $("input#description-input");

    // When the form is submitted, we validate there's an name and description entered
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            name: name.val().trim(),
            description: descriptionInput.val().trim()
        };

        if (!userData.name || !userData.description) {
            return;
        }

        // If we have an name and description we run the createTaco function and clear the form
        createTaco(userData.name, userData.description);
        name.val("");
        descriptionInput.val("");
    });

    // createTaco does a post to our "api/login" route and if successful, redirects us the the members page
    function createTaco(name, description) {
        $.post("/api/taco", {
            name: name,
            description: description
        }).then(function () {
            window.location.reload();
            // If there's an error, log the error
        }).catch(function (err) {
            console.log(err);
        });
    }
});