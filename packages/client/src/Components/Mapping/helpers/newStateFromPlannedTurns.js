/** find the asset with the provided id */
export default function newStateFromPlannedTurns (/* array routes */ plans, /* string */ state, /* string */ position) {
  const newState = {}
  if (plans && plans.length > 0) {
    // ok get the first item off the route
    const thisStep = plans.shift()

    newState.state = thisStep.state

    if (thisStep.route && thisStep.route.length) {
      // find the end point
      newState.position = thisStep.route[thisStep.route.length - 1]
    } else {
      // not a mobile state, keep the current location
      newState.position = position
    }
  } else {
    // just keep the current state
    newState.state = state
    newState.position = position
  }
  return newState
}
