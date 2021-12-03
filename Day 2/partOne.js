const { run, testRun } = require('../helpers')

const calculatePosition = input => input
  .reduce((total, el) => {
    if(!el) return total
    const direction = el.replace(/\s\d+/, '')
    const magnitude = parseInt(el.replace(/\w+\s/g, ''))
    return direction == 'forward'
      ? [ total[0] + magnitude, total[1]]
      : direction == 'up'
      ? [ total[0], total[1] - magnitude]
      : [ total[0], total[1] + magnitude]
  }, [0, 0])
  .reduce((total, el) => total * el, 1)

// testRun(calculatePosition, 150)
run(calculatePosition)
// 2102357