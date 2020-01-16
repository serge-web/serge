/* global it expect */

import forceFor from '../../Components/Mapping/helpers/forceFor'

/* sample dataset that is used across all tests in this file
*/
const allForces = [
  { name: 'umpire' },
  {
    name: 'Blue',
    assets: [
      {
        name: 'alpha'
      },
      {
        name: 'bravo'
      }
    ]
  },
  {
    name: 'Red',
    assets: [
      {
        name: 'charlie'
      },
      {
        name: 'delta'
      }
    ]
  },
  {
    name: 'Green',
    assets: [
      {
        name: 'echo'
      },
      {
        name: 'foxtrot'
      }
    ]
  }
]
it('Finds the force for echo', () => {
  expect(forceFor(allForces, 'echo')).toEqual('Green')
})

it('Finds the force for alpha', () => {
  expect(forceFor(allForces, 'alpha')).toEqual('Blue')
})
