var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

function logThenExecute(cb) {
    console.log("Hello World.");
    if (typeof cb === 'function') {
        cb();
    } else {
        throw new Error("Hey dummy give me a callback function.");
    }
}

logThenExecute(function () {
    console.log("fizzbuzz.");
})

// Write a function that runs a function argument if
// its other argument is truthy.
function runFuncIfTruthy(check, cb) {
    if (typeof cb !== 'function') {
        throw new Error("Hey dummy give me a callback function as the second argument.");
    }
    if (check) {
        cb()
    }
}


runFuncIfTruthy(NaN, function() {
    console.log("NaN was truthy!");
})
runFuncIfTruthy({}, function() {
    console.log("Empty Object was truthy!");
})

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function confusingAsF(val, cb) {
    return function() {
        return cb(val);
    }
}

var resultingFunc = confusingAsF('Hotdog', function (input) {
    console.log(input + ' is really awesome.');
});

resultingFunc();
resultingFunc();
resultingFunc();
resultingFunc();
resultingFunc();

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

fs.writeFile('log.txt', 'a message', function (err) {
    console.log(err);
    console.log("save successful");
})
