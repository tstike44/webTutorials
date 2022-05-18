// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nums = [];

var userInput = process.argv;

for (var i = 2; i < userInput.length; i++) {
    nums.push(parseFloat(userInput[i]));
}

console.log("unsorted: ", nums);

nums.sort(function (a, b) {
    return a - b;
});

console.log("sorted: ", nums);