import React, { useEffect, useState } from 'react'
import Orders from '../orders'
import { OrderColumn, OrderRow } from '../orders/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({ messages }: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])

  useEffect(() => {
    const dataTable = messages.map(message => {
      return {
        id: message._id,
        title: message.details.from.name || '',
        role: message.details.from.roleName,
        status: message.hasBeenRead ? 'True' : 'False',
        startDate: message.message.startDate || '',
        endDate: message.message.endDate || ''
      }
    })
    setRows(dataTable)
  }, [])

  const columns: OrderColumn[] = [
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
