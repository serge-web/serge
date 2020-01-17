/* global it expect */
import handleVisibilityChanges from '../../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

const payload = [
  {
    assetId: 'C06',
    by: 'Red',
    newVis: true
  }
]

const payload2 = [
  {
    assetId: 'C05',
    by: 'Blue',
    newVis: false
  }, {
    assetId: 'C05',
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
        uniqid: 'C01',
        name: 'alpha',
        perceptions: {
          Red: { force: 'Blue', type: 'Frigate' }
        }
      },
      {
        name: 'bravo',
        uniqid: 'C02',
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
        uniqid: 'C03',
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        name: 'delta',
        uniqid: 'C04',
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
        uniqid: 'C05',
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        uniqid: 'C06',
        name: 'foxtrot'
      }
    ]
  }
]

it('correctly handle stuff when perceptions missing', () => {
  const updated = handleVisibilityChanges({ payload: payload }, allForces)
  expect(updated).toBeTruthy()
  const charlie = findAsset(allForces, 'C06')
  expect(charlie.name).toEqual('foxtrot')
  expect(charlie.perceptions.Blue).toBeUndefined()
  expect(charlie.perceptions.Red).toBeTruthy()
})

it('correctly handle stuff when perceptions missing', () => {
  const charlie = findAsset(allForces, 'C05')
  const updated = handleVisibilityChanges({ payload: payload2 }, allForces)
  expect(updated).toBeTruthy()
  expect(charlie.name).toEqual('echo')
  expect(charlie.perceptions.Blue).toBeUndefined()
  expect(charlie.perceptions.Red).toBeTruthy()
})

