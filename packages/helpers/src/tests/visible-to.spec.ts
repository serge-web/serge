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

describe('results of visible to:', () => {
  it('current schema', () => {
    expect(visibleTo(currentPerceptions)).toEqual(['Red', 'Green'])
  })
})
