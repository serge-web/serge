 /** generate an updated history, using the provided state */
export default function newHistoryFromPlans (/* array history */ historyIn, /* int */ turnNumber, /* element */ status, /* array */ route, /* element */ position) {
  const history = historyIn || []
  const currentState = { turn: turnNumber, status: status, route: route, position: position }
  history.push(currentState)
  return history
};
