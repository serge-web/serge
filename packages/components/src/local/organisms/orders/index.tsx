import { messageDataCollaborativeEditing, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'
import MaterialTable from 'material-table'
import React from 'react'
import JsonEditor from '../../molecules/json-editor'
import PropTypes from './types/props'

export const Orders: React.FC<PropTypes> = ({ columns, rows, title }: PropTypes) => {
  // fix unit-test for MaterialTable, issue https://github.com/mbrn/material-table/issues/385
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const extendProps = jestWorkerId ? {} : {
    detailPanel: () => (
      <JsonEditor
        messageTemplates={MessageTemplatesMockByKey}
        messageContent={messageDataCollaborativeEditing[0]}
        messageId={messageDataCollaborativeEditing[0]._id}
        template={'k16eedkp'}
        disabled={true}
        gameDate={WargameMock.data.overview.gameDate}
      />
    )
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
