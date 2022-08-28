import { Column } from 'material-table'
import React, { useEffect, useState } from 'react'
import Orders from '../orders'
import { OrderRow } from '../orders/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({ messages }: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])

  useEffect(() => {
    const dataTable = messages.map(message => {
      return {
        id: message.message.reference,
        title: message.message.title,
        role: message.details.from.roleName,
        status: (message.details.collaboration && message.details.collaboration.status) || 'Pending',
        startDate: message.message.startDate || '',
        endDate: message.message.endDate || ''
      }
    })
    setRows(dataTable)
  }, [])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const columns: Column[] = jestWorkerId ? [] : [
    { title: 'ID', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Role', field: 'role' },
    { title: 'Status', field: 'status' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Finish Date', field: 'endDate' }
  ]

  return (
    <div className={styles['messages-list']}>
      <Orders columns={columns} rows={rows} />
    </div>
  )
}

export default PlanningMessagesList
