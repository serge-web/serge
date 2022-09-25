/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Orders from './index'
import { OrderRow } from './types/props'

const detailPanel = (rowData: OrderRow): any => {
  return <div>message: {JSON.stringify(rowData)}</div>
}

describe('Orders component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<Orders detailPanelFnc={detailPanel}
        columns={[]} rows={[]} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
