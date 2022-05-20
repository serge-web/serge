import { it, expect } from '@jest/globals'
import { ForceData, MessageSubmitPlans } from '@serge/custom-types'
import {
  SUBMIT_PLANS
} from '@serge/config'
import handlePlansSubmittedChanges from '../../../ActionsAndReducers/playerUi/helpers/handlePlansSubmittedChanges'
import findAsset from '../../../Helpers/findAsset'

const allForces: ForceData[] = [
  {
    name: 'umpire',
    uniqid: 'id1',
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: true,
    dirty: false
  },
  {
    name: 'Blue',
    assets: [
      {
        uniqid: 'C01',
        contactId: 'C234',
        platformTypeId: 'p12',
        condition: 'some-cond',
        name: 'alpha',
        perceptions: [{
          force: 'Blue',
          type: 'Frigate',
          by: 'Red'
        }]
      },
      {
        name: 'bravo',
        contactId: 'C134',
        platformTypeId: 'p12',
        condition: 'some-cond',
        uniqid: 'C02',
        perceptions: []
      }
    ],
    uniqid: 'id2',
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    name: 'Red',
    assets: [
      {
        name: 'charlie',
        contactId: 'C534',
        platformTypeId: 'p12',
        condition: 'some-cond',
        uniqid: 'C03',
        perceptions: [{
          force: 'Green',
          type: 'Frigate',
          by: 'Blue'
        }]
      },
      {
        name: 'delta',
        contactId: 'C211',
        platformTypeId: 'p12',
        condition: 'some-cond',
        uniqid: 'C04',
        perceptions: []
      }
    ],
    uniqid: 'id3',
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    name: 'Green',
    assets: [
      {
        name: 'echo',
        contactId: 'C21234',
        platformTypeId: 'p12',
        condition: 'some-cond',
        uniqid: 'C05',
        perceptions: [
          {
            force: 'Green',
            type: 'Frigate',
            by: 'Blue'
          }
        ]
      },
      {
        uniqid: 'C06',
        contactId: 'C2214',
        platformTypeId: 'p12',
        condition: 'some-cond',
        name: 'foxtrot',
        perceptions: []
      }
    ],
    uniqid: 'id4',
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  }
]
const payload: MessageSubmitPlans = {
  messageType: SUBMIT_PLANS,
  plannedRoutes: [
    {
      uniqid: 'C01',
      plannedTurns: [
        {
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
      plannedTurns: [
        {
          turn: 1,
          status: { state: 'Transiting', speedKts: 10 },
          route: ['S23', 'R22']
        },
        {
          turn: 2,
          status: { state: 'Fishing' },
          route: []
        },
        {
          turn: 3,
          status: { state: 'Transiting', speedKts: 10 },
          route: ['O21', 'O20']
        }
      ]
    }]
}

it('correctly updates planned states', () => {
  const alpha = findAsset(allForces, 'C01')
  expect(alpha!.plannedTurns).toBeFalsy()
  // check it has no planned states
  const updated = handlePlansSubmittedChanges(payload, allForces)
  expect(updated).toBeTruthy()
  if (alpha && alpha.plannedTurns) {
    expect(alpha.name).toEqual('alpha')
    expect(alpha.plannedTurns).toBeTruthy()
    expect(alpha.plannedTurns.length).toEqual(3)
    if (alpha.plannedTurns[0].route) {
      expect(alpha.plannedTurns[0].route.length).toEqual(4)
    }
  }
})
