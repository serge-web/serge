/* global it expect */
import handlePerceptionChanges from '../../../ActionsAndReducers/playerUi/helpers/handlePerceptionChanges'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

const payload1 =
  {
    asset: 'C01',
    perception: { by: 'Red', force: 'Green', type: 'Frigate'}
  }

const payload2 =
  {
    asset: 'C02',
    perception: { by: 'Red', force: 'Red', type: 'MPA'}
  }

const payload3 = 
  {
    asset: 'C06',
    perception: { by: 'Red', force: 'Red', type: 'Fisher'}
  }

const allForces = [
  { name: 'umpire' },
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
        perceptions: [
        ]
      }
    ]
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
        perceptions: [
        ]
      }
    ]
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
        name: 'foxtrot'
      }
    ]
  }
]

it('correctly updates perception with perception entry already present', () => {
  const updated = handlePerceptionChanges(payload1, allForces)
  expect(updated).toBeTruthy()
  const alpha = findAsset(allForces, 'C01')
  expect(alpha.name).toEqual('alpha')
  const bluePerception = alpha.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = alpha.perceptions.find(perception => perception.by === 'Red')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception.force).toEqual('Green')
  expect(redPerception.type).toEqual('Frigate')
})

it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload2, allForces)
  expect(updated).toBeTruthy()
  const bravo = findAsset(allForces, 'C02')
  expect(bravo.name).toEqual('bravo')
  const bluePerception = bravo.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = bravo.perceptions.find(perception => perception.by === 'Red')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception.force).toEqual('Red')
  expect(redPerception.type).toEqual('MPA')
})

it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload3, allForces)
  expect(updated).toBeTruthy()
  const foxtrot = findAsset(allForces, 'C06')
  const bluePerception = foxtrot.perceptions.find(perception => perception.by === 'Blue')
  const redPerception = foxtrot.perceptions.find(perception => perception.by === 'Red')
  expect(foxtrot.name).toEqual('foxtrot')
  expect(bluePerception).toBeUndefined()
  expect(redPerception).toBeTruthy()
  expect(redPerception.force).toEqual('Red')
  expect(redPerception.type).toEqual('Fisher')
})