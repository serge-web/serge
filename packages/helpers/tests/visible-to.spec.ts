import visibleTo from '../visible-to'

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

describe('results of visible to:', () => {
  it('current schema', () => {
    expect(visibleTo(currentPerceptions)).toEqual(['Red', 'Green'])
  })
  it('legacy schema', () => {
    expect(visibleTo(legacyPerceptions)).toEqual(['Red', 'Green'])
  })
})
