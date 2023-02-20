import { faSearchMinus, faSearchPlus, faTrashAlt, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column } from '@material-table/core'
import { Phase } from '@serge/config'
import { MessageDetails, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningMessageStructure, TemplateBody } from '@serge/custom-types'
import cx from 'classnames'
import moment from 'moment'
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CustomDialog from '../../atoms/custom-dialog'
import JsonEditor from '../../molecules/json-editor'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { collapseLocation } from './helpers/collapse-location'
import { toColumn, toRow } from './helpers/genData'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages, allTemplates, isUmpire, gameDate, customiseTemplate,
  playerRoleId, selectedOrders, postBack, postBackArchive, setSelectedOrders,
  confirmCancel, channel, selectedForce, selectedRoleName, currentTurn, turnFilter,
  editLocation, forcePlanningActivities, onDetailPanelOpen, onDetailPanelClose,
  modifyForSave, phase
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column<OrderRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  const messageValue = useRef<any>(null)
  const [pendingArchive, setPendingArchive] = useState<OrderRow[]>([])

  const [pendingLocationData] = useState<Array<PlannedActivityGeometry[]>>([])

  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }

  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, messages.length)

  useEffect(() => {
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === selectedForce.uniqid)
    const showOrdersForAllRoles = !onlyShowMyOrders
    const myRoleMessages = myForceMessages.filter((message: MessagePlanning) => showOrdersForAllRoles || message.details.from.roleId === playerRoleId)
    if (myMessages.length === 0) {
      // initial load, just load them
      setMyMessages(myRoleMessages)
    } else if (myRoleMessages.length === 0) {
      // no messages, clear list
      setMyMessages([])
    } else {
      // Note: we have an issue here.  If the player filters their orders, then we'll have a reduced set of orders
      // Note: but, the processing below will just inject the newest message.
      // Note: I "think" we only do this following processing if the new messages is one longer than the previous list, and that
      // Note: the first message has the reference of an existing message
      const newMessage = myRoleMessages[0]
      // see if this is a new version of an existing message
      const rowAlreadyPresent = rows.find((row) => row.reference === newMessage.message.Reference)
      if (rowAlreadyPresent && rowAlreadyPresent.id !== newMessage._id) {
        // ok, it's an update
        // remove the previous instance of the updated message
        const otherMessage = rows.filter(findeIndex => !findeIndex.reference.includes(newMessage.message.Reference))
        const row = toRow(newMessage)
        // push a new row
        setRows([...otherMessage, row])
      } else {
        // first row isn't an existing one
        setMyMessages(myRoleMessages)
      }
    }
  }, [messages, selectedForce.uniqid, playerRoleId, onlyShowMyOrders])

  // useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously
  useLayoutEffect(() => {
    if (!myMessages.length) {
      return
    }

    const dataTable: OrderRow[] = myMessages.map((message) => {
      return toRow(message)
    })
    setRows(dataTable)

    const columnData = toColumn(myMessages)
    if (!columns.length || !filter) {
      setColumns(columnData)
    }
  }, [myMessages, turnFilter, filter])

  const editorValue = (val: { [property: string]: any }): void => {
    messageValue.current = val
  }

  // const editDocument = (docId: string): void => {
  //   editThisMessage && editThisMessage(docId)
  // }

  const detailPanel = ({ rowData }: { rowData: OrderRow }): any => {
    // retrieve the message & template
    const message: MessagePlanning | undefined = messages.find((value: MessagePlanning) => value.message.Reference === rowData.rawRef)
    if (!message) {
      console.error('planning message not found, id:', rowData.reference, 'messages:', messages)
    } else {
      // sort out if editable
      const myMessageInPlanning = message.details.from.roleId === playerRoleId && phase === Phase.Planning
      const adjInAdjuPhase = isUmpire && phase === Phase.Adjudication
      const canEdit = myMessageInPlanning || adjInAdjuPhase

      // check if message is being edited
      const localTemplates = allTemplates || []
      const template = localTemplates.find((value: TemplateBody) => value.title === message.details.messageType)
      if (!template) {
        console.warn('template not found for', message.details.messageType, 'templates:', allTemplates)
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
                forceId: selectedForce.uniqid,
                roleId: playerRoleId,
                iconURL: selectedForce.iconURL || selectedForce.icon || ''
              },
              messageType: message.details.messageType,
              timestamp: new Date().toISOString(),
              turnNumber: currentTurn
            }

            // special: if this is an edit from adju in adju phase, insert special note
            if (adjInAdjuPhase) {
              let privMsg = message.details.privateMessage || ''
              const roleName = selectedForce.roles.find((role) => role.roleId === playerRoleId)
              privMsg += '[Edited by ' + ((roleName && roleName.name) || playerRoleId) + ' ' + moment.utc().toISOString() + ']'
              details.privateMessage = privMsg
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
            modifyForSave={modifyForSave}
            editCallback={localEditLocation}
          />
        </>
      } else {
        return <div>Template not found for {message.details.messageType}</div>
      }
    }
  }

  const archiveConfirmed = (): void => {
    console.log('confirmed. Pending:', pendingArchive)
    if (pendingArchive) {
      const actualMessages = pendingArchive.map((row): MessagePlanning | undefined => messages.find((msg) => msg.message.Reference === row.rawRef))
      if (actualMessages.length !== pendingArchive.length) {
        console.warn('failed to find actual version of some messages', rows, actualMessages)
      }
      const foundMessaes = actualMessages.filter((msg) => msg !== undefined) as MessagePlanning[]
      const markArchived = foundMessaes.map((msg): MessagePlanning => {
        // mark as archived
        msg.details.archived = true
        return msg
      })
      console.log('Archiving:', markArchived)
      // if (markArchived.length === 0) return null
      postBackArchive && postBackArchive(markArchived)
      // TODO: submit these new messages
      setPendingArchive([])
    }
  }

  const archiveCancelledCallback = useCallback(() => setPendingArchive([]), [])
  const archiveConfirmedCallback = useCallback(() => archiveConfirmed(), [])

  const archiveSelected = (data: OrderRow | OrderRow[]): void => {
    const rows: OrderRow[] = Array.isArray(data) ? data : [data]
    console.log('archive selected', data, rows)
    setPendingArchive(rows)
  }

  const onSelectionChange = (rows: OrderRow[]): void => {
    const indices = rows.map((row: OrderRow): string => row.id)
    setSelectedOrders(indices)
  }

  const TableData = useMemo(() => {
    return <MaterialTable
      title={'Orders'}
      columns={columns}
      data={rows}
      icons={materialIcons as any}
      actions={[
        {
          icon: () => <FontAwesomeIcon title='Archive selected messages' icon={faTrashAlt} className={cx({ [styles.selected]: filter })} />,
          iconProps: filter ? { color: 'error' } : { color: 'action' },
          tooltip: isUmpire ? 'Archive messages' : 'Only umpires can archive messages',
          disabled: !isUmpire,
          isFreeAction: false,
          onClick: (_event, data): void => archiveSelected(data)
        },
        {
          icon: () => <FontAwesomeIcon title='Show filter controls' icon={filter ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: filter })} />,
          iconProps: filter ? { color: 'error' } : { color: 'action' },
          tooltip: !filter ? 'Show filter controls' : 'Hide filter controls',
          isFreeAction: true,
          onClick: (): void => setFilter(!filter)
        },
        {
          icon: () => <FontAwesomeIcon title='Only show orders created by me' icon={onlyShowMyOrders ? faUser : faUserLock} className={cx({ [styles.selected]: onlyShowMyOrders })} />,
          iconProps: onlyShowMyOrders ? { color: 'error' } : { color: 'action' },
          tooltip: onlyShowMyOrders ? 'Show all orders' : 'Only show orders created by me',
          isFreeAction: true,
          onClick: (): void => setOnlyShowMyOrders(!onlyShowMyOrders)
        }
      ]}
      options={{
        search: true,
        paging: true,
        pageSize: 20,
        pageSizeOptions: [5, 10, 15, 20, 50],
        filtering: filter,
        selection: true,
        rowStyle: { fontSize: '80%' }
      }}
      onSelectionChange={onSelectionChange}
      detailPanel={detailPanel}
    />
  }, [rows, filter])

  return (
    <div className={styles['messages-list']} style={{ zIndex: 9 }}>
      {pendingArchive.length > 0 &&
        <CustomDialog
          isOpen={pendingArchive.length > 0}
          header={'Archive orders'}
          cancelBtnText={'Cancel'}
          saveBtnText={'Archive'}
          onClose={archiveCancelledCallback}
          onSave={archiveConfirmedCallback}
        >
          <>Are you sure you wish to archive {pendingArchive.length} sets of orders?</>
        </CustomDialog>
      }
      {TableData}
    </div>
  )
}

export default PlanningMessagesList
