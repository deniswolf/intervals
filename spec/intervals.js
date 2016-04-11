'use strict';
const expect = require('chai').expect;
const getInterval = require('./helpers').getInterval;

const doesOverlap = require('../intervals').doesOverlap;

describe('Overlap Function with two intervals', function() {
  describe('when the second stars after the first', function(){
    before(function(){
      this.firstInterval = getInterval(-10000, -5000);
      this.secondInterval = getInterval(0, 1000);
    });
    it('returns false', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.false;
    });
  });
  describe('when the first starts after the second', function(){
    before(function(){
      this.firstInterval = getInterval(+5000, +1000);
      this.secondInterval = getInterval(0, 1000);
    });
    it('returns false', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.false;
    });
  });
  describe('when overlap partially', function(){
    before(function(){
      this.firstInterval = getInterval(-10000, -5000);
      this.secondInterval = getInterval(-7000, 1000);
    });
    it('returns true', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.true;
    });
  });
  describe('when the second is inside the first', function(){
    before(function(){
      this.firstInterval = getInterval(-10000, -5000);
      this.secondInterval = getInterval(-7000, -6000);
    });
    it('returns true', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.true;
    });
  });
  describe('when the first is inside the second', function(){
    before(function(){
      this.firstInterval = getInterval(-7000, 1000);
      this.secondInterval = getInterval(-10000, -5000);
    });
    it('returns true', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.true;
    });
  });
  describe('when the second is right after the first', function(){
    before(function(){
      this.firstInterval = getInterval(-7000, 1000);
      this.secondInterval = getInterval(1000, 5000);
    });
    it('returns false', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.false;
    });
  });
  describe('when the first is the same after the second', function(){
    before(function(){
      this.firstInterval = getInterval(1000, 2000);
      this.secondInterval = getInterval(1000, 2000);
    });
    it('returns true', function () {
      const result = doesOverlap(this.firstInterval, this.secondInterval);
      expect(result).to.be.true;
    });
  });
});
