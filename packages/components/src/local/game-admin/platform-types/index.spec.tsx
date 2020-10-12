/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PlatformTypes from './index'

import { platformType } from '@serge/mocks'
import { PlatformType } from '@serge/custom-types'

const onChange = (platformType: PlatformType): void => {
  console.log(platformType)
}

it('platform-types renders correctly', () => {
  const tree = renderer
    .create(<PlatformTypes
      platformType={platformType}
      onChange={onChange}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
