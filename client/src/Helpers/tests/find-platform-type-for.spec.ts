/* Import mock data */
import { platformTypes } from '@serge/mocks'
import findPlatformTypeFor from '../find-platform-type-for'

it('find type using id', () => {
  expect(findPlatformTypeFor(platformTypes, 'scrap', 'a2').uniqid).toEqual('a2')
})

it('cant\' find type using bad id', () => {
  // try the host platform in the task group
  expect(() => { findPlatformTypeFor(platformTypes, 'scrap', 'bvsd2a') }).toThrow('Could not find platform type id:bvsd2a')
})

it('find type using name', () => {
  // try the host platform in the task group
  expect(findPlatformTypeFor(platformTypes, 'fishing-vessel', '').uniqid).toEqual('a1')
  expect(findPlatformTypeFor(platformTypes, 'Fishing-Vessel', '').uniqid).toEqual('a1')
  expect(findPlatformTypeFor(platformTypes, 'ssn', '').uniqid).toEqual('a2')
  expect(() => { findPlatformTypeFor(platformTypes, 'scrap', '') }).toThrow('Could not find platform type:scrap')
})
