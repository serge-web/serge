/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import WorldState from './index'
import { RouteStore } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'
import { WorldStatePanels } from './helpers/enums'
const store: RouteStore = { routes: [] }

it('WorldState renders correctly', () => {
  const tree = renderer
    .create(<WorldState phase={ADJUDICATION_PHASE} turnNumber={2} panel={WorldStatePanels.Control} canSubmitOrders={true} plansSubmitted={false} isUmpire={true} store={store} name="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
