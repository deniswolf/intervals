'use strict';
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
const getInterval = require('./../helpers').getInterval;
const overlapsNTimes = require('../../intervals').overlapsNTimes;
const overlapsNTimesFast = require('../../intervals').overlapsNTimesFast;

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

const has4OverlappingElements = overlapsNTimes(4);
const has4OverlappingElementsFast = overlapsNTimesFast(4);


suite.add('Non-optimized Overlap', function() {
  has4OverlappingElements(intervals);
})
  .add('Optimized Overlap', function() {
    has4OverlappingElementsFast(intervals);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
