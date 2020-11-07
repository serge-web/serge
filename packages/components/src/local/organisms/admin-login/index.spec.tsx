/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminLogin from './index'

describe('AdminLogin component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AdminLogin onSubmit={window.alert}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
