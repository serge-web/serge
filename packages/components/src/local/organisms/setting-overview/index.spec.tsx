/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import SettingOverview from './index'
import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'

const handleSave = (overview: WargameOverview): void => {
  console.log('Your save logic', overview)
}

const handleChange = (nextOverview: WargameOverview): void => {
  console.log(nextOverview)
}

describe('SettingOverview component:', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SettingOverview
      overview={WargameExportedMock.data.overview}
      onChange={handleChange}
      onSave={handleSave}
    />, {
      createNodeMock: () => document.createElement('textarea')
    }).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
