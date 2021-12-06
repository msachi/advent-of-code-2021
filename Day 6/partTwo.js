const { run, testRun } = require('../helpers')

const numDays = 256

const getResult = input => {
  let fish = input[0].split(',').map(el => parseInt(el))
  let fishCount = {}
  for(let i=0; i<=8; i++) {
    fishCount[i] = fish.filter(el => el == i).length
  }

  for(let i=0; i<numDays; i++) {
    fishCount = {
      0: fishCount[1],
      1: fishCount[2],
      2: fishCount[3],
      3: fishCount[4],
      4: fishCount[5],
      5: fishCount[6],
      6: fishCount[7] + fishCount[0],
      7: fishCount[8],
      8: fishCount[0],
    }
  }
  return Object.values(fishCount).reduce((acc, el) => acc + el, 0)
}

testRun(getResult, 26984457539)
run(getResult)
// 1741362314973