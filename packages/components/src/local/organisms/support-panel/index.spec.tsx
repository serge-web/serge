/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from '.'

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
