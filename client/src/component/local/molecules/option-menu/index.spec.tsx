/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import menus from './mocks/menus'
import OptionMenu from './index'

describe('OptionMenu component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OptionMenu menus={menus} gameName="http://localhost/IMWARC-New" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
