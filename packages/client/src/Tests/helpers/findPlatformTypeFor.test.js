/* global expect it */

import findPlatformTypeFor from '../../Components/Mapping/helpers/findPlatformTypeFor'

import platformTypes from '../Mocks/platformTypes'

it('Correctly finds the platformType', () => {
  expect(findPlatformTypeFor(platformTypes, 'fishing-vessel')).toEqual({ conditions: ['Working', 'Disabled', 'Immobile', 'Destroyed'], icon: 'fishing-vessel.svg', name: 'Fishing vessel', speedKts: [10], states: [{ mobile: false, name: 'Fishing' }, { mobile: false, name: 'Moored' }, { mobile: true, name: 'Transiting' }], travelMode: 'sea' })
})
