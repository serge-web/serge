import MaterialTable from 'material-table'
import React from 'react'
import PropTypes from './types/props'

export const Orders: React.FC<PropTypes> = ({ columns, rows, title, detailPanelFnc }: PropTypes) => {
  // fix unit-test for MaterialTable, issue https://github.com/mbrn/material-table/issues/385
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const extendProps = jestWorkerId ? {} : {
    detailPanel: detailPanelFnc
  }

  return <MaterialTable
    title={title || 'My Orders'}
    columns={columns}
    data={rows}
    options={{
      sorting: true,
      paging: false
    }}
    {...extendProps}
  />
}

export default Orders
