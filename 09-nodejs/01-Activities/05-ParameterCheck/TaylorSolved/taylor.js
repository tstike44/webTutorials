// with variables
var arg1 = process.argv[2];
var arg2 = process.argv[3];

if (arg1 === arg2) {
    console.log('EQUALS');
} else {
    console.log('not EQUALS');
}

// shorthand version
console.log(process.argv[2] === process.argv[3]);

// ternary operator
console.log(process.argv[2] === process.argv[3] ? 'EQUALS' : 'not EQUALS');