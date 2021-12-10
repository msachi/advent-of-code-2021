const { run, testRun } = require('../helpers')

const getHeight = (grid, row, column) => {
  const isValid = grid[row] && grid[row][column] != undefined
  return isValid ? grid[row][column] : 9
}

const getResult = input => {
  const grid = input.map(row => row.split('').map(el => parseInt(el)))
  let riskLevel = 0

  for(row=0; row < grid.length; row++) {
    for(column=0; column < grid[row].length; column++) {
      const currHeight = getHeight(grid,row,column)
      if(currHeight < getHeight(grid,row-1,column) && currHeight < getHeight(grid,row+1,column)
      && currHeight < getHeight(grid,row,column-1) && currHeight < getHeight(grid,row,column+1)) {
        riskLevel += (currHeight + 1)
      }
    }
  }
  return riskLevel
}

// testRun(getResult, 15)
run(getResult)
// 439