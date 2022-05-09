import { ForceData, MessagePerceptionOfContact } from '@serge/custom-types'
import { PERCEPTION_OF_CONTACT } from '@serge/config'
// TODO: change it to @serge/config

/* global it expect */
import handlePerceptionChanges from '../../../ActionsAndReducers/playerUi/helpers/handlePerceptionChanges'
import findAsset from '../../../Helpers/findAsset'

const payload1: MessagePerceptionOfContact = {
  assetId: 'C01',
  messageType: PERCEPTION_OF_CONTACT,
  perception: { by: 'Red', force: 'Green', type: 'Frigate' }
}

const payload2: MessagePerceptionOfContact = {
  assetId: 'C02',
  messageType: PERCEPTION_OF_CONTACT,
  perception: { by: 'Red', force: 'Red', type: 'MPA' }
}

const payload3: MessagePerceptionOfContact = {
  assetId: 'C06',
  messageType: PERCEPTION_OF_CONTACT,
  perception: { by: 'Red', force: 'Red', type: 'Fisher' }
}

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
        name: 'alpha',
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          type: 'frigate'
        }]
      },
      {
        name: 'bravo',
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
        uniqid: 'C03',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          type: 'frigate'
        }]
      },
      {
        name: 'delta',
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
        uniqid: 'C05',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          type: 'frigate'
        }]
      },
      {
        uniqid: 'C06',
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

it('correctly updates perception with perception entry already present', () => {
  const updated = handlePerceptionChanges(payload1, allForces)
  expect(updated).toBeTruthy()
  const alpha = findAsset(allForces, 'C01')
  expect(alpha!.name).toEqual('alpha')
  const bluePerception = alpha!.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = alpha!.perceptions.find(perception => perception.by === 'Red')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception!.force).toEqual('Green')
  expect(redPerception!.type).toEqual('Frigate')
})

it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload2, allForces)
  expect(updated).toBeTruthy()
  const bravo = findAsset(allForces, 'C02')
  expect(bravo!.name).toEqual('bravo')
  const bluePerception = bravo!.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = bravo!.perceptions.find(perception => perception.by === 'Red')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception!.force).toEqual('Red')
  expect(redPerception!.type).toEqual('MPA')
})

it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload3, allForces)
  expect(updated).toBeTruthy()
  const foxtrot = findAsset(allForces, 'C06')
  const bluePerception = foxtrot!.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = foxtrot!.perceptions.find(perception => perception.by === 'Red')
  expect(foxtrot!.name).toEqual('foxtrot')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception!.force).toEqual('Red')
  expect(redPerception!.type).toEqual('Fisher')
})
