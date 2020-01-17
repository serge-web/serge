/* global it expect */
import handleVisibilityChanges from '../../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'

const payload = [
  {
    force: 'Green',
    asset: 'foxtrot',
    by: 'Blue',
    newVis: false
  }, {
    force: 'Green',
    asset: 'foxtrot',
    by: 'Red',
    newVis: true
  }
]

const allForces = [
  { name: 'umpire' },
  {
    name: 'Blue',
    assets: [
      {
        name: 'alpha',
        perceptions: {
          Red: { force: 'Blue', type: 'Frigate' }
        }
      },
      {
        name: 'bravo',
        perceptions: {
        }
      }
    ]
  },
  {
    name: 'Red',
    assets: [
      {
        name: 'charlie',
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        name: 'delta',
        perceptions: {
        }
      }
    ]
  },
  {
    name: 'Green',
    assets: [
      {
        name: 'echo',
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' },
          Red: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        name: 'foxtrot'
      }
    ]
  }
]

it('correctly handle stuff', () => {
  const updated = handleVisibilityChanges({ payload: payload }, allForces)
  expect(updated).toBeTruthy()
  expect(updated)
})
