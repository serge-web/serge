import { MessagePlanning } from '@serge/custom-types'
import { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Orders from '../orders'
import { OrderRow } from '../orders/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({ messages, templates, isUmpire, gameDate, customiseTemplate, playerForceId }: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  useEffect(() => {
    setMyMessages(messages.filter((message:MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId))
  }, [messages, playerForceId])


  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  useEffect(() => {
    const dataTable = myMessages.map(message => {
      return {
        id: message._id,
        title: message.message.title,
        force: message.details.from.forceId,
        role: message.details.from.roleName,
        activity: message.message.ActivityType,
        startDate: shortDate(message.message.startDate),
        endDate: shortDate(message.message.endDate)
      }
    })
    setRows(dataTable)
  }, [myMessages])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const columns: Column[] = jestWorkerId ? [] : [
    { title: 'ID', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Force', field: 'force'},
    { title: 'Owner', field: 'role' },
    { title: 'Activity', field: 'activity' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Finish Date', field: 'endDate' }
  ]
  if (!isUmpire) {
    // drop the force column, since player only sees their force
    columns.splice(2, 1)
  }

  return (
    <div className={styles['messages-list']}>
      <Orders customiseTemplate={customiseTemplate} messages={messages} columns={columns} rows={rows} templates={templates || []} gameDate={gameDate} />
    </div>
  )
}

export default PlanningMessagesList
