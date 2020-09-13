/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminMessage from './index'
import { MessagesMock } from '@serge/mocks'

describe('AdminMessage component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessage message={MessagesMock[0]}/>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
