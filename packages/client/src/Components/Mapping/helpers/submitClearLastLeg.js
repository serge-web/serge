/**
 *  The user has clicked on the end of a route, but he just wants to
 *  drop the last leg
 **/
const submitClearLastLeg = (/* dictionary */ plannedLegs) => {
  return plannedLegs.reduce((d, i, idx, l) => idx < l.length - 1 ? [...d, i] : d, [])
}

export default submitClearLastLeg
