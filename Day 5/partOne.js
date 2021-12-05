const { run, testRun } = require('../helpers')

const getPointsCovered = line => {
  const points = []
  const [ x1, y1, x2, y2 ] = line

  if(y2 - y1) {
    for(let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
      points.push([x1, i])
    }
  }
  if(x2 - x1) {
    for(let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      points.push([i, y1])
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
      .split(',').map(coor => parseInt(coor))).flat())

  const validLines = lineList.filter(line =>
    line[0] == line[2] || line[1] == line[3])

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