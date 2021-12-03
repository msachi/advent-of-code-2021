const { run, testRun } = require('../helpers')

const countIncrements = input => input
  .map(m => parseInt(m))
  .reduce((total, el, i, arr) => arr[i + 1] > el ? total + 1 : total, 0)

// testRun(countIncrements, 7)
run(countIncrements)
// 1583