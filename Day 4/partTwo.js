const { run, testRun } = require('../helpers')

const getLastWinningBoard = (numbersCalled, boards) => {
  let boardState = boards
  let iteration = 0
  let lastWinningBoard

  while (iteration < numbersCalled.length) {
    const numberCalled = numbersCalled[iteration]
    boardState = boardState.map(board =>
      board.map(row =>
        row.map(el => el === numberCalled ? 'x' : el)))

    boardState = boardState.filter(board => {
      for(let j = 0; j < 5; j++) {
        const rowWin = board[j].every(el => el == 'x')
        const columnWin = [...Array(5).keys()].every(el => board[el][j] == 'x')
        if(rowWin || columnWin) {
          if(boardState.length == 1) lastWinningBoard = boardState[0]
          return false
        }
      }
      return true
    })

    if(lastWinningBoard) {
      return [ lastWinningBoard, numberCalled ]
    }
    iteration++
  }
}

const getScore = (board, numberCalled) => {
  const elements = board.flat().filter(el => el != 'x')
  const sum = elements.reduce((total, el) => total + parseInt(el), 0)
  return sum * numberCalled
}

const getResult = input => {
  const numbersCalled = input[0].split(',')
  const boards = input.slice(2).reduce((acc, _, i, arr) => {
    if(i%6 === 0) {
      const board = []
      for(let a = i; a < i+5; a++) {
        const row = arr[a].trim().replace(/\s+/g,' ').split(' ')
        board.push(row)
      }
      acc.push(board)
    }
    return acc
  }, [])
  
  const [ board, numberCalled ] = getLastWinningBoard(numbersCalled, boards)
  return getScore(board, numberCalled)
}

// testRun(getResult, 1924)
run(getResult)
// 22704

