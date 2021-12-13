const { run, testRun } = require('../helpers')

const numSteps = 100

const incrementAll = grid => {
  for(row = 0; row < grid.length; row++) {
    for(column = 0; column < grid[row].length; column++) {
      grid[row][column]++
    }
  }
}

const isValidElement = (grid, row, column) => {
  return grid[row] && grid[row][column] != undefined && grid[row][column] != 'x'
}

const markFlashes = grid => {
  let flashesThisRound = 0

  for(row = 0; row < grid.length; row++) {
    for(column = 0; column < grid[row].length; column++) {
      if(grid[row][column] > 9) {
        grid[row][column] = 'x'
        const adjacentElements = [[row-1,column-1],[row-1,column],[row-1,column+1],[row,column-1],
        [row,column+1],[row+1,column-1],[row+1,column],[row+1,column+1]]
        adjacentElements.forEach(el => {
          if(isValidElement(grid, el[0], el[1])) {
            grid[el[0]][el[1]]++
            flashesThisRound++
          }
        })
      }
    }
  }

  if(flashesThisRound > 0) {
    markFlashes(grid)
  }
}

const countAndResetFlashes = grid => {
  let flashesThisStep = 0

  for(row = 0; row < grid.length; row++) {
    for(column = 0; column < grid[row].length; column++) {
      if(grid[row][column] == 'x') {
        grid[row][column] = 0
        flashesThisStep++
      }
    }
  }

  return flashesThisStep
}

const getResult = input => {
  const grid = input.map(row => row.split('').map(el => parseInt(el)))
  let totalFlashes = 0
  
  for(step = 0; step < numSteps; step++) {
    incrementAll(grid)
    markFlashes(grid)
    const flashesThisStep = countAndResetFlashes(grid)
    totalFlashes += flashesThisStep
  }

  return totalFlashes
}

// testRun(getResult, 1656)
run(getResult)
// 1599