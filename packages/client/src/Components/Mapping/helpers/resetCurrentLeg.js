/** the user has clicked on a waypoint along a leg, and wishes to clear from that
   * one onwards
   */
const resetLegsFrom = (/* dictionary */ plannedLegs, /* string */ turnNumber) => {
  // loop through the legs and delete any turns after 'turnNumber

  return plannedLegs
    .filter(leg => {
      return leg.turn <= turnNumber
    })
}

export default resetLegsFrom
