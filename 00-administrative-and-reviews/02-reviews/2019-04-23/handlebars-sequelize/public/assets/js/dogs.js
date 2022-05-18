// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = !JSON.parse($(this).data("sleep"));
    var hungry = JSON.parse($(this).data("hungry"));

    var newSleepState = {
      sleepy: newSleep,
      hungry: hungry
    };

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".change-hungry").on("click", function(event) {
    var id = $(this).data("id");
    var sleep = JSON.parse($(this).data("sleep"));
    var newHungry = !JSON.parse($(this).data("hungry"));

    var newSleepState = {
      sleepy: sleep,
      hungry: newHungry
    };

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed hungry to", newHungry);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim(),
      hungry: $("[name=hungry]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/dogs", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new dog");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-dog").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/dogs/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted dog", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
