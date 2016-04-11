#Time Intervals Overlap Checking lib
  
## Intro

This lib could be used to generate functions to check number of overlaps of Time Intervals in array

Format of Time Interval:
```javascript
{
  // star date (in ms)
  s: Date.now(),
  // end date (in ms)
  e: Date.now()
}
```

## Requirements

Node.js 5+

If you don't have node installed, please follow instructions here: [nvm](https://github.com/creationix/nvm)

## Installation

`npm install`

## Tests

`npm test`

## Benchmarks

benchmarks are relevant only for `feature/performance_improvements` branch as of now.

`node spec/intervals/intervals_benchmark.js`

