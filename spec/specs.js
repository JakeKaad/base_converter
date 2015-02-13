describe('baseConverter', function(){
  it("returns a value of 0 in decimal given an input of 0 in binary", function(){
    expect(baseConverter("0", 2)).to.equal(0);
  });

  it("returns a value of 2 in decimal given an input of 0 in binary", function(){
    expect(baseConverter("10", 2)).to.equal(2);
  });

  it("returns a value of 2 in decimal given an input of 0 in binary", function(){
    expect(baseConverter("110", 2)).to.equal(6);
  });

  it("returns a big value with a big binary", function(){
    expect(baseConverter("1100101010001", 2)).to.equal(6481);
  });

});
