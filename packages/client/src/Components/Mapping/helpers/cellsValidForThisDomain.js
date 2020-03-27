
/** create a new list of cells, that have been filtered to those
 * that are applicable to the provided domain
 */
export default function cellsValidForThisDomain (/* array */ cells, /* string */ domain) {
  return cells.filter(cell => {
    switch (domain) {
      case 'land':
        return cell.land || cell.organic
      case 'sea':
        return cell.sea || cell.organic
      case 'air':
        return true
      default:
        return true
    }
  })
}
