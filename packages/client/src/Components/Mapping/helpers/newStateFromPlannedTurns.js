/** find the asset with the provided id */
export default function newStateFromPlannedTurns (/* array routes */ plans, /* element */ status, /* string */ position) {
  const newState = {}
  if (plans && plans.length > 0) {
    // ok get the first item off the route
    const thisStep = plans.shift()

    newState.status = JSON.parse(JSON.stringify(thisStep.status))

    if (thisStep.route && thisStep.route.length) {
      // find the end point
      newState.position = thisStep.route[thisStep.route.length - 1]

      // also store the route
      newState.route = thisStep.route
    } else {
      // not a mobile state, keep the current location
      newState.position = position
    }
  } else {
    // just keep the current state
    // hotfix - double-check we're returning and element, not a string
    if (!status.state) {
      newState.status = { state: JSON.parse(JSON.stringify(status)) }
    } else {
      newState.status = JSON.parse(JSON.stringify(status))
    }
    newState.position = position
  }
  return newState
}
