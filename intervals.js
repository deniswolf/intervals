'use strict';

module.exports.doesOverlap = function(left, right){
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
