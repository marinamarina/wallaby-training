chai.should();

describe("Sequence of colors", function() {
  it("should have length of 4 items", function() {
    var sequence = new RandomColorSequence(4);
    console.log('hello')
    sequence.items.length.should.equal(4);
  })

   var colors = ["red", "yellow", "green", "blue"]; 
  
  it("should contain only valid colors", function() {
    var sequence = new RandomColorSequence(4);
    
    colors.should.contain(sequence.items[0]);
    colors.should.contain(sequence.items[1]);
    colors.should.contain(sequence.items[2]);
    colors.should.contain(sequence.items[3]);
  })

  it("should map numbers to colors", function() {
      numberToColor(0).should.equal("red");
      numberToColor(1).should.equal("yellow");
      numberToColor(2).should.equal("green");
      numberToColor(3).should.equal("blue");
  })

});
