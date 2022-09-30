import React from 'react'
import renderer from 'react-test-renderer'
import ViewAs from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<ViewAs />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
