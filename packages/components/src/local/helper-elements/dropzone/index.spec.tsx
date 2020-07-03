/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Dropzone from './index'

it('Dropzone renders correctly', () => {
  const tree = renderer
    .create(<Dropzone item={{uniqid: '1'}}>Title</Dropzone>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
