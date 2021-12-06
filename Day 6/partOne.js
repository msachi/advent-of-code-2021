const { run, testRun } = require('../helpers')

const numDays = 80

const getResult = input => {
  let fish = input[0].split(',').map(el => parseInt(el))

  for(let i=0; i<numDays; i++) {
    let numNewFish = 0
    for(let j=0; j<fish.length; j++) {
      fish[j] = fish[j] - 1
      if(fish[j] == -1) {
        fish[j] = 6
        numNewFish++
      }
    }
    for(let k=0; k<numNewFish; k++) {
      fish.push(8)
    }
  }
  return fish.length
}

testRun(getResult, 5934)
run(getResult)
// 388739