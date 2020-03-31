import cellsValidForThisDomain from './cellsValidForThisDomain'

/** we're entering a new planning step - calculate which cells are
 * achievable given the range remaining
 */
export default function updateAchievableCellsFor (/* hex */location, /* int */rangeRemaining, /* string */travelMode,
  /* array */ achievableCells, /* element */ grid, /* element */ rangeStyle) {
  // work out the cells in range
  if (rangeRemaining === 0) {
    achievableCells = []
  } else if (rangeRemaining < 100) {
    achievableCells = grid.hexesInRange(location, rangeRemaining)
  } else {
    // just give him the whole area
    achievableCells = grid.cells
  }

  // filter the achievable cells for his domain
  achievableCells = cellsValidForThisDomain(achievableCells, travelMode)

  // plot the available range
  achievableCells.forEach(cell => {
    if (!cell.organic) {
      cell.polygon.setStyle(rangeStyle)
    }
  })
  return achievableCells
}
