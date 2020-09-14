/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import AdminMessage from './index'
import { MessagesMock, forces } from '@serge/mocks'

const [whiteForce] = forces

describe('AdminMessage component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessage force={whiteForce} message={MessagesMock[0]}/>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
