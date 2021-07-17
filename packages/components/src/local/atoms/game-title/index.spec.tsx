/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameTitle from './index'

const onTitleClick = (title: string): void => {
  window.alert(title)
}

describe('GameTitle component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <GameTitle initiated={false} name="http://localhost/imwarc" shortName="imwarc" title="IMWARC-New" onClick={onTitleClick} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
