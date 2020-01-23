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
        uniqid: 'alpha'
      },
      {
        uniqid: 'bravo'
      }
    ]
  },
  {
    name: 'Red',
    assets: [
      {
        uniqid: 'charlie'
      },
      {
        uniqid: 'delta'
      }
    ]
  },
  {
    name: 'Green',
    assets: [
      {
        uniqid: 'echo'
      },
      {
        uniqid: 'foxtrot'
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
