/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Textarea from './index'

it('TextInput renders correctly', () => {
  const tree = renderer
    .create(<Textarea id='test' label="Turns" value={'test'} onChange={(nv): void => { console.log(nv) }}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
