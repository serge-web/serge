/* global it expect */

import handleMarker from '../../Components/Mapping/helpers/handleMarker'

it('unchanged if no class', () => {
  /** #TODO implement this test, look at:
   * check unchanged if class not found
   * check unchanged if not umpire
   * check prior class names removed
   * check new class names added
   * check hidden if not umpire or own force
   */
  var marker
  var asset
  expect(handleMarker('blue', marker, asset, true)).toBeTruthy()
})
