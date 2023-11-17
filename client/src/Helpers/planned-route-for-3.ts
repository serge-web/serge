// import { SergeHex3, SergeGrid3 } from 'src/custom-types'
// import { h3Line } from 'h3-js'

// /**
//  *  create series of hex cells between two points
//  * @param {SergeGrid<SergeHex<unknown>> | undefined} grid grid of hex cells
//  * @param {SergeHex<unknown>[] | undefined} allowableCells list of cells where platform could travel to
//  * @param {SergeHex<unknown>} originHex start of this route
//  * @param {SergeHex<unknown>} destinationHex end of this route
//  * @returns {SergeHex<unknown>[] | undefined} List of allowable cells between origin and destination
//  */
// const plannedRouteFor3 = (grid: SergeGrid3 | undefined,
//   allowableCells: SergeGrid3,
//   originHex: SergeHex3,
//   destinationHex: SergeHex3): SergeGrid3 => {
//   if (grid) {
//     if (originHex && destinationHex) {
//       const route = h3Line(originHex.index, destinationHex.index)
//       const routeCells = route.map((index:string): SergeHex3 | undefined => {
//         return grid.find((cell:SergeHex3) => { return cell.index === index })
//       }) as SergeGrid3
//       if (allowableCells.length) {
//         // sort out overlap with allowable cells
//         return routeCells.filter(cell => allowableCells.includes(cell))
//       } else {
//         return routeCells
//       }
//     } else {
//       return []
//     }
//   } else {
//     return []
//   }
// }

// export default plannedRouteFor3
