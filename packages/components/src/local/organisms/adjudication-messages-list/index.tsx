import { MessagePlanning, TemplateBody } from '@serge/custom-types'
import { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import Orders from '../orders'
import { OrderRow } from '../orders/types/props'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const AdjudicationMessagesList: React.FC<PropTypes> = ({ messages, templates, isUmpire, gameDate, customiseTemplate, playerForceId }: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  useEffect(() => {
    setMyMessages(messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId))
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
    { title: 'Force', field: 'force' },
    { title: 'Owner', field: 'role' },
    { title: 'Activity', field: 'activity' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Finish Date', field: 'endDate' }
  ]
  if (!isUmpire) {
    // drop the force column, since player only sees their force
    columns.splice(2, 1)
  }

  const detailPanel = (rowData: OrderRow): any => {
    // retrieve the message & template
    const message: MessagePlanning | undefined = messages.find((value: MessagePlanning) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', messages)
    } else {
      const localTemplates = templates || []
      const template = localTemplates.find((value: TemplateBody) => value.title === message.details.messageType)
      if (!template) {
        console.log('template not found for', message.details.messageType, 'templates:', templates)
      }
      if (message && template) {
        return <JsonEditor
          messageContent={message.message}
          customiseTemplate={customiseTemplate}
          messageId={rowData.id}
          template={template}
          disabled={false}
          gameDate={gameDate}
        />
      } else {
        return <div>Template not found for {message.details.messageType}</div>
      }
    }
  }

  return (
    <div className={styles['messages-list']}>
      <Orders detailPanelFnc={detailPanel} customiseTemplate={customiseTemplate} messages={messages} columns={columns} rows={rows} templates={templates || []} gameDate={gameDate} />
    </div>
  )
}

export default AdjudicationMessagesList
