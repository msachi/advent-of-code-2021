const { run, testRun } = require('../helpers')

const removeBracketPairs = string => {
  const newString = string.replace(/(\(\))|(\[\])|(\{\})|(\<\>)/g, '')
  if(string.length !== newString.length) {
    return removeBracketPairs(newString)
  }
  return newString
}

const getResult = input => {
  const errorScores = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
  }
  return input.map(line => removeBracketPairs(line))
    .map(line => line.match(/[\)\]\}\>]/g))
    .filter(el => el)
    .reduce((total, el) => total + errorScores[el[0]], 0)
}

// testRun(getResult, 26397)
run(getResult)
// 345441