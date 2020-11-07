/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import AdminMessagesList from './index'
import { AdminMessagesMock, forces } from '@serge/mocks'

const [whiteForce] = forces

describe('AdminMessage component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessagesList force={whiteForce} messages={AdminMessagesMock} markAllAsRead={null} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
