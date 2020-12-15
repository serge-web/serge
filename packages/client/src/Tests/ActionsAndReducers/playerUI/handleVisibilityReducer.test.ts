import { ForceData, MessageVisibilityChanges } from '@serge/custom-types'
import { VISIBILIY_CHANGES } from '@serge/config/src/globals'
/* global it expect */
import handleVisibilityChanges from '../../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

const payload: MessageVisibilityChanges = {
  messageType: VISIBILIY_CHANGES,
  payload: [
    {
      assetId: 'C06',
      by: 'Red',
      newVis: true
    }
  ]
}

const payload2: MessageVisibilityChanges = {
  messageType: VISIBILIY_CHANGES,
  payload: [
    {
      assetId: 'C05',
      by: 'Blue',
      newVis: false
    },
    {
      assetId: 'C05',
      by: 'Red',
      newVis: true
    }
  ]
}

const allForces: ForceData[] = [
  {
    uniqid: 'id1',
    name: 'umpire',
    overview: '',
    roles: [],
    icon: '',
    color: '',
    umpire: true,
    dirty: false
  },
  {
    name: 'Blue',
    uniqid: 'id2',
    assets: [
      {
        uniqid: 'C01',
        name: 'alpha',
        perceptions: [{ force: 'Blue', type: 'Frigate' }]
      },
      {
        name: 'bravo',
        uniqid: 'C02',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    icon: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    uniqid: 'id3',
    name: 'Red',
    assets: [
      {
        name: 'charlie',
        uniqid: 'C03',
        perceptions: [{ force: 'Green', type: 'Frigate', by: 'Blue' }]
      },
      {
        name: 'delta',
        uniqid: 'C04',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    icon: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    name: 'Green',
    uniqid: 'id4',
    assets: [
      {
        name: 'echo',
        uniqid: 'C05',
        perceptions: [{ force: 'Green', type: 'Frigate', by: 'Blue' }]
      },
      {
        uniqid: 'C06',
        name: 'foxtrot',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    icon: '',
    color: '',
    umpire: false,
    dirty: false
  }
]

it('correctly handle stuff when perceptions missing', () => {
  const updated: ForceData[] = handleVisibilityChanges(payload, allForces)
  expect(updated).toBeTruthy()
  const charlie = findAsset(allForces, 'C06')
  expect(charlie!.name).toEqual('foxtrot')
  expect(charlie!.perceptions.find(p => p.by === 'Blue')).toBeUndefined()
  expect(charlie!.perceptions.find(p => p.by === 'Red')).toBeTruthy()
})

it('correctly handle stuff when perceptions missing', () => {
  const charlie = findAsset(allForces, 'C05')
  const updated = handleVisibilityChanges(payload2, allForces)
  expect(updated).toBeTruthy()
  expect(charlie!.name).toEqual('echo')
  expect(charlie!.perceptions.find(p => p.by === 'Blue')).toBeUndefined()
  expect(charlie!.perceptions.find(p => p.by === 'Red')).toBeTruthy()
})
