/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import WorldState from './index'
import { RouteStore } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'
const store: RouteStore = { routes: [] }

it('WorldState renders correctly', () => {
  const tree = renderer
    .create(<WorldState phase={ADJUDICATION_PHASE} isUmpire={true} store={store} name="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
