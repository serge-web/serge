import { Asset, ForceData, RouteTurn } from '@serge/custom-types'
import lastStepOrientationFor from './last-step-orientation-for'
import { smallScaleForces } from '@serge/mocks'

const getAsset = (forces: ForceData[]): Asset | undefined => {
  if (forces && forces[1] && forces[1].assets) {
    return forces[1].assets[0]
  } else {
    return undefined
  }
}

const asset = getAsset(smallScaleForces)

it('Calculates correct orientation for whole route', () => {
  if (asset) {
    const history: RouteTurn[] = asset.history || []
    const planned: RouteTurn[] = asset.plannedTurns || []
    const current = '8818a84c67fffff'

    // check we're looking at the asset we expect to look at
    expect(asset && asset.name).toEqual('SSN-1')
    
    history[history.length-1].route = ['8818a84c21fffff']
    planned[0].route = ['8818a84c6dfffff']

//    console.log('asset', asset.name, current, history, planned)

    // omit history
    expect(lastStepOrientationFor(current, [], [])).toBeUndefined()

    // force use of history
    expect(lastStepOrientationFor(current, history, [])).toBeCloseTo(41.4, 0)

    // allow use of planned
    expect(lastStepOrientationFor(current, history, planned)).toBeCloseTo(41.44, 0)
  }
})
