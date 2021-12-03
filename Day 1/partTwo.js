const { run, testRun } = require('../helpers')

const countSummedIncrements = input => input
  .map(m => parseInt(m))
  .reduce((total, el, i, arr) => {
    const currSum = el + arr[i + 1] + arr[i + 2]
    const nextSum = arr[i + 1] + arr[i + 2] + arr[i + 3]
    return nextSum > currSum ? total + 1 : total
  }, 0)

// testRun(countSummedIncrements, 5)
run(countSummedIncrements)
// 1627