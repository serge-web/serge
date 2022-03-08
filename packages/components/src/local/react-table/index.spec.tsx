/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ReactTable from './index'

describe('ReactTable component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ReactTable columns={[]} rows={[]} customStyles={{}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
