import { expect, it } from '@jest/globals'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { ForceData, MessageAdjudicationOutcomes } from '@serge/custom-types'
import deepCopy from '../deep-copy'
import findAsset from '../find-asset'
import handleAdjudicationOutcomes from '../handle-adjudication-outcomes'

const allForces: ForceData[] = [
  {
    name: 'f-Blue',
    assets: [
      {
        uniqid: 'alpha',
        contactId: 'C1334',
        platformTypeId: 'p12',
        condition: 'some-cond',
        name: 'alpha',
        perceptions: [{
          by: 'f-Red',
          force: 'Blue',
          typeId: 'frigate'
        }, {
          by: 'f-Green',
          force: 'f-Red',
          health: 33
        }]
      },
      {
        uniqid: 'bravo',
        name: 'Big Brravo',
        contactId: 'C154',
        platformTypeId: 'p12',
        condition: 'some-cond',
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
  }
]

const emptyPayload: MessageAdjudicationOutcomes = {
  messageType: ADJUDICATION_OUTCOMES,
  reference: 'umpire-234',
  health: [],
  perception: [],
  movement: []
}

it('empty lists results in no change', () => {
  const forces = deepCopy(allForces)
  const beforeStr = JSON.stringify(forces)
  const updated = handleAdjudicationOutcomes(emptyPayload, forces)
  const afterStr = JSON.stringify(updated)
  expect(beforeStr).toEqual(afterStr)
})

const validPayload: MessageAdjudicationOutcomes = {
  messageType: ADJUDICATION_OUTCOMES,
  reference: 'umpire-234',
  health: [{ asset: 'alpha', health: 34 }],
  perception: [
    { force: 'f-Red', asset: 'alpha', perceivedHealth: 22, perceivedName: 'alfred', perceivedForce: 'f-Green' },
    { force: 'f-Green', asset: 'bravo', perceivedForce: 'f-Orange' }
  ],
  movement: []
}

it('correctly updates perception with perception entry not present', () => {
  const forces = deepCopy(allForces)
  const beforeStr = JSON.stringify(forces)
  const updated = handleAdjudicationOutcomes(validPayload, forces)
  const afterStr = JSON.stringify(updated)
  expect(beforeStr).not.toEqual(afterStr)
  const one = findAsset(updated, 'alpha')
  expect(one.perceptions).toBeTruthy()
  expect(one.perceptions.length).toEqual(2)
  expect(one.perceptions[1].by).toEqual('f-Red')
  expect(one.perceptions[1].name).toEqual('alfred')
  expect(one.perceptions[1].typeId).toBeUndefined()
  expect(one.perceptions[1].force).toEqual('f-Green')
  expect(one.perceptions[1].health).toEqual(22)
  const two = findAsset(updated, 'bravo')
  expect(two.perceptions).toBeTruthy()
  expect(two.perceptions.length).toEqual(1)
  expect(two.perceptions[0].by).toEqual('f-Green')
  expect(two.perceptions[0].force).toEqual('f-Orange')
  expect(two.perceptions[0].name).toBeUndefined()
  expect(two.perceptions[0].typeId).toBeUndefined()
  expect(two.perceptions[0].health).toBeUndefined()
})
