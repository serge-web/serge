/* global expect it */

import resetCurrentLeg from '../../Components/Mapping/helpers/resetCurrentLeg'
import legs from '../Mocks/plannedLegs.json'

it('Can see all legs and returns exactly 5 planned turns', () => {
  expect(resetCurrentLeg(legs, '', {}).length).toEqual(5)
})

// loop through the legs

// is this the leg?

// delete it, and all following legs

// and also reset the state of the map interactions (update the state/position of the planning marker)
