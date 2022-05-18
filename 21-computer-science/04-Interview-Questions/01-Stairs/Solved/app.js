// Stairs Solution

// =================

function stairs(num) {
    // Create a variable to hold the current layer of *'s to print out
    var stars = "";

    // Loop num times
    for (var i = 0; i < num; i++) {
        // Add one * to stars
        stars += "*";
        console.log(stars);
    }
}