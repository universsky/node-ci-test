var assert = require("assert");
require("should");

var loanApply = require('./loanApply');

describe("loanAmount || contractAmount is 0 or less than 0",
    function(){
      it("should return -1",function(){
        loanApply.loanApplyAmountLimit(0,0).should.eql(-1);
        loanApply.loanApplyAmountLimit(-100,0).should.eql(-1);
        loanApply.loanApplyAmountLimit(0,-100).should.eql(-1);
       });
    });

describe("loanAmount is greater than contractAmount",function(){
  it("should return 1",function(){
    loanApply.loanApplyAmountLimit(100,50).should.eql(1);
    loanApply.loanApplyAmountLimit(500,400).should.eql(1);
  });
});

describe("loanAmount is OK",function(){
  it("should return 0",function(){
    loanApply.loanApplyAmountLimit(100,500).should.eql(0);
    loanApply.loanApplyAmountLimit(200,300).should.eql(0);
  });
});



