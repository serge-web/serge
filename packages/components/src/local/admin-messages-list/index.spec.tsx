/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdminMessagesList from './index'

import { MessagesMock } from '@serge/mocks'

describe('AdminMessage component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessagesList userId="" messages={MessagesMock} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
