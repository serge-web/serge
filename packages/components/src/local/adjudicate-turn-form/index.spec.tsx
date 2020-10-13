/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdjudicateTurnForm from './index'
import formData from './mocks/formData'

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

it('AdjudicateTurnForm renders correctly', () => {
  const tree = renderer
    .create(<AdjudicateTurnForm plansSubmitted={false} formHeader="Adjudicate header" icon={iconData} formData={formData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
