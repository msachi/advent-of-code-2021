// Part One

const calculatePower = inputString => {
  const binaryNums = inputString.split('\n').filter(num => num)
  const summedBits = binaryNums
    .reduce((total, el) => {
      const bitArray = el.split('').map(bit => parseInt(bit))
      if(!total.length) return bitArray
      return total.map((t, i) => t + bitArray[i])
    }, [])
  const gamma = summedBits.map(digit => digit > binaryNums.length / 2 ? 1 : 0).join('')
  const epsilon = summedBits.map(digit => digit < binaryNums.length / 2 ? 1 : 0).join('')
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

// Part Two

const calculateLifeSupport = inputString => {
  const binaryNums = inputString.split('\n').filter(num => num)
  return calculateGasRating(binaryNums, true) * calculateGasRating(binaryNums)
}

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

const sumBits = (binaryNums, iteration) =>
  binaryNums.reduce((total, el) => {
    const relevantBit = parseInt(el.split('')[iteration])
    if(total === 0) return relevantBit
    return total + relevantBit
  }, 0)