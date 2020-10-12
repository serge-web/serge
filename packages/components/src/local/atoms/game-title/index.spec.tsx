/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameTitle from './index'

const onTitleClick = (title: string) => {
  window.alert(title)
  return {}
}

describe('GameTitle component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <GameTitle initiated={false} title="IMWARC-New" onClick={onTitleClick} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
