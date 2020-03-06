/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ProgressIndicator from './index'

import tabs from './mocks/tabs'

it('ProgressBar renders correctly', () => {
  const tree = renderer
    .create(<ProgressIndicator tabs={tabs} currentTab='overview' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
