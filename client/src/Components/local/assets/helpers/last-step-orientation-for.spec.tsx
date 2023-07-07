import { Asset, ForceData, RouteTurn } from 'src/custom-types'
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
    const current = '8718a84c7ffffff'
    const oldCurrent = '8718a84c9ffffff'

    // check we're looking at the asset we expect to look at
    expect(asset && asset.name).toEqual('SSN-1')

    history[history.length - 1].route = ['8718a84c5ffffff']
    planned[0].route = ['8718a84c1ffffff']

    //    console.log('asset', asset.name, current, history, planned)

    // omit history
    expect(lastStepOrientationFor(current, oldCurrent, [], [])).toBeUndefined()

    // force use of history
    expect(lastStepOrientationFor(current, oldCurrent, history, [])).toBeCloseTo(251.1, 0)

    // allow use of planned
    expect(lastStepOrientationFor(current, oldCurrent, history, planned)).toBeCloseTo(309.1, 0)
  }
})
