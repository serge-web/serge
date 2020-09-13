/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdminMessagesList from './index'

import { MessagesMock } from '@serge/mocks'

describe('AdminMessage component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessagesList messages={MessagesMock} markAllAsRead={null} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
