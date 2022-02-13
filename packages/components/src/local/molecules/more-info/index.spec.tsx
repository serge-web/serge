/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import MoreInfo from './index'

it('MoreInfo renders correctly', () => {
  const tree = renderer
    .create(<MoreInfo description="The percentage fuel remaining">Fuel</MoreInfo>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
