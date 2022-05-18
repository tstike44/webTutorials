const disemvowel = require("./disemvowel");

describe("Disemvowel", () => {
  it("should remove all vowels from lowercase strings", () => {
    expect(disemvowel("this is lowcase")).toEqual("ths s lwcs");
  });

  it("should remove all vowels from upcase strings", () => {
    expect(disemvowel("THIS US UPCASE")).toEqual("THS S PCS");
  });

  it("should remove all vowels from mixed strings", () => {
    expect(disemvowel("this IS mixed")).toEqual("ths S mxd");
  });

  it("should ignore numbers in input strings", () => {
    expect(disemvowel("this IS mixed and has 2 NUMBERS 92")).toEqual(
      "ths S mxd nd hs 2 NMBRS 92"
    );
  });

  it("should cast numbers to strings", () => {
    expect(disemvowel(10971)).toEqual("10971");
  });
});
