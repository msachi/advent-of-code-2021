const { run, testRun } = require('../helpers')

const removeBracketPairs = string => {
  const newString = string.replace(/(\(\))|(\[\])|(\{\})|(\<\>)/g, '')
  if(string.length !== newString.length) {
    return removeBracketPairs(newString)
  }
  return newString
}

const getComplementaryString = string => {
  return string.split('').reverse().map(char => ({
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
  })[char])
}

const getScore = chars => {
  const charScores = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
  }
  return chars.reduce((total, char) => {
    return total * 5 + charScores[char]
  }, 0)
}

const getResult = input => {
  const totalScores = input.map(line => removeBracketPairs(line))
    .filter(line => !line.match(/[\)\]\}\>]/g))
    .map(line => getComplementaryString(line))
    .map(line => getScore(line))
    .sort((a, b) => b - a)
    
  return totalScores[(totalScores.length - 1) / 2]
}

// testRun(getResult, 288957)
run(getResult)
// 3235371166