/* Import mock data */
import { forces } from 'src/mocks'
import forceFor from '../force-for'

it('find asset at top level', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0pra5431').uniqid).toEqual('Blue')
})

it('able to find asset that is within organisational unit', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0prbr6441').uniqid).toEqual('Blue')
})

it('find asset that is hosted by another (blue)', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0pra18702').uniqid).toEqual('Blue')
})

it('find asset that is hosted by another (red)', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0pra153102').uniqid).toEqual('Red')
})

it('find asset that is towards end of list', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0pra000204').uniqid).toEqual('Green')
})

it('find asset that is in hosting, in comprising', () => {
  // try the host platform in the task group
  expect(forceFor(forces, 'a0pra43302').uniqid).toEqual('Blue')
})
