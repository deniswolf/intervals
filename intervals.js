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

function getNumberOfOverlappingElements(arr, itemToCheck, times) {
  var overlaps = 0;
  for (let i=0; (i < arr.length) && (overlaps < times); i++){
    overlaps += numberOfOverlaps(arr[i],itemToCheck);
  }
  return overlaps;
}

const overlapsNTimes = module.exports.overlapsNTimes = function overlapsNTimes(times){
  return function(arr){
    var overlaps = 0;
    for (let i=0; i<(arr.length - 1) && (overlaps < times) ; i++){
      overlaps = getNumberOfOverlappingElements(arr,arr[i], times);
    }
    return overlaps >= times;
  }
};
