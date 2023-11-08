
/* Import mock data */
import { forces } from 'src/mocks'

import findAsset from '../find-asset'

it('find asset at top level', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0pra5431').uniqid).toEqual('a0pra5431')
})

it('able to find asset that is within organisational unit', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0prbr6441').uniqid).toEqual('a0prbr6441')
})

it('find asset that is hosted by another (blue)', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0pra18702').uniqid).toEqual('a0pra18702')
})

it('find asset that is hosted by another (red)', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0pra153102').uniqid).toEqual('a0pra153102')
})

it('find asset that is towards end of list', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0pra000204').uniqid).toEqual('a0pra000204')
})

it('find asset that is in hosting, in comprising', () => {
  // try the host platform in the task group
  expect(findAsset(forces, 'a0pra43302').uniqid).toEqual('a0pra43302')
})
