import React from 'react'
import renderer from 'react-test-renderer'
import { forces, platformTypes } from 'src/mocks'
import AssetsAccordion from './index'

describe('SettingForces component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AssetsAccordion selectedForce={forces[0]} forcesData={forces} platformTypes={platformTypes} onChangeHandler={(nextForce): void => console.log('change', nextForce)} />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
