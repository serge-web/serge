/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import MoreInfo from './index'

it('MoreInfo renders correctly', () => {
  const tree = renderer
    .create(<div><MoreInfo color="#00f" description="blue description">Blue</MoreInfo><MoreInfo description="The percentage fuel remaining">Fuel</MoreInfo></div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
