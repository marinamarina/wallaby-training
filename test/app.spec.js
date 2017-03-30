chai.should();

describe("Sequence of colors", function() {
  it("should have length of 4 items", function() {
    var sequence = new RandomColorSequence(4);
    
    sequence.items.length.should.equal(4);
  })
});
