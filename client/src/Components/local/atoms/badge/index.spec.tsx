/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Badge from './index'

describe('Badge component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Badge label="Charcoal" type="charcoal" />
          <Badge label="Outline" outline={true} />
          <Badge label="Outline custom color" customColor='#f00' outline={true} />
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
