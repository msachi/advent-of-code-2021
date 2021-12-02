// Part One

const countIncrements = inputString => inputString.split('\n')
  .map(m => parseInt(m))
  .reduce((total, el, i, arr) => arr[i + 1] > el ? total + 1 : total, 0)

// Part Two

const countSummedIncrements = inputString => inputString.split('\n')
  .map(m => parseInt(m))
  .reduce((total, el, i, arr) => {
    const currSum = el + arr[i + 1] + arr[i + 2]
    const nextSum = arr[i + 1] + arr[i + 2] + arr[i + 3]
    return nextSum > currSum ? total + 1 : total
  }, 0)
