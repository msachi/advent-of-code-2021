const { run, testRun } = require('../helpers')

const sumBits = (binaryNums, iteration) =>
  binaryNums.reduce((total, el) => {
    const relevantBit = parseInt(el.split('')[iteration])
    if(total === 0) return relevantBit
    return total + relevantBit
  }, 0)

const calculateGasRating = (binaryNums, isOxygen, iteration = 0) => {
  if(binaryNums.length == 1) {
    return parseInt(binaryNums.join(''), 2)
  }
  const bitSum = sumBits(binaryNums, iteration)
  const bit = isOxygen
    ? bitSum >= binaryNums.length / 2 ? 1 : 0
    : bitSum < binaryNums.length / 2 ? 1 : 0
  const filtered = binaryNums.filter(num => parseInt(num[iteration]) === bit)
  return calculateGasRating(filtered, isOxygen, iteration + 1)
}

const calculateLifeSupport = input => {
  const binaryNums = input.filter(num => num)
  return calculateGasRating(binaryNums, true) * calculateGasRating(binaryNums)
}

// testRun(calculateLifeSupport, 230)
run(calculateLifeSupport)
// 2990784