/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import InsightForm from './index'

it('InsightForm renders correctly', () => {
  const tree = renderer
    .create(
      <InsightForm
        onCancel={(): any => window.alert('Click Cancel')}
        onSend={(): any => window.alert('Click Send')}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
