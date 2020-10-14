/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Overview from './index'
import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'

const handleChange = (nextOverview: WargameOverview) => {
  console.log(nextOverview)
}

it('overview renders correctly', () => {
  const tree = renderer
    .create(<Overview overview={WargameExportedMock.data.overview} onChange={handleChange} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
