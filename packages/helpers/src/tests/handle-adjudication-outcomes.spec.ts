import { expect, it } from '@jest/globals'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { ForceData, InteractionDetails, MessageAdjudicationOutcomes } from '@serge/custom-types'
import moment from 'moment'
import deepCopy from '../deep-copy'
import findAsset from '../find-asset'
import handleOutcomes, { injectRepairs } from '../handle-outcomes'

const allForces: ForceData[] = [
  {
    name: 'f-Blue',
    assets: [
      {
        uniqid: 'alpha',
        contactId: 'C1334',
        platformTypeId: 'p12',
        condition: 'some-cond',
        health: 100,
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
        health: 95,
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
  Reference: 'umpire-234',
  healthOutcomes: [],
  important: true,
  perceptionOutcomes: [],
  locationOutcomes: [],
  narrative: 'well done'
}

it('empty lists results in no change', () => {
  const forces = deepCopy(allForces)
  const beforeStr = JSON.stringify(forces)
  const interaction = {} as InteractionDetails
  const updated = handleOutcomes(interaction, emptyPayload, forces)
  const afterStr = JSON.stringify(updated)
  expect(beforeStr).toEqual(afterStr)
})

const validPayload: MessageAdjudicationOutcomes = {
  messageType: ADJUDICATION_OUTCOMES,
  Reference: 'umpire-234',
  important: false,
  healthOutcomes: [
    { asset: 'alpha', c4: 'Degraded', health: 34, repairComplete: 'n/a' },
    { asset: 'bravo', c4: 'Degraded', health: 0, repairComplete: '2' }
  ],
  perceptionOutcomes: [
    { force: 'f-Red', asset: 'alpha', perceivedHealth: 22, perceivedName: 'alfred', perceivedForce: 'f-Green' },
    { force: 'f-Green', asset: 'bravo', perceivedForce: 'f-Orange' }
  ],
  locationOutcomes: [],
  narrative: 'well done'
}

it('correctly handles repairs', () => {
  const forces = deepCopy(allForces)
  const beforeStr = JSON.stringify(forces)
  const interaction = {
    startTime: '2022-05-01T00:55:00.000Z'
  } as InteractionDetails
  const updated = handleOutcomes(interaction, validPayload, forces)
  const afterStr = JSON.stringify(updated)
  expect(beforeStr).not.toEqual(afterStr)
  const one = findAsset(updated, 'bravo')
  expect(one).toBeTruthy()
  const attrs = one.attributes
  expect(attrs).toBeTruthy()
  if (attrs) {
    // now check repair event created
    const repairDate = attrs.a_Repair_Complete
    expect(repairDate).toBeTruthy()
    const repairMoment = moment.utc(repairDate)
    const gameDate = moment.utc(interaction.startTime)
    const repairTime = parseInt(validPayload.healthOutcomes[1].repairComplete || '0')
    const repairDue = gameDate.add(repairTime, 'days')
    expect(repairDue.valueOf()).toEqual(repairMoment.valueOf())
    // create new time, later than this
    const beforeDate = moment.utc(repairDate).subtract(2, 'minutes').toISOString()
    const beforeInter = {
      startTime: beforeDate
    } as InteractionDetails
    const beforePayload = injectRepairs(beforeInter, emptyPayload, updated)
    expect(beforePayload.healthOutcomes.length).toEqual(0)
    // create new time, later than this
    const newDate = moment.utc(repairDate).add(2, 'minutes').toISOString()
    const newInter = {
      startTime: newDate
    } as InteractionDetails
    const newLoad = injectRepairs(newInter, emptyPayload, updated)
    expect(newLoad.healthOutcomes.length).toEqual(1)
    const health = newLoad.healthOutcomes[0]
    expect(health.asset).toEqual('bravo')
    expect(health.health).toEqual(100)
    expect(health.c4).toEqual('Operational')
    // and apply the change - check asset still broken
    expect(one.health).toEqual(0)
    const updated2 = handleOutcomes(newInter, newLoad, updated)
    const one2 = findAsset(updated2, 'bravo')
    expect(one2.health).toEqual(100)
    const newAttrs = one2.attributes
    if (newAttrs) {
      expect(newAttrs.a_Repair_Complete).toBeUndefined()
    } else {
      // should not have got to this path
      expect(false).toBeTruthy()
    }
  }
})

it('correctly updates perception with perception entry not present', () => {
  const forces = deepCopy(allForces)
  const beforeStr = JSON.stringify(forces)
  const interaction = {
    endTime: ''
  } as InteractionDetails
  const updated = handleOutcomes(interaction, validPayload, forces)
  const afterStr = JSON.stringify(updated)
  expect(beforeStr).not.toEqual(afterStr)
  const one = findAsset(updated, 'alpha')
  // test health
  expect(one.health).toEqual(34)
  // test perceptions
  expect(one.perceptions).toBeTruthy()
  expect(one.perceptions.length).toEqual(2)
  expect(one.perceptions[0].by).toEqual('f-Red')
  expect(one.perceptions[0].name).toEqual('alfred')
  expect(one.perceptions[0].typeId).toBeUndefined()
  expect(one.perceptions[0].force).toEqual('f-Green')
  expect(one.perceptions[0].health).toEqual(22)
  const two = findAsset(updated, 'bravo')
  expect(two.health).toEqual(0)
  expect(two.perceptions).toBeTruthy()
  expect(two.perceptions.length).toEqual(1)
  expect(two.perceptions[0].by).toEqual('f-Green')
  expect(two.perceptions[0].force).toEqual('f-Orange')
  expect(two.perceptions[0].name).toBeUndefined()
  expect(two.perceptions[0].typeId).toBeUndefined()
  expect(two.perceptions[0].health).toBeUndefined()
})
