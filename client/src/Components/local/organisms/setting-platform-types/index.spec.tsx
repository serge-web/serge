/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { platformType } from 'src/mocks'
import { PlatformType } from 'src/custom-types'
import SettingPlatformTypes from './index'

const onChange = (platformType: PlatformType): void => {
  console.log(platformType)
}

describe('SettingPlatformTypes component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SettingPlatformTypes
        platformType={platformType}
        onChange={onChange}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
