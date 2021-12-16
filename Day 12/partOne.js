const { run, testRun } = require('../helpers')

const getPathEnd = path => {
  const elements = path.split(',')
  return elements[elements.length-1]
}

const isValidConnection = (path, connection) => {
  if(connection.split('-').filter(el => el.toLowerCase() === el)
  .some(el => path.includes(el) && el !== getPathEnd(path))) {
    return false
  }
  return connection.includes(getPathEnd(path))
}

const createNewPath = (path, connection) => {
  const elements = connection.split('-')
  if(getPathEnd(path) == elements[0]) {
    return `${path},${elements[1]}`
  }
  return `${path},${elements[0]}`
}

const extendPaths = (connections, pathList) => {
  let newPathList = []
  let newElements = 0

  pathList
    .forEach(path => {
      if(path.includes('end')) {
        newPathList.push(path)
      } else {
        connections.forEach(conn => {
          if(isValidConnection(path, conn)) {
            newElements++
            newPathList.push(createNewPath(path, conn))
          }
        })
      }
    })

  if(!newElements) {
    return newPathList.length
  }
  return extendPaths(connections, newPathList)
}

const getResult = input => {
  return extendPaths(input, ['start'])
}

// testRun(getResult, 226)
run(getResult)
// 4659