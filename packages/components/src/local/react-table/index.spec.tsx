/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ReactTable from './index'

describe('ReactTable component:', () => {
  const tableActivity = (getRoleId: string, activityType: string): void => {
    console.log(getRoleId, activityType)
  }
  it('renders correctly', () => {
    const tree = renderer
      .create(<ReactTable
        tableActivity={tableActivity}
        columns={[]} rows={[]} customStyles={{}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
