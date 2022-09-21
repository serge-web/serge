import { Asset, AttributeValues, ForceData, RouteTurn } from '@serge/custom-types'
import orientationFor from './orientation-for'
import { smallScaleForces } from '@serge/mocks'
import { OrientationMarker } from '@serge/custom-types/platform-type-data'
import { brgBetweenTwoHex } from '../../mapping/helpers/h3-helpers'

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
    const attributes: AttributeValues = asset.attributeValues || []
    const current = asset.position || ''

    // start off without using attribute
    const rel: OrientationMarker = { origin: 'relative' }

    // check we're looking at the asset we expect to look at
    expect(asset && asset.name).toEqual('SSN-1')

    // force use of history
    expect(orientationFor(current, history, [], attributes, rel)).toBeCloseTo(70.9, 0)
    // allow use of planned
    expect(orientationFor(current, history, planned, attributes, rel)).toBeCloseTo(9.4, 0)

    // test permutations of orientation!
    const relAttr: OrientationMarker = { origin: 'relative', attribute: 'asdic-dir' }
    expect(orientationFor(current, history, planned, attributes, relAttr)).toBeCloseTo(129.4, 0)
    const absAttr: OrientationMarker = { origin: 'absolute', attribute: 'asdic-dir' }
    expect(orientationFor(current, history, planned, attributes, absAttr)).toBeCloseTo(120, 0)
  }
})

it('Maths works as expected', () => {
  const pos1 = '8718a84daffffff'
  const pos2 = '8718a84d8ffffff'
  expect(brgBetweenTwoHex(pos1, pos2)).toBeCloseTo(70.9, 0)
  expect(brgBetweenTwoHex(pos2, pos1)).toBeCloseTo(-108.9, 0)
})
