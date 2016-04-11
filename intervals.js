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

const numberOfOverlaps = module.exports.numberOfOverlaps = function numberOfOverlaps(left, right){
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
    return 0;
  } else {
    return 1;
  }
};

function getNumberOfOverlappingElementsFast(arr, itemToCheck, times) {
  var overlaps = 0;
  for (let i=0; (i < arr.length) && (overlaps < times); i++){
    overlaps += numberOfOverlaps(arr[i],itemToCheck);
  }
  return overlaps;
}

function getNumberOfOverlappingElements(arr, itemToCheck) {
  return arr
    .map(function (currentItem) {
      return doesOverlap(currentItem, itemToCheck);
    })
    .filter((truthy)=>truthy)
    .length;
}

const overlapsNTimesFast = module.exports.overlapsNTimesFast = function overlapsNTimesFast(times){
  return function(arr){
    var overlaps = 0;
    for (let i=0; i<(arr.length - 1) && (overlaps < times) ; i++){
      overlaps = getNumberOfOverlappingElementsFast(arr,arr[i], times);
    }
    return overlaps >= times;
  }
};

const overlapsNTimes = module.exports.overlapsNTimes = function overlapsNTimes(times){
  return function(arr){
    let overlapsPerElements = arr.map(function(currentItem){
      // exclude overlapping with itself
      return getNumberOfOverlappingElements(arr, currentItem);
    });

    let sufficientOverlaps = overlapsPerElements.filter(function(overlaps){
      return overlaps >= times;
    });

    return sufficientOverlaps.length > 0;
  }
};
