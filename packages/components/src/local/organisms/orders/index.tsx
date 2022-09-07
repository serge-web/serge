import MaterialTable from 'material-table'
import React from 'react'
import PropTypes from './types/props'

export const Orders: React.FC<PropTypes> = ({ columns, rows, title }: PropTypes) => {
  return <MaterialTable
    title={title || 'My Orders'}
    columns={columns}
    data={rows}
    options={{
      sorting: true
    }}
  />
}

export default Orders
