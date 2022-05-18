// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyACChU6Rr8X41uwMPVyWgtqHQ5c2ILF-XM",
  authDomain: "myapp-aa2c2.firebaseapp.com",
  databaseURL: "https://myapp-aa2c2.firebaseio.com",
  projectId: "myapp-aa2c2",
  storageBucket: "myapp-aa2c2.appspot.com",
  messagingSenderId: "582238551050"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;


  }

  // Change the HTML to reflect the stored values
  $('#highest-bidder').html(highBidder);
  $('#highest-price').html(highPrice);


  // Print the data to the console.
  console.log('high price: ', highPrice);
  console.log('high bidder: ', highBidder);


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderPrice = parseInt($('#bidder-price').val());
  var bidderName = $('#bidder-name').val();


  // Log the Bidder and Price (Even if not the highest)

  console.log("bidder price:", bidderPrice);
  console.log("bidder name:", bidderName);

  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highPrice: bidderPrice,
      highBidder: bidderName
    });


    // Log the new High Price
    console.log("new high price:", bidderPrice);


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
