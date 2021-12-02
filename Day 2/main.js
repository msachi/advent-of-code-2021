// Part One

const calculatePosition = inputString => inputString.split('\n')
  .reduce((total, el) => {
    if(!el) return total
    const direction = el.replace(/\s\d+/, '')
    const magnitude = parseInt(el.replace(/\w+\s/g, ''))
    return direction == "forward"
      ? [ total[0] + magnitude, total[1]]
      : direction == "up"
      ? [ total[0], total[1] - magnitude]
      : [ total[0], total[1] + magnitude]
  }, [0, 0])
  .reduce((total, el) => total * el, 1)

// Part Two

const calculateAccuratePosition = inputString => inputString.split('\n')
  .reduce((total, el) => {
    if(!el) return total
    const direction = el.replace(/\s\d+/, '')
    const magnitude = parseInt(el.replace(/\w+\s/g, ''))
    return direction == "forward"
      ? [ total[0] + magnitude, total[1] + magnitude * total[2], total[2]]
      : direction == "up"
      ? [ total[0], total[1], total[2] - magnitude]
      : [ total[0], total[1], total[2] + magnitude]
  }, [0, 0, 0])
  .reduce((total, el, i) => i != 2 ? total * el : total, 1)