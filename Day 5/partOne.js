const { run, testRun } = require('../helpers')

const swapArrayElements = array => {
  let temp = array[1]
  array[1] = array[0]
  array[0] = temp
  return array
}

const getPointsCovered = line => {
  const points = []
  const isVertical = line[0][0] == line[1][0]
  if(isVertical) {
    const isIncreasing = line[0][1] < line[1][1]
    if(!isIncreasing) {
      swapArrayElements(line)
    }
    for(let i = line[0][1]; i <= line[1][1]; i++) {
      points.push([line[0][0], i])
    }
  } else {
    const isIncreasing = line[0][0] < line[1][0]
    if(!isIncreasing) {
      swapArrayElements(line)
    }
    for(let i = line[0][0]; i <= line[1][0]; i++) {
      points.push([i, line[0][1]])
    }
  }
  return points
}

const markDiagram = (diagram, points) => {
  points.forEach(point => {
    diagram[point[1]][point[0]]++
  })
  return diagram
}

const getResult = input => {
  const lineList = input.map(line => line
    .split(' -> ').map(pair => pair
      .split(',').map(coor => parseInt(coor))))
  const validLines = lineList.filter(line =>
    line[0][0] == line[1][0] || line[0][1] == line[1][1])
  
  let diagram = []
  for(let i = 0; i < 1000; i++) {
    diagram.push(new Array(1000).fill(0))
  }

  validLines.forEach(line => {
    const pointsCovered = getPointsCovered(line)
    diagram = markDiagram(diagram, pointsCovered)
  })

  return diagram.flat().filter(el => el >= 2).length
}

// testRun(getResult, 5)
run(getResult)
// 6572