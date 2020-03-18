/** the user has clicked on a waypoint along a leg, and wishes to clear from that
 * one onwards
  */
const resetLegsFrom = (plannedLegs: Array<any>, turnNumber: string): Array<any> => plannedLegs
  .filter(leg => leg.turn <= turnNumber)

export default resetLegsFrom
