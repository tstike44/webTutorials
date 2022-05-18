var bands = require('./bands.js');

var userGenre = process.argv[2];

if (userGenre) {
    var band = bands[userGenre];
    if (band) {
        console.log("A " + userGenre + " band is " + band);
    } else {
        console.log("No bands of that genre found, try again.");
    }
} else {
    for(var genre in bands) {
        console.log("A " + genre + " band is " + bands[genre]);
    }
}