/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Colorpicker from './index'

const handleChange = (_color: string): void => { console.log(_color) }

it('colorpicker renders correctly', () => {
  const tree = renderer
    .create(<Colorpicker onChange={handleChange} value={'orange'}>Text</Colorpicker>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
