- **File**: `multiply.js`

- **INSTRUCTIONS**:

  - Familiarize yourself with the Jest.

  - To start create a package.json using npm init.

  - Then run "npm install --save-dev jest"

    - Talk with your partner about the difference between --save and --save-dev

  - Add to the "scripts" property of package.json so it at least has "test": "jest" as shown:

```
  "scripts": {
    "test": "jest"
  },
```

- Also add a "jest" property to your package json:
- Read up on jest configuration on their website

  ```
  "jest": {
    "automock": false,
    "verbose": true,
    "collectCoverageFrom": [
      "multiply.js"
    ],
    "collectCoverage": true
  },
  ```
- Run "npm test" in your terminal
- Discuss with your partner what you see

- Create a folder named ```__tests__``` and a file inside of that named "disemvowel.test.js"

- Add this to the file:

```
var multiply = require('../multiply.js')
describe("multiply", function() {
  it("should multiply properly when passed numbers", function() {
    expect(multiply(2, 4)).toEqual(8);
  });

  it("should throw when not passed numbers", function() {
    expect(function testThrow() {
      multiply(2, "a")
    }).toThrow(Error);
  });
});
```
- Run "npm test" in your terminal
- Discuss with your partner what you see
