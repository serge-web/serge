/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import IconUploader from './index'

it('icon-uploader renders correctly', () => {
  const tree = renderer
    .create(<IconUploader limit={20000}>Text</IconUploader>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
