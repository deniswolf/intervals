'use strict';
const expect = require('chai').expect;

const doesOverlap = require('../intervals').doesOverlap;

const now = Date.now();

function getInterval(startOffset, endOffset){
  return {
    s: now + startOffset,
    e: now - endOffset
  };
}

describe('Overlap Function', function() {
  before(function(){
    this.earlyInterval = getInterval(-10000, -5000);
    this.lateInterval = getInterval(0, 1000);
  });
  it('returns false when intervals do not overlap', function () {
    const result = doesOverlap(this.earlyInterval, this.lateInterval);
    expect(result).to.be.false;
  });
});
