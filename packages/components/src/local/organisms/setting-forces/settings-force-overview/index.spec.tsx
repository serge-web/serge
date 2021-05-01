import React from 'react'
import renderer from 'react-test-renderer'
import { forces as forcesMock } from '@serge/mocks'
import SettingsForceOverview from './index'
import { ForceData } from '@serge/custom-types'

const handleChange = (obj: ForceData): void => {
  console.log(obj)
}

describe('SettingsForceOverview component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SettingsForceOverview data={forcesMock[0]} handleChangeForce={handleChange} />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
