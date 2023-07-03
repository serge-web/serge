/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import ButtonList from './index'

describe('ButtonList component:', () => {
  it('renders correctly', () => {
    const buttons = [{
      customColor: 'charcoal'
    }]
    const tree = renderer
      .create(<ButtonList buttons={buttons} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
