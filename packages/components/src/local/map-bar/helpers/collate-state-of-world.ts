import { Route } from '@serge/custom-types'
import { padInteger } from '@serge/helpers'

interface AssetState {
  uniqid: string,
  name: string
  condition: string
  perceptions: any
  destroyed?: boolean
  history?: any
  plannedTurns?: any
  newState?: any
}

interface ForceState {
  name: string,
  assets: Array<AssetState>
}

interface StateOfWorld {
  comment: string,
  turn: number,
  name: string,
  detail: Array<ForceState>
}

const collateStateOfWorld = (routes: Array<Route>, turnNumber: number): StateOfWorld => {
  const forces:Array<ForceState> = []
  routes.forEach((route:Route) => {
    const forceName:string = route.actualForceName
    // retrieve (or create) an object for this force
    let forceArray = forces.find((state:ForceState) => state.name === forceName)
    if(!forceArray) {
      forceArray = {name: forceName, assets:[]}
      forces.push(forceArray)
    }

    // collate element to represent this asset
    const assetState:AssetState = {
      uniqid: route.uniqid,
      name: route.name,
      condition: route.asset.condition,
      perceptions: route.asset.perceptions,
    }

    if(route.asset.destroyed) {
      assetState.destroyed = route.asset.destroyed
    } else {
      assetState.history = route.history
      assetState.plannedTurns = route.planned
      assetState.newState = route.currentStatus
    }
    forceArray.assets.push(assetState)
  })

  const res: StateOfWorld = {
    comment: '', 
    turn: turnNumber + 1, 
    name: 'State of World T' + padInteger(turnNumber),
    detail: forces
  }
  return res

}

export default collateStateOfWorld