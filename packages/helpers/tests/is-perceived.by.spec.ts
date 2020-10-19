import isPerceivedBy from '../is-perceived-by'
import forceColors from '../force-colors'

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

/**
 *  the original perceptions data model used a dictionary
 */
const legacyPerceptions = {
  Red: {force: "Blue", type: ""},
  Green: {}
}

import { forces } from '@serge/mocks'

const forceColorList = forceColors(forces)

const undefinedColor = '#fff'

describe('isPercivedBy current', () => {
  it('returns valid results for current schema ', () => {
    // can't see it, so return undefined
    expect(isPerceivedBy(currentPerceptions, 'Blue', forceColorList, undefinedColor)).toEqual(undefined)
    // doesn't know force, so return undefined color
    expect(isPerceivedBy(currentPerceptions, 'Green', forceColorList, undefinedColor)).toEqual(undefinedColor)
    // has perceived color. use it
    expect(isPerceivedBy(currentPerceptions, 'Red', forceColorList, undefinedColor)).toEqual('#00F')
  })
})

describe('isPercivedBy legacy', () => {
  it('returns valid results for legacy schema ', () => {
    // can't see it, so return undefined
    expect(isPerceivedBy(legacyPerceptions, 'Blue', forceColorList, undefinedColor)).toEqual(undefined)
    // doesn't know force, so return undefined color
    expect(isPerceivedBy(legacyPerceptions, 'Green', forceColorList, undefinedColor)).toEqual(undefinedColor)
    // has perceived color. use it
    expect(isPerceivedBy(legacyPerceptions, 'Red', forceColorList, undefinedColor)).toEqual('#00F')
  })
})
