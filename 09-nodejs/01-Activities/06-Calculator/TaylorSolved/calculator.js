var operator = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);
var result;

switch (operator) {
    case "add":
        //code here
        result = num1 + num2;
        break;
    case "subtract":
        //code here
        result = num1 - num2;
        break;
    case "multiply":
        //code here
        result = num1 * num2;
        break;
    case "divide":
        //code here
        result = num1 / num2;
        break;
    case "remainder":
        //code here
        result = num1 % num2;
        break;
    default:
        //code here
        result = "bad input."
        break;
}
console.log(result);