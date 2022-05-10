/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RCB from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<RCB type="checkbox" label="Visible to" options={['Red', 'Blue']} value={['Red']} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('RadioType renders correctly', () => {
  const tree = renderer
    .create(<RCB type="radio" label="Visible to" options={['Red', 'Blue']} value={'Red'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

// TODO: reinstate a test that drives the RCB with option objects
// it('Form option data renders correctly', () => {
//   const tree = renderer
//     .create(<RCB type="radio" label="Visible to" options={[{name: 'one', color: '#f00'}, {name: 'two', color:'#0f0'}]} value={'Red'} />)
//     .toJSON()
//   expect(tree).toMatchSnapshot()
// })

it('Number data renders correctly', () => {
  const tree = renderer
    .create(<RCB type="radio" label="Visible to" options={[1, 2, 3]} value={'Red'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
