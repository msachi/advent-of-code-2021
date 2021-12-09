const { run, testRun } = require('../helpers')

const sortString = string => string.split('').sort().join('')

const countCommon = (string1, string2) => {
  const stringArr1 = string1.split('')
  const stringArr2 = string2.split('')
  return stringArr1.reduce((total, el) => {
    if(stringArr2.includes(el)) total++
    return total
  }, 0)
}

const getResult = input => {
  const processedEntries = input.map(entry => {
    const entryArray = entry.split(' | ')
    return {
      patterns: entryArray[0].split(' ').map(p => sortString(p)),
      output: entryArray[1].split(' ').map(p => sortString(p))
    }
  })

  return processedEntries.map(entry => {
    const patterns = entry.patterns

    const mappings = {
      1: patterns.find(el => el.length == 2),
      4: patterns.find(el => el.length == 4),
      7: patterns.find(el => el.length == 3),
      8: patterns.find(el => el.length == 7)
    }
  
    patterns.forEach(el => {
      if(el.length == 5) {
        if(countCommon(el, mappings[1]) == 2) {
          mappings[3] = el
        } else if(countCommon(el, mappings[4]) == 3) {
          mappings[5] = el
        } else {
          mappings[2] = el
        }
      }
      if(el.length == 6) {
        if(countCommon(el, mappings[4]) == 4) {
          mappings[9] = el
        } else if(countCommon(el, mappings[7]) == 2) {
          mappings[6] = el
        } else {
          mappings[0] = el
        }
      }
    })

    const decodedNumber = entry.output
      .map(el => Object.entries(mappings).find(kv => kv[1] == el)[0]).join('')
    return parseInt(decodedNumber)

  }).reduce((total, el) => total + el, 0)
}

// testRun(getResult, 61229)
run(getResult)
// 1096964