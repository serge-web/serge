/* global it expect */

import collatePlanningOrders from '../../Components/Mapping/helpers/collatePlanningOrders'

const allRoutes = [

]

it('increments turn number', () => {
  /** #TODO implement this test, look at:
   * turn increments
   * comment is present, but empty
   * title is correct
   * check number of entries in detail object
   * check contents of a detail entry
   */
  expect(collatePlanningOrders(allRoutes, 4)).toBeTruthy()
})
