import { MessagePlanning, TemplateBody } from '@serge/custom-types'
import MaterialTable from 'material-table'
import React from 'react'
import JsonEditor from '../../molecules/json-editor'
import PropTypes, { OrderRow } from './types/props'

export const Orders: React.FC<PropTypes> = ({ messages, columns, rows, title, templates, gameDate }: PropTypes) => {
  // fix unit-test for MaterialTable, issue https://github.com/mbrn/material-table/issues/385
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  // old JSON editor expects a template dictionary, collate it for him
  const templatesByKey = {}
  if (templates) {
    for (const template of templates) {
      templatesByKey[template._id] = template
    }
  }

  const extendProps = jestWorkerId ? {} : {
    detailPanel: (rowData: OrderRow): any => {
      // retrieve the message & template
      const message = messages.find((value: MessagePlanning) => value._id === rowData.id)
      if (!message) {
        console.error('message not found, id:', rowData.id)
      }
      return message && <JsonEditor
        messageTemplates={templatesByKey}
        messageContent={message}
        messageId={rowData.id}
        template={templates.find((value: TemplateBody) => value.title === message.details.messageType)._id}
        disabled={true}
        gameDate={gameDate}
      />
    }
  }

  return <MaterialTable
    title={title || 'My Orders'}
    columns={columns}
    data={rows}
    options={{
      sorting: true
    }}
    {...extendProps}
  />
}

export default Orders
