import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Math({ num1, operator, num2 }) {
    function doMath() {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                return "incorrect operator";
        }
    }
    return (
        <p> {num1} {operator} {num2} = {doMath()}</p>
    );
}

export default Math;
