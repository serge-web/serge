import { ForceData, MessageVisibilityChanges } from '@serge/custom-types'
import { VISIBILITY_CHANGES } from '@serge/config'
/* global it expect */
import handleVisibilityAndConditionChanges from '../handle-visibility-condition-changes'
import findAsset from '../find-asset'

const payload: MessageVisibilityChanges = {
  messageType: VISIBILITY_CHANGES,
  assetId: 'C06',
  visibility: [
    {
      by: 'Red',
      newVis: true
    }
  ],
  condition: 'Disabled'
}

const payload2: MessageVisibilityChanges = {
  messageType: VISIBILITY_CHANGES,
  assetId: 'C05',
  visibility: [
    {
      by: 'Blue',
      newVis: false
    },
    {
      by: 'Red',
      newVis: true
    }
  ],
  condition: 'Full capability'
}

const allForces: ForceData[] = [
  {
    uniqid: 'id1',
    name: 'umpire',
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: true,
    dirty: false
  },
  {
    name: 'Blue',
    uniqid: 'id2',
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C713',
        platformType: 'Unmanned-Airborne-Vehicle',
        uniqid: 'C01',
        name: 'alpha',
        perceptions: [{ by: 'Red', force: 'Blue', type: 'Frigate' }]
      },
      {
        condition: 'Full capability',
        contactId: 'C723',
        platformType: 'Unmanned-Airborne-Vehicle',
        name: 'bravo',
        uniqid: 'C02',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    uniqid: 'id3',
    name: 'Red',
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C733',
        platformType: 'Unmanned-Airborne-Vehicle',
        name: 'charlie',
        uniqid: 'C03',
        perceptions: [{ force: 'Green', type: 'Frigate', by: 'Blue' }]
      },
      {
        condition: 'Full capability',
        contactId: 'C813',
        platformType: 'Unmanned-Airborne-Vehicle',
        name: 'delta',
        uniqid: 'C04',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  },
  {
    name: 'Green',
    uniqid: 'id4',
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C743',
        platformType: 'Unmanned-Airborne-Vehicle',
        name: 'echo',
        uniqid: 'C05',
        perceptions: [{ force: 'Green', type: 'Frigate', by: 'Blue' }]
      },
      {
        condition: 'Disabled',
        contactId: 'C715',
        platformType: 'Unmanned-Airborne-Vehicle',
        uniqid: 'C06',
        name: 'foxtrot',
        perceptions: []
      }
    ],
    overview: '',
    roles: [],
    iconURL: '',
    color: '',
    umpire: false,
    dirty: false
  }
]

it('correctly handle stuff when perceptions missing', () => {
  const updated: ForceData[] = handleVisibilityAndConditionChanges(payload, allForces)
  expect(updated).toBeTruthy()
  const charlie = findAsset(updated, 'C06')
  expect(charlie.name).toEqual('foxtrot')
  expect(charlie.perceptions.find(p => p.by === 'Blue')).toBeUndefined()
  expect(charlie.perceptions.find(p => p.by === 'Red')).toBeTruthy()
  expect(charlie.condition).toEqual(payload.condition)
})

it('correctly handle stuff when perceptions missing', () => {
  const updated = handleVisibilityAndConditionChanges(payload2, allForces)
  const charlie = findAsset(updated, 'C05')
  expect(updated).toBeTruthy()
  expect(charlie.name).toEqual('echo')
  expect(charlie.perceptions.find(p => p.by === 'Blue')).toBeUndefined()
  expect(charlie.perceptions.find(p => p.by === 'Red')).toBeTruthy()
  expect(charlie.condition).toEqual(payload2.condition)
})

it('correctly handle stuff when no condition supplied missing', () => {
  // put the condition in a known state
  const charlie1 = findAsset(allForces, 'C06')
  charlie1.condition = 'PENDING'

  // copy the payload, so we can remove the condition
  const payload3 = { ...payload }
  payload3.condition = undefined
  const updated: ForceData[] = handleVisibilityAndConditionChanges(payload3, allForces)
  expect(updated).toBeTruthy()
  const charlie = findAsset(updated, 'C06')
  expect(charlie.name).toEqual('foxtrot')
  expect(charlie.perceptions.find(p => p.by === 'Blue')).toBeUndefined()
  expect(charlie.perceptions.find(p => p.by === 'Red')).toBeTruthy()
  expect(charlie.condition).toEqual('PENDING')
})

it('correctly handle condition when no visibility supplied', () => {
  // put the condition in a known state
  const charlie1 = findAsset(allForces, 'C06')
  charlie1.condition = 'Disabled'
  expect(charlie1.condition).toEqual('Disabled')

  // copy the payload, so we can remove the condition
  const payload3 = { ...payload2 }
  payload3.assetId = 'C06'
  payload3.visibility = []
  const updated: ForceData[] = handleVisibilityAndConditionChanges(payload3, allForces)
  expect(updated).toBeTruthy()
  const charlie = findAsset(updated, 'C06')
  expect(charlie.name).toEqual('foxtrot')
  expect(charlie.perceptions).toHaveLength(0)
  expect(charlie.condition).toEqual(payload3.condition)
})
