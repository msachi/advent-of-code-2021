const { run, testRun } = require('../helpers')

const getPointsCovered = line => {
  const points = []
  const [ x1, y1, x2, y2 ] = line

  if(x2 - x1 == 0) {
    for(let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
      points.push([x1, i])
    }
  }
  else {
    for(let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      if(y2 - y1 == 0) {
        points.push([i, y1])
      }
      else if(y2 - y1 == x2 - x1) {
        points.push([i, Math.min(y1, y2) + i - Math.min(x1, x2)])
      }
      else {
        points.push([i, Math.max(y1, y2) - i + Math.min(x1, x2)])
      }
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

  let diagram = []
  for(let i = 0; i < 1000; i++) {
    diagram.push(new Array(1000).fill(0))
  }

  lineList.forEach(line => {
    const pointsCovered = getPointsCovered(line)
    diagram = markDiagram(diagram, pointsCovered)
  })

  return diagram.flat().filter(el => el >= 2).length
}

// testRun(getResult, 12)
run(getResult)
// 21466