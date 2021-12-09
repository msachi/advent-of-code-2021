const { run, testRun } = require('../helpers')

const getResult = input => {
  const outputValues = input.map(el => el.split(' | ')[1].split(' ')).flat()
  const uniqueNumOfSegments = [2, 3, 4, 7]

  return outputValues.reduce((total, el) => {
    return uniqueNumOfSegments.includes(el.length) ? total + 1 : total
  }, 0)
}

// testRun(getResult, 26)
run(getResult)
// 452