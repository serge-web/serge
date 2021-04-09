/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import DataTable from './index'

describe('DataTable component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DataTable
          columns={['First column', 'Second column', 'Third column']}
          data={[['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3']]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
