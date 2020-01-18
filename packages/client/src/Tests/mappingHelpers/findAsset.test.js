/* global it expect */

import findAsset from '../../Components/Mapping/helpers/findAsset'

const allForces = [
  { name: 'umpire' },
  {
    name: 'Blue',
    assets: [
      {
        uniqid: 'aloha_1'
      },
      {
        uniqid: 'aloha_2'
      }
    ]
  },
  {
    name: 'Red',
    assets: [
      {
        uniqid: 'aloha_3'
      },
      {
        uniqid: 'aloha_4'
      }
    ]
  },
  {
    name: 'Green',
    assets: [
      {
        uniqid: 'aloha_5'
      },
      {
        uniqid: 'aloha_6'
      }
    ]
  }
]

it('Finds match for actual entity', () => {
  expect(findAsset(allForces, 'aloha_3')).toBeTruthy()
  expect(findAsset(allForces, 'aloha_3').uniqid).toEqual('aloha_3')
})

it('Returns null for missing entity', () => {
  expect(findAsset(allForces, 'dingo')).toBeUndefined()
})
