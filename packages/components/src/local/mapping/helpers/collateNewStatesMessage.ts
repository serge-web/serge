import turnNameFor from './turnNameFor'

const collateNewStatesMessage = (allAssets: Array<any>, turnNumber: number): any => {
  const message: any = {}
  const perForceStates: any = allAssets.map(data => {
    const newState: any = {}
    const asset = data.asset
    newState.uniqid = asset.uniqid
    newState.name = asset.name
    newState.condition = data.current_condition
    newState.perceptions = data.current_perceptions
    // handle destroyed status
    if (asset.destroyed) {
      newState.destroyed = asset.destroyed
    } else {
      newState.history = data.newHistory
      newState.plannedTurns = data.current
      newState.newState = data.newState
    }
    let force: string
    if (asset.force) {
      force = asset.force
    } else {
      console.error('can\' find force for:', asset.name)
      force = ''
    }

    // see if we need to create a new list for this force
    let thisForce = perForceStates.find((entry: any): boolean => entry.name === force)
    if (!thisForce) {
      thisForce = { name: force }
      thisForce.assets = []
      return thisForce
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
}

export default collateNewStatesMessage
