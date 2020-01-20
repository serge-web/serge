/* global it expect */

import assetsVisibleToMe from '../../Components/Mapping/helpers/assetsVisibleToMe'
import { UMPIRE_FORCE } from '../../consts'

/* sample dataset that is used across all tests in this file
*/
const allForces = [
  { name: 'umpire' },
  {
    name: 'Blue',
    assets: [
      {
        name: 'alpha',
        perceptions: {
          Red: { force: 'Blue', type: 'Frigate' }
        }
      },
      {
        name: 'bravo',
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
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        name: 'delta',
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
        perceptions: {
          Blue: { force: 'Green', type: 'Frigate' },
          Red: { force: 'Green', type: 'Frigate' }
        }
      },
      {
        name: 'foxtrot'
      }
    ]
  }
]

it('I am umpire force', () => {
  const myForce = UMPIRE_FORCE
  const isVis = assetsVisibleToMe(allForces, myForce)
  expect(isVis.length).toEqual(6)
  expect(isVis.find(asset => asset.name === 'alpha')).toBeTruthy()
})

it('I am red force', () => {
  const myForce = 'Red'
  const isVis = assetsVisibleToMe(allForces, myForce)
  expect(isVis.length).toEqual(4)
  expect(isVis.find(asset => asset.name === 'alpha')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'charlie')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'delta')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'echo')).toBeTruthy()
})

it('I am Blue force', () => {
  const myForce = 'Blue'
  const isVis = assetsVisibleToMe(allForces, myForce)
  expect(isVis.length).toEqual(4)
  expect(isVis.find(asset => asset.name === 'alpha')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'bravo')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'charlie')).toBeTruthy()
  expect(isVis.find(asset => asset.name === 'echo')).toBeTruthy()
})
