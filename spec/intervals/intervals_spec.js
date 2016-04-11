'use strict';
const expect = require('chai').expect;
const getInterval = require('./../helpers').getInterval;

const hasNOverlappingIntervals = require('../../intervals').overlapsNTimes;

describe('Intervals overlap', function() {
  describe('with two intervals, limit of two overlapping intervals', function(){
    const times = 2;
    const intervals = [
      getInterval(-10000, -5000),
      getInterval(0, 1000)
    ];
    describe('no overlap',()=>{
      it('returns false', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('with overlap', ()=>{
      const intervals = [
        getInterval(-10000, 0),
        getInterval(-1000, 1000)
      ];
      it('returns true', function () {
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.true;
      });
    })
  });

  describe('with 5 intervals, limit of 3 overlapping intervals', function(){
    const times = 3;
    describe('no overlaps at all',()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(400, 500),
        getInterval(600, 700),
        getInterval(800, 900)
      ];
      it('returns false', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('no overlaps at all, unsorted',()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(800, 900),
        getInterval(200, 300),
        getInterval(600, 700),
        getInterval(400, 500)
      ];
      it('returns false', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('with two overlaps', ()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(400, 500),
        getInterval(210, 230),
        getInterval(800, 900)
      ];
      it('returns false', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('with three overlaps', function(){
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(220, 400),
        getInterval(210, 230),
        getInterval(800, 900)
      ];
      it('returns true', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.true;
      });
    });
    describe('with three overlaps, unsorted', ()=>{
      const intervals = [
        getInterval(210, 230),
        getInterval(200, 300),
        getInterval(800, 900),
        getInterval(220, 400),
        getInterval(0, 100)
      ];
      it('returns true', function () {
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.true;
      });
    });

    describe('with three overlaps, two identical', ()=>{
      const intervals = [
        getInterval(210, 230),
        getInterval(200, 300),
        getInterval(800, 900),
        getInterval(200, 300),
        getInterval(0, 100)
      ];
      it('returns true', function () {
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.true;
      });
    })
  });

  describe('with ten intervals, limit of 4 matches', ()=>{
    const times = 4;
    describe('no overlaps at all',()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(400, 500),
        getInterval(600, 700),
        getInterval(800, 900),
        getInterval(1000, 1100),
        getInterval(1200, 1300),
        getInterval(1400, 1500),
        getInterval(1500, 1600),
        getInterval(1700, 1800)
      ];
      it('returns false', function () {
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('with three overlaps', ()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(400, 500),
        getInterval(1050, 1080),
        getInterval(800, 900),
        getInterval(1000, 1100),
        getInterval(1200, 1300),
        getInterval(1020, 1030),
        getInterval(1500, 1600),
        getInterval(1700, 1800)
      ];
      it('returns false', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.false;
      });
    });
    describe('with 4 overlapping elements', ()=>{
      const intervals = [
        getInterval(0, 100),
        getInterval(200, 300),
        getInterval(400, 500),
        getInterval(300, 700),
        getInterval(800, 900),
        getInterval(850, 950),

        getInterval(1000, 1100),
        getInterval(1080, 1200),
        getInterval(1040, 1300),
        getInterval(1250, 1400)

      ];
      it('returns true', ()=>{
        const overlapsOnce = hasNOverlappingIntervals(times);
        const result = overlapsOnce(intervals);
        expect(result).to.be.true;
      });
    });
  });
});
