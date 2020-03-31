import defaultHexStyle from '../data/default-hex-style'

export default function clearAchievableCells (/* array */ achievableCells) {
  if (achievableCells) {
    // reset the formatting
    achievableCells.forEach(cell => {
      if (!cell.organic) {
        cell.polygon.setStyle(defaultHexStyle)
      }
    })
    // clear the list
    achievableCells = []
  }
  return achievableCells
}