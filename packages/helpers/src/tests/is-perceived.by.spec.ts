import isPerceivedBy, { ForceStyle } from '../is-perceived-by'
import forceColors from '../force-colors'

import { forces } from '@serge/mocks'

/**
 * the updated perceptions data model used an array
 */
const currentPerceptions = [{
  by: 'Red',
  force: 'Blue',
  name: 'Frigate A Perceived Name'
}, {
  by: 'Green'
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
    expect(isPerceivedBy(currentPerceptions, forces[1].uniqid, forceColorList, undefinedColor)).toEqual(undefined)
    // doesn't know force, so return undefined color
    expect(isPerceivedBy(currentPerceptions, forces[3].uniqid, forceColorList, undefinedColor)).toEqual(undefinedColor)
    // has perceived color. use it
    expect(isPerceivedBy(currentPerceptions, forces[2].uniqid, forceColorList, undefinedColor)?.color).toEqual(blueColor)
  })
})
