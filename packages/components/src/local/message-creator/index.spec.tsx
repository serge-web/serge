/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessageCreator from './index'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

it('MessageCreator renders correctly', () => {
  const tree = renderer
    .create(<MessageCreator from={force} channel={'Game Admin'} role={'Umpire'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
