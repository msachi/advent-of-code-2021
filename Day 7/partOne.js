const { run, testRun } = require('../helpers')

const getResult = input => {
  const positions = input[0].split(',').map(el => parseInt(el))

  return positions.map(position => {
    const fuel = positions.reduce((total, el) => {
      return total + Math.abs(el - position) 
    }, 0)
    return { position, fuel }
  })
  .reduce((min, el) => {
    if(!min) {
      return el
    }
    return ( min.fuel < el.fuel ? min : el );
  }).fuel
}

// testRun(getResult, 2)
run(getResult)
// 337488
