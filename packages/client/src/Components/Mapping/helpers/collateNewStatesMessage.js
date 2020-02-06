import turnNameFor from './turnNameFor'

export default function collateNewStatesMessage (/* array of planning structures */ allAssets, /* int */ turnNumber) {
  const message = {}
  const perForceStates = []

  allAssets.forEach(data => {
    const newState = {}
    const asset = data.asset
    newState.uniqid = asset.uniqid
    newState.name = asset.name
    newState.condition = data.current_condition
    // handle destroyed status
    if (asset.destroyed) {
      newState.destroyed = asset.destroyed
    } else {
      newState.history = data.newHistory
      newState.plannedTurns = data.current
      newState.perceptions = data.current_perceptions
      newState.newState = data.newState
    }
    let force
    if (asset.force) {
      force = asset.force
    } else {
      console.error('can\' find force for:', asset.name)
      force = ''
    }

    // see if we need to create a new list for this force
    let thisForce = perForceStates.find(entry => entry.name === force)
    if (!thisForce) {
      thisForce = { name: force }
      thisForce.assets = []
      perForceStates.push(thisForce)
    }
    thisForce.assets.push(newState)
  })

  message.turn = turnNumber + 1
  message.name = 'State of World ' + turnNameFor(message.turn)
  message.comment = ''
  message.detail = {
    type: 'StateOfWorld',
    data: perForceStates
  }
  return message
};