const fs = require('fs')

module.exports.testRun = (funcToRun, expectedResult) => {
  fs.readFile('./test-input.txt', (err, data) => {
    if(err) {
      throw new Error('Error reading file')
    }
    const result = funcToRun(data.toString().split('\n'))
    if(result === expectedResult) {
      console.log(`\x1b[32mTest run has passed!`)
      console.log(`\x1b[32mResult: \x1b[33m${result}`)
    } else {
      console.log('\x1b[31mTest run hasn\'t passed!')
      console.log(`\x1b[31mResult: \x1b[33m${result}, \x1b[31mexpected result: \x1b[33m${expectedResult}`)
    }
  })
}

module.exports.run = funcToRun => {
  fs.readFile('./input.txt', (err, data) => {
    if(err) {
      throw new Error('Error reading file')
    }
    const result = funcToRun(data.toString().split('\n'))
    console.log(`\x1b[36mPUZZLE RESULT: \x1b[33m${result}`)
  })
}