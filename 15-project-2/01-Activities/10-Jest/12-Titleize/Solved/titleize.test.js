var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("seth godin")).toEqual("Seth Godin");
  });

  it("to append period to leading titles", function() {
    expect(titleize("dr zhivago")).toEqual("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(titleize("Mr. Alexander Pushkin")).toEqual("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleize("Mr Alexander Pushkin")).toEqual("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize("Mr AlEXANDER PushKIn")).toEqual("Mr. Alexander Pushkin");
  });
});
