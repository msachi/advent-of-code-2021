const { run, testRun } = require('../helpers')

const calculateFuel = n => {
  return (n*(n+1))/2
}

const getResult = input => {
  const positions = input[0].split(',').map(el => parseInt(el))
  
  let possiblePositions = []
  for(i=Math.min(...positions); i<Math.max(...positions); i++){
    possiblePositions.push(i)
  }

  return possiblePositions.map(position => {
    const fuel = positions.reduce((total, el) => {
      return total + calculateFuel(Math.abs(el - position))
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

// testRun(getResult, 168)
run(getResult)