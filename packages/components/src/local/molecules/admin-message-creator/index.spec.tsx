/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdminMessageCreator from './index'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

describe('AdminMessageCreator component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AdminMessageCreator from={force} channel={'Game Admin'} role={'Umpire'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
