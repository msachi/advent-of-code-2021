const { run, testRun } = require('../helpers')

const getHeight = (grid, row, column) => {
  const isValid = grid[row] && grid[row][column] != undefined
  return isValid ? grid[row][column] : 9
}

const markSurroundingPoints = (grid, [row, column]) => {
  [[row-1,column], [row+1,column], [row,column-1], [row,column+1]].forEach(el => {
    const height = getHeight(grid, el[0], el[1])
    if(height != 9 && height != 'x') {
      grid[el[0]][el[1]] = 'x'
      markSurroundingPoints(grid, el)
    }
  })
}

const getResult = input => {
  const grid = input.map(row => row.split('').map(el => parseInt(el)))
  const basinSizes = []

  for(row=0; row < grid.length; row++) {
    for(column=0; column < grid[row].length; column++) {
      const currHeight = getHeight(grid,row,column)
      if(currHeight < getHeight(grid,row-1,column) && currHeight < getHeight(grid,row+1,column)
      && currHeight < getHeight(grid,row,column-1) && currHeight < getHeight(grid,row,column+1)) {
        let markedGrid = JSON.parse(JSON.stringify(grid))
        markedGrid[row][column] = 'x'
        markSurroundingPoints(markedGrid, [row, column])
        basinSizes.push(markedGrid.flat().reduce((total, el) => el == 'x' ? total + 1 : total, 0))
      }
    }
  }

  return basinSizes.sort((a, b) => b - a).slice(0,3).reduce((total, el) => total * el, 1)
}

// testRun(getResult, 1134)
run(getResult)
// 900900