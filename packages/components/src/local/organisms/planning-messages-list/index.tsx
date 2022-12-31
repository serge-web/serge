import { faFilter, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MessageDetails, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningMessageStructure, TemplateBody } from '@serge/custom-types'
import cx from 'classnames'
import MaterialTable, { Column } from 'material-table'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { collapseLocation, expandLocation } from './helpers/collapse-location'
import { toColumn, toRow } from './helpers/genData'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages, allTemplates, isUmpire, gameDate, customiseTemplate,
  playerForceId, playerRoleId, selectedOrders, postBack, setSelectedOrders,
  confirmCancel, channel, selectedForce, selectedRoleName, currentTurn, turnFilter,
  editLocation, forcePlanningActivities, onDetailPanelOpen, onDetailPanelClose
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const messageValue = useRef<any>(null)
  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }

  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, messages.length)

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  useEffect(() => {
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId)
    if (myMessages.length === 0) {
      setMyMessages(myForceMessages)
    } else {
      const newMessage = myForceMessages[0]
      if (newMessage) {
        // remove the previous object of the save message
        const filterSaveMessage = rows.filter(findeIndex => !findeIndex.reference.includes(newMessage.message.Reference))
        const row = toRow(newMessage, playerForceId)
        // push a new row
        setRows([...filterSaveMessage, row])
      }
    }
  }, [messages, playerForceId, playerRoleId])

  useEffect(() => {
    const showOrdersForAllRoles = !onlyShowMyOrders
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId)
    const myRoleMessages = myForceMessages.filter((message: MessagePlanning) => showOrdersForAllRoles || message.details.from.roleId === playerRoleId)
    setMyMessages(myRoleMessages)
  }, [onlyShowMyOrders])

  // useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously
  useLayoutEffect(() => {
    const dataTable: OrderRow[] = myMessages.map((message) => {
      return toRow(message, playerForceId)
    })
    setRows(dataTable)

    const columnData = toColumn(myMessages, playerForceId)

    if (columns.length === 0) {
      setColumns(columnData)
    }
  }, [myMessages, turnFilter])

  const editorValue = (val: { [property: string]: any }): void => {
    messageValue.current = val
  }

  // const editDocument = (docId: string): void => {
  //   editThisMessage && editThisMessage(docId)
  // }

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
        console.warn('template not found for', message.details.messageType, 'templates:', allTemplates)
      }
      if (message && template) {
        const pendingLocationData: Array<PlannedActivityGeometry[]> = []

        const saveMessage = () => {
          if (messageValue.current) {
            const details: MessageDetails = {
              channel: channel.uniqid,
              from: {
                force: selectedForce.name,
                forceColor: selectedForce.color,
                roleName: selectedRoleName,
                forceId: playerForceId,
                roleId: playerRoleId,
                iconURL: selectedForce.iconURL || selectedForce.icon || ''
              },
              messageType: message.details.messageType,
              timestamp: new Date().toISOString(),
              turnNumber: currentTurn
            }

            if (messageValue.current.content === '') return

            // inject location data, if present
            if (pendingLocationData.length > 0) {
              const msg = messageValue.current as PlanningMessageStructure
              if (msg.location) {
                msg.location = pendingLocationData[0]
              } else {
                console.warn('Expected this message to have location data')
              }
              // clear the array
              while (pendingLocationData.length) { pendingLocationData.pop() }
            }
            postBack && postBack(details, messageValue.current)
            messageValue.current = ''
          }
        }

        const canEdit = message.details.from.roleId === playerRoleId

        const localEditLocation = (): void => {
          if (message.message.location) {
            const localCallback = (newValue: PlannedActivityGeometry[]): void => {
              pendingLocationData.push(newValue)
            }
            // pass the location data object
            canEdit && editLocation && editLocation(message.message.location, localCallback)
          }
        }

        const activitiesForThisForce = forcePlanningActivities && forcePlanningActivities.find((act: PerForcePlanningActivitySet) => act.force === message.details.from.forceId)

        const DetailPanelStateListener = () => {
          useEffect(() => {
            onDetailPanelOpen && onDetailPanelOpen(rowData)
            return () => {
              onDetailPanelClose && onDetailPanelClose(rowData)
            }
          }, [])
          return <></>
        }
        const editorRightValue = message.message ? message.message : undefined

        return <>

          <DetailPanelStateListener />
          {/* { canEdit &&
            <Button color='secondary' onClick={() => {
              editDocument(rowData.id)
            }} icon='edit'>Edit</Button>
          } */}
          <JsonEditor
            messageContent={editorRightValue}
            viewSaveButton={true}
            saveMessage={saveMessage}
            customiseTemplate={customiseTemplate}
            storeNewValue={editorValue}
            messageId={rowData.id}
            confirmCancel={confirmCancel}
            template={template}
            disabled={!canEdit}
            gameDate={gameDate}
            modifyForEdit={(document) => collapseLocation(document, activitiesForThisForce)}
            modifyForSave={expandLocation}
            editCallback={localEditLocation}
          />
        </>
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
        icons={materialIcons}
        actions={jestWorkerId ? [] : [
          {
            icon: () => <FontAwesomeIcon title='Show filter controls' icon={faFilter} className={cx({ [styles.selected]: filter })} />,
            iconProps: filter ? { color: 'error' } : { color: 'action' },
            tooltip: 'Show filter controls',
            isFreeAction: true,
            onClick: (): void => setFilter(!filter)
          },
          {
            icon: () => <FontAwesomeIcon title='Only show orders created by me' icon={faUser} className={cx({ [styles.selected]: onlyShowMyOrders })} />,
            iconProps: onlyShowMyOrders ? { color: 'error' } : { color: 'action' },
            tooltip: 'Only show orders created by me',
            isFreeAction: true,
            onClick: (): void => setOnlyShowMyOrders(!onlyShowMyOrders)
          }
        ]}
        options={{
          search: false,
          paging: false,
          sorting: true,
          // defaultExpanded: true,
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
