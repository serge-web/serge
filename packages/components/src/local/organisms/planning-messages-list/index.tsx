import { ParticipantTemplate } from '@serge/custom-types'
import { checkV3ParticipantStates } from '@serge/helpers'
import { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Orders from '../orders'
import { OrderRow } from '../orders/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({ messages, channel, playerForceId, playerRoleId }: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [templates, setTemplates] = useState<ParticipantTemplate[]>([])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  // sort out what templates this role can use
  useEffect(() => {
    // find the participation for this player/role
    const isObserver = false
    const partStates = checkV3ParticipantStates(channel, playerForceId, playerRoleId, isObserver)
    setTemplates(partStates.templatesIDs)
  }, [channel])


  useEffect(() => {
    const dataTable = messages.map(message => {
      return {
        id: message.message.reference,
        title: message.message.title,
        role: message.details.from.roleName,
        status: (message.details.collaboration && message.details.collaboration.status) || 'Pending',
        startDate: shortDate(message.message.startDate),
        endDate: shortDate(message.message.endDate)
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
      {
        templates && 
        <div>[New template editor for:{templates.map((value: ParticipantTemplate) => value.title)}]</div>
      }
    </div>
  )
}

export default PlanningMessagesList
