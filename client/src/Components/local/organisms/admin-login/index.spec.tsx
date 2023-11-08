/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminLogin from './index'

jest.mock('react-redux', () => {
  const reactRedux = jest.requireActual('react-redux')
  return {
    ...reactRedux, 
    useSelector: jest.fn(() => [])
  }
})

describe('AdminLogin component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AdminLogin onSubmit={window.alert}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
