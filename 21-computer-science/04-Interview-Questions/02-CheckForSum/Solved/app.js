// CheckForSum Solution

// =================

function checkForSum(arr, num, sum) {
    // Loop through arr
    for (var i = 0; i < arr.length; i++) {
        // if we have a match
        if (num + arr[i] === sum) {
            // return true
            return true;
        }
    }
    // if we loop through everything and still no match,
    // return false
    return false;
}

// Bonus Points:
function checkForSumBonus(arr, num, sum) {
    // Create a variable to hold the current number we are looking for
    var checkFor = sum - num;

    // Loop through arr
    for (var i = 0; i < arr.length; i++) {
        // if we have a match
        if (arr[i] === checkFor) {
            // return true
            return true;
        }
    }
    // if we loop through everything and still no match,
    // return false
    return false;
}