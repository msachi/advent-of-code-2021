const { run, testRun } = require('../helpers')

const calculatePower = input => {
  const binaryNums = input.filter(num => num)
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

// testRun(calculatePower, 198)
run(calculatePower)
// 3813416