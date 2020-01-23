/* global expect it */

import getClearedRoute from '../../Components/Mapping/helpers//getClearedRoute'

it('Correctly returns an empty array', () => {
  expect(getClearedRoute()).toEqual([])
})
