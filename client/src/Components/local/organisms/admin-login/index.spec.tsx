/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminLogin from './index'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => [])
}))

describe('AdminLogin component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AdminLogin onSubmit={window.alert}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
