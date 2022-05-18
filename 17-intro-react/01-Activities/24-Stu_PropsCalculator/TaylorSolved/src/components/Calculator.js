import React from "react";
import Math from "./Math.js";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      <Math num1={19} operator="+" num2={341} />
      <Math num1={42} operator="-" num2={17} />
      <Math num1={100} operator="*" num2={3} />
      <Math num1={96} operator="/" num2={4} />
    </div>
  );
}

export default Calculator;
