var { expect } = require("chai");
var { xor } = require("../../utils/logic");

// logic utils tests

// mocha, chai test
describe("xor", () => {
  it("should satisfy entire truth table", () => {
    expect(xor(false, false)).to.equal(false);
    expect(xor(false, true)).to.equal(true);
    expect(xor(true, false)).to.equal(true);
    expect(xor(true, true)).to.equal(false);
  });
});
