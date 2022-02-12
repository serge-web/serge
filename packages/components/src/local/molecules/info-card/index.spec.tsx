/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import InfoCard from './index'

it('InfoCard renders correctly', () => {
  const tree = renderer
    .create(<InfoCard content=""/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
