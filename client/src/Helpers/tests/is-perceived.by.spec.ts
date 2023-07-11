import isPerceivedBy, { ForceStyle } from '../is-perceived-by'
import forceColors from '../force-colors'

import { forces } from 'src/mocks'

const blueForce = forces[1]
const redForce = forces[2]
const greenForce = forces[3]

/**
 * the updated perceptions data model used an array
 */
const currentPerceptions = [{
  by: redForce.uniqid,
  force: blueForce.uniqid,
  name: 'Test perceived name'
}, {
  by: greenForce.uniqid
}]

const forceColorList = forceColors(forces)

const undefinedColor: ForceStyle = {
  force: 'undefined',
  color: '#fff'
}

const blueColor = forces[1].color

describe('isPercivedBy current', () => {
  it('returns valid results for current schema ', () => {
    // can't see it, so return undefined
    expect(isPerceivedBy(currentPerceptions, blueForce.uniqid, forceColorList, undefinedColor)).toEqual(undefined)
    // doesn't know force, so return undefined color
    expect(isPerceivedBy(currentPerceptions, greenForce.uniqid, forceColorList, undefinedColor)).toEqual(undefinedColor)
    // has perceived color. use it
    expect(isPerceivedBy(currentPerceptions, redForce.uniqid, forceColorList, undefinedColor)?.color).toEqual(blueColor)
  })
})
