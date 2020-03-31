
export default function createNewRoute (/* int */ turnNumber, /* element */ status,
  /* element */ existingRoute, /* array */ hexList) {

  // override the turn number with the most recently planned one, if there is one
  const lastNum = existingRoute.length ? existingRoute[existingRoute.length - 1].turn + 1 : turnNumber + 1

  // note: when we send a planned turn, we only need the state name, not the whole
  // state element
  const newRoute = { status: { state: status.state }, turn: lastNum }

  // store speed, if it's a mobile state
  if (status.speedKts) {
    newRoute.status.speedKts = status.speedKts
  }
  // store route, if there is one
  if (hexList) {
    newRoute.route = hexList
  }

  return newRoute
}