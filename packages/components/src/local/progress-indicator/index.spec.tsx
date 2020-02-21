/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import wargame from '@serge/mocks/wargame.mock.json'

import ProgressIndicator from './index'

it('ProgressBar renders correctly', () => {
  const tree = renderer
    .create(<ProgressIndicator data={wargame.data} currentTab={wargame.currentTab} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
