/* global expect it */

import submitClearWholeRoute from '../../Components/Mapping/helpers/submitClearWholeRoute'

it('Correctly returns an empty array', () => {
  expect(submitClearWholeRoute()).toEqual([])
})
