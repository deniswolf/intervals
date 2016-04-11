'use strict';

const doesOverlap = module.exports.doesOverlap = function doesOverlap(left, right){
  let early = {},
      later = {};

  //TODO: add format validation

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

function getNumberOfOverlaps(arr, itemToCheck) {
  return arr
    .map(function (currentItem) {
      return doesOverlap(currentItem, itemToCheck);
    })
    .filter((truthy)=>truthy)
    .length;
}

const overlapsNTimes = module.exports.overlapsNTimes = function overlapsNTimes(times){
  return function(arr){
    let overlapsPerElements = arr.map(function(currentItem){
      // exclude overlapping with itself
      return getNumberOfOverlaps(arr, currentItem) - 1;
    });

    let sufficientOverlaps = overlapsPerElements.filter(function(overlaps){
      return overlaps >= times;
    });

    return sufficientOverlaps.length > 0;
  }
};
