if (process.argv.length === 3) {
    var multipleStr = process.argv[2];
} else {
    var goalStr = process.argv[2];
    var multipleStr = process.argv[3];
}

if (goalStr === undefined) {
    goalStr = 13;
}

if (multipleStr === undefined) {
    multipleStr = 6;
}

var goal = parseInt(goalStr);
var multiple = parseInt(multipleStr);
if (isNaN(goal) || isNaN(multiple)) {
    return console.log("Incorrect input, please provide 2 numbers");
}
console.log(goal, multiple);

var sum = 0;
for (var i = multiple; i <= goal; i += multiple) {
    sum += i;
}
console.log(sum);