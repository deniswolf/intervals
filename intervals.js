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

function getNumberOfOverlappingIntervalsFast(arr, itemToCheck, limit) {
  var overlaps = 0;
  for (let i=0; (i < arr.length) && (overlaps < limit); i++){
    overlaps += numberOfOverlaps(arr[i],itemToCheck);
  }
  return overlaps;
}

function getNumberOfOverlappingIntervals(arr, itemToCheck) {
  return arr
    .map(function (currentItem) {
      return doesOverlap(currentItem, itemToCheck);
    })
    .filter((truthy)=>truthy)
    .length;
}

const createOverlapFastCheck = module.exports.createOverlapFastCheck = function createOverlapFastCheck(limit){
  return function(arr){
    var overlaps = 0;
    for (let i=0; i<(arr.length - 1) && (overlaps < limit) ; i++){
      overlaps = getNumberOfOverlappingIntervalsFast(arr,arr[i], limit);
    }
    return overlaps >= limit;
  }
};

const createOverlapCheck = module.exports.createOverlapCheck = function createOverlapCheck(times){
  return function(arr){
    let overlapsPerElements = arr.map(function(currentItem){
      return getNumberOfOverlappingIntervals(arr, currentItem);
    });

    let sufficientOverlaps = overlapsPerElements.filter(function(overlaps){
      return overlaps >= times;
    });

    return sufficientOverlaps.length > 0;
  }
};
