'use strict';

const now = Date.now();

module.exports.getInterval = function getInterval(startOffset, endOffset){
  return {
    s: now + startOffset,
    e: now + endOffset
  };
};
