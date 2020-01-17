/**
 *  The user has clicked on the end of a route, but he just wants to
 *  drop the last leg
 **/
const submitClearLastLeg = (/* dictionary */ plannedLegs) => {
  const newPlannedLegs = plannedLegs
  newPlannedLegs.pop()
  return newPlannedLegs
}

export default submitClearLastLeg
