/* global it expect */
import handlePlansSubmittedChanges from '../../../ActionsAndReducers/playerUi/helpers/handlePlansSubmittedChanges'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

const allForces = [
  {
    name: 'umpire'
  },
  {
    name: 'Blue',
    assets: [{
      uniqid: 'C01',
      name: 'alpha',
      perceptions: {
        Red: {
          force: 'Blue',
          type: 'Frigate'
        }
      }
    },
    {
      name: 'bravo',
      uniqid: 'C02',
      perceptions: {}
    }
    ]
  },
  {
    name: 'Red',
    assets: [{
      name: 'charlie',
      uniqid: 'C03',
      perceptions: {
        Blue: {
          force: 'Green',
          type: 'Frigate'
        }
      }
    },
    {
      name: 'delta',
      uniqid: 'C04',
      perceptions: {}
    }
    ]
  },
  {
    name: 'Green',
    assets: [{
      name: 'echo',
      uniqid: 'C05',
      perceptions: {
        Blue: {
          force: 'Green',
          type: 'Frigate'
        }
      }
    },
    {
      uniqid: 'C06',
      name: 'foxtrot'
    }
    ]
  }
]
const payload = {
  name: 'Blue Orders 1',
  comment: '',
  turn: 2,
  force: 'Blue',
  plannedRoutes: [
    {
      uniqid: 'C01',
      plannedTurns: [{
        turn: 1,
        status: { state: 'Transiting', speedKts: 20 },
        route: ['P12', 'O21', 'O20', 'N19']
      },
      {
        turn: 2,
        status: { state: 'Transiting', speedKts: 20 },
        route: ['019', '018', '017', 'N17']
      },
      {
        turn: 3,
        status: { state: 'Transiting', speedKts: 20 },
        route: ['M17', 'L16', 'L15', 'L14']
      }
      ]
    },
    {
      uniqid: 'C02',
      plannedTurns: [{
        turn: 1,
        status: { state: 'Transiting', speedKts: 10 },
        route: ['S23', 'R22']
      },
      {
        turn: 2,
        status: { state: 'Fishing' }
      },
      {
        turn: 3,
        status: { state: 'Transiting', speedKts: 10 },
        route: ['O21', 'O20']
      }]
    }]
}

it('correctly updates planned states', () => {
  const alpha = findAsset(allForces, 'C01')
  expect(alpha.plannedTurns).toBeFalsy()
  // check it has no planned states
  const updated = handlePlansSubmittedChanges(payload, allForces)
  expect(updated).toBeTruthy()
  expect(alpha.name).toEqual('alpha')
  expect(alpha.plannedTurns).toBeTruthy()
  expect(alpha.plannedTurns.length).toEqual(3)
  expect(alpha.plannedTurns[0].route.length).toEqual(4)
})
