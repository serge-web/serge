/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import SettingOverview from './index'
import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'

const handleChange = (nextOverview: WargameOverview): void => {
  console.log(nextOverview)
}

it('overview renders correctly', () => {
  const tree = renderer
    .create(<SettingOverview overview={WargameExportedMock.data.overview} onChange={handleChange} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
