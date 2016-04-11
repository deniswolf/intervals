'use strict';
const expect = require('chai').expect;
const getInterval = require('./../helpers').getInterval;

const overlapsNTimes = require('../../intervals').overlapsNTimes;

describe('Intervals overlap', function() {
  describe('with two intervals, limit of one match', function(){
    const times = 1;
    describe('no overlap',()=>{
      before(function(){
        this.intervals = [
          getInterval(-10000, -5000),
          getInterval(0, 1000)
        ];
      });
      it('returns false', function () {
        const overlapsOnce = overlapsNTimes(times);
        const result = overlapsOnce(this.intervals);
        expect(result).to.be.false;
      });
    });
    describe('one overlap', function(){
      before(function(){
        this.intervals = [
          getInterval(-10000, 0),
          getInterval(-1000, 1000)
        ];
      });
      it('returns true', function () {
        const overlapsOnce = overlapsNTimes(times);
        const result = overlapsOnce(this.intervals);
        expect(result).to.be.true;
      });
    })
  });
});
