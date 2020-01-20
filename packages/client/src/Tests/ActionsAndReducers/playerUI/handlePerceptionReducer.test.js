/* global it expect */
import handlePerceptionChanges from '../../../ActionsAndReducers/playerUi/helpers/handlePerceptionChanges'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

const payload1 =
  {
    asset: 'C01',
    force: 'Red',
    perception: { force: 'Green', type: 'Frigate'}
  }

const payload2 =
  {
    asset: 'C02',
    force: 'Red',
    perception: { force: 'Red', type: 'MPA'}
  }

const payload3 = 
  {
    asset: 'C06',
    force: 'Red',
    perception: { force: 'Red', type: 'Fisher'}
  }

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

it('correctly updates perception with perception entry already present', () => {
  const updated = handlePerceptionChanges(payload1, allForces)
  expect(updated).toBeTruthy()
  const alpha = findAsset(allForces, 'C01')
  expect(alpha.name).toEqual('alpha')
  expect(alpha.perceptions.Blue).toBeUndefined()
  expect(alpha.perceptions.Red).toBeTruthy()
  expect(alpha.perceptions.Red.force).toEqual('Green')
  expect(alpha.perceptions.Red.type).toEqual('Frigate')
})


it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload2, allForces)
  expect(updated).toBeTruthy()
  const bravo = findAsset(allForces, 'C02')
  expect(bravo.name).toEqual('bravo')
  expect(bravo.perceptions.Blue).toBeUndefined()
  expect(bravo.perceptions.Red).toBeTruthy()
  expect(bravo.perceptions.Red.force).toEqual('Red')
  expect(bravo.perceptions.Red.type).toEqual('MPA')
})


it('correctly updates perception with perception entry not present', () => {
  const updated = handlePerceptionChanges(payload3, allForces)
  expect(updated).toBeTruthy()
  const foxtrot = findAsset(allForces, 'C06')
  expect(foxtrot.name).toEqual('foxtrot')
  expect(foxtrot.perceptions.Blue).toBeUndefined()
  expect(foxtrot.perceptions.Red).toBeTruthy()
  expect(foxtrot.perceptions.Red.force).toEqual('Red')
  expect(foxtrot.perceptions.Red.type).toEqual('Fisher')
})