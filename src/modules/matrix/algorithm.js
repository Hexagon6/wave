export const pos2Index = ({dimension: { X, Y }, position: { x, y }}) => {
  if (x >= X || y >= Y || x < 0 || y < 0) {
    throw Error('index out of bounds, do you travel outside the universe??')
  }
  return y * X + x
}

export const index2Pos = ({dimension: { X, Y }, index}) => {
  const x = index % X
  const y = Math.floor(index / X)
  return { x, y }
}

export const getNeighborIndex = (
  {
    dimension, dimension: { X, Y },
    currentPos: { x, y },
    relNeighborPos: { dx, dy }}) => {
  // adding dimension should fix direct neighborhoods offset out of bounds
  // and modulo will adjust it
  const _x = (X + (x + dx) % X) % X
  const _y = (Y + (y + dy) % Y) % Y
  return pos2Index({ dimension, position: { x: _x, y: _y } })
}

export const splitMatrixToNb = (matrix, { neighborhood, dimension }) => {
  return matrix.map((_, index) => {
    return neighborhood.map(({x, y}) => {
      const currentPos = index2Pos({dimension, index})
      const nbId = getNeighborIndex({
        dimension,
        currentPos,
        relNeighborPos: { dx: x, dy: y }
      })
      return matrix[nbId] // status
    })
  })
}

export const step = (matrix, { states, algorithm, neighborhood, dimension }) => {
  console.log(dimension)
  console.log(matrix)
  console.log(typeof algorithm)
  console.log(neighborhood)

  return matrix.map(n => (n + 1) % states)
}
