/* global it expect */

import { IconDefinition } from 'src/custom-types'
import React from 'react'
import renderer from 'react-test-renderer'

import AdjudicateTurnForm from './index'

const icon: IconDefinition = { forceColor: '#f00', platformType: 'frigate', icon: 'frigate.svg' }

it('AdjudicateTurnForm renders correctly', () => {
  const tree = renderer
    .create(<AdjudicateTurnForm icon={icon} canSubmitPlans={true} plansSubmitted={false}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
