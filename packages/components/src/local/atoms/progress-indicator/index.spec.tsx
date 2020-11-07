/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import ProgressIndicator from './index'

const indicators = [
  { id: 1, complete: true },
  { id: 2, active: true },
  { id: 3 }
]
describe('ProgressIndicator component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ProgressIndicator list={indicators} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
