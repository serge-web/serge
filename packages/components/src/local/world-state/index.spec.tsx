/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import WorldState from './index'
import { RouteStore } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'
import { WorldStatePanels } from './helpers/enums'
import { platformTypesByKey, platformTypes, watuWargame } from '@serge/mocks'
const store: RouteStore = { routes: [] }
const infoMarkers = watuWargame.data.annotations ? watuWargame.data.annotations.annotations : []
const force = watuWargame.data.forces.forces[0].uniqid

it('WorldState renders correctly', () => {
  const tree = renderer
    .create(<WorldState
      selectedMarker={undefined} platforms={platformTypes} playerForce={force} infoMarkers={infoMarkers}
      platformTypesByKey={platformTypesByKey} phase={ADJUDICATION_PHASE} turnNumber={2}
      panel={WorldStatePanels.Control} canSubmitOrders={true}
      plansSubmitted={false} isUmpire={true} store={store} name="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
