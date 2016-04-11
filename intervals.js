'use strict';

const doesOverlap = module.exports.doesOverlap = function doesOverlap(left, right){
  let early = {},
      later = {};

  if (left.s < right.s){
    early.s = left.s;
    early.e = left.e;
    later.s = right.s;
    later.e = right.e;
  } else {
    early.s = right.s;
    early.e = right.e;
    later.s = left.s;
    later.e = left.e;
  }

  if (early.e <= later.s){
    return false;
  } else {
    return true;
  }
};

function getNumberOfOverlappingIntervals(arr, interval) {
  return arr
    .map(function (current) {
      return doesOverlap(current, interval);
    })
    .filter((truthy)=>truthy)
    .length;
}

const createOverlapCheck = module.exports.createOverlapCheck = function createOverlapCheck(limit){
  return function(arr){
    let overlappedIntervals = arr.map(function(currentItem){
      return getNumberOfOverlappingIntervals(arr, currentItem);
    });

    let sufficientOverlaps = overlappedIntervals.filter(function(overlaps){
      return overlaps >= limit;
    });

    return sufficientOverlaps.length > 0;
  }
};
