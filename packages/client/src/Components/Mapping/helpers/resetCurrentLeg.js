/** the user has clicked on a waypoint along a leg, and wishes to clear from that
   * one onwards
   */
const resetCurrentLeg = (/* dictionary */ plannedLegs, /* string */ turnNumber, /* object */ planningMarker) => {
  // loop through the legs and delete any turns after 'turnNumber

  return plannedLegs
    .filter(leg => {
      return leg.turn < turnNumber
    })
}

export default resetCurrentLeg
