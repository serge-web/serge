/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import Forces from './index'

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<div>
      <Forces label="Visible to" options={[{ name: 'Blue', colour: '#0000ff', id: '' }, { name: 'Red', colour: '#c70039', id: '' }]} value={['Blue']} />
      <Forces label="Visible to" labelPlacement='top' options={[{ name: 'Blue', colour: '#0000ff', id: '' }, { name: 'Red', colour: '#c70039', id: '' }]} value={['Blue']} />
      <Forces label="Visible to" labelPlacement='bottom' options={[{ name: 'Blue', colour: '#0000ff', id: '' }, { name: 'Red', colour: '#c70039', id: '' }]} value={['Blue']} />
      <Forces label="Visible to" labelPlacement='start' options={[{ name: 'Blue', colour: '#0000ff', id: '' }, { name: 'Red', colour: '#c70039', id: '' }]} value={['Blue']} />
      <Forces label="Visible to" labelPlacement='end' options={[{ name: 'Blue', colour: '#0000ff', id: '' }, { name: 'Red', colour: '#c70039', id: '' }]} value={['Blue']} />
    </div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
