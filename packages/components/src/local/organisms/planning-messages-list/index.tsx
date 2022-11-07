import { MessageDetails, MessagePlanning, PlanningMessageStructureCore, TemplateBody } from '@serge/custom-types'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import { arrToDict, collateActivities } from '../planning-assets/helpers/collate-assets'
import { collapseLocation, expandLocation } from './helpers/collapse-location'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages, allTemplates, isUmpire, gameDate, customiseTemplate,
  playerForceId, playerRoleId, selectedOrders, postBack, setSelectedOrders, confirmCancel, channel, selectedForce, selectedRoleName, currentTurn
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const messageValue = useRef<any>(null)

  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }

  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, messages.length)

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  useEffect(() => {
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId)
    setMyMessages(myForceMessages)
  }, [messages, playerForceId])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  useEffect(() => {
    const roles: string[] = []
    const dataTable: OrderRow[] = myMessages.map(message => {
      const author = message.details.from.roleName
      if (!roles.includes(author)) {
        roles.push(author)
      }
      const plan = message.message as PlanningMessageStructureCore
      const row: OrderRow = {
        id: message._id,
        title: plan.title,
        role: author,
        activity: plan.activity || 'n/a',
        startDate: shortDate(plan.startDate),
        endDate: shortDate(plan.endDate)
      }
      return row
    })
    setRows(dataTable)

    // fix unit-test for MaterialTable
    const jestWorkerId = process.env.JEST_WORKER_ID
    // end

    const activities = collateActivities(myMessages)

    const columnData: Column[] = jestWorkerId ? [] : [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Author', field: 'role', lookup: arrToDict(roles) },
      { title: 'Activity', field: 'activity', lookup: arrToDict(activities) },
      { title: 'Start Date', field: 'startDate' },
      { title: 'Finish Date', field: 'endDate' }
    ]
    if (!isUmpire) {
      // drop the force column, since player only sees their force
      columns.splice(2, 1)
    }
    setColumns(columnData)
  }, [myMessages])

  const editorValue = (val: { [property: string]: any }): void => {
    messageValue.current = val
  }

  const detailPanel = (rowData: OrderRow): any => {
    // retrieve the message & template
    const message: MessagePlanning | undefined = messages.find((value: MessagePlanning) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', messages)
    } else {
      // check if message is being edited
      const localTemplates = allTemplates || []
      const template = localTemplates.find((value: TemplateBody) => value.title === message.details.messageType)
      if (!template) {
        console.log('template not found for', message.details.messageType, 'templates:', allTemplates)
      }
      if (message && template) {
        const saveMessage = () => {
          if (messageValue.current) {
            const details: MessageDetails = {
              channel: channel.uniqid,
              from: {
                force: selectedForce.name,
                forceColor: selectedForce.color,
                roleName: selectedRoleName,
                roleId: playerRoleId,
                iconURL: selectedForce.iconURL || selectedForce.icon || ''
              },
              messageType: template._id,
              timestamp: new Date().toISOString(),
              turnNumber: currentTurn
            }

            if (messageValue.current.content === '') return

            postBack && postBack(details, messageValue.current)
            messageValue.current = ''
          }
        }

        const canEdit = message.details.from.roleId === playerRoleId
        return <JsonEditor
          messageContent={message.message}
          viewSaveButton={true}
          saveMessage={saveMessage}
          customiseTemplate={customiseTemplate}
          storeNewValue={editorValue}
          messageId={rowData.id}
          confirmCancel={confirmCancel}
          template={template}
          disabled={!canEdit}
          gameDate={gameDate}
          modifyForEdit={collapseLocation}
          modifyForSave={expandLocation}
        />
      } else {
        return <div>Template not found for {message.details.messageType}</div>
      }
    }
  }

  const onSelectionChange = (rows: OrderRow[]): void => {
    const indices = rows.map((row: OrderRow): string => row.id)
    setSelectedOrders(indices)
  }

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const extendProps = jestWorkerId ? {} : {
    detailPanel: detailPanel
  }

  return (
    <div className={styles['messages-list']} style={{ zIndex: 9 }}>
      <MaterialTable
        title={'Orders'}
        columns={columns}
        data={rows}
        actions={jestWorkerId ? [] : [
          {
            icon: 'filter',
            iconProps: filter ? { color: 'action' } : { color: 'disabled' },
            tooltip: 'Show filter controls',
            isFreeAction: true,
            onClick: (): void => setFilter(!filter)
          }
        ]}
        options={{
          paging: false,
          sorting: false,
          filtering: filter,
          selection: !jestWorkerId // fix unit-test for material table
        }}
        onSelectionChange={onSelectionChange}
        {...extendProps}
      />
    </div>
  )
}

export default PlanningMessagesList
