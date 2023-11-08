import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import ApplyFilter from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<ApplyFilter filterApplied={true} setFilterApplied={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
