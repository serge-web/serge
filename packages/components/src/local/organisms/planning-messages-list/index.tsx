import { faSearchMinus, faSearchPlus, faTrashAlt, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Action, Column, MTableBody } from '@material-table/core'
import { Phase, SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { MessageDetails, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningMessageStructure, TemplateBody } from '@serge/custom-types'
import cx from 'classnames'
import { isEqual } from 'lodash'
import moment from 'moment'
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CustomDialog from '../../atoms/custom-dialog'
import JsonEditor from '../../molecules/json-editor'
import CustomFilterRow from '../planning-assets/helpers/custom-filter-row'
import { TAB_MY_ORDERS } from '../support-panel/constants'
import { getIsFilterState } from '../support-panel/helpers/caching-utils'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { collapseLocation } from './helpers/collapse-location'
import { toColumn, toRow } from './helpers/genData'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages, allTemplates, isUmpire, customiseTemplate,
  playerRoleId, selectedOrders, postBack, postBackArchive, setSelectedOrders,
  confirmCancel, channel, selectedForce, selectedRoleName, currentTurn, turnFilter,
  editLocation, forcePlanningActivities, onDetailPanelOpen, onDetailPanelClose,
  modifyForSave, phase, onSupportPanelLayoutChange
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column<OrderRow>[]>([])
  const [filter, setFilter] = useState<boolean>(true)
  const [initialised, setInitialised] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  const messageValue = useRef<any>(null)
  const [pendingArchive, setPendingArchive] = useState<OrderRow[]>([])
  const [toolbarActions, setToolbarActions] = useState<Action<OrderRow>[]>([])
  const [visibleRows, setVisibleRows] = useState<OrderRow[]>([])

  const [pendingLocationData] = useState<Array<PlannedActivityGeometry[]>>([])

  const [pendingMessages, setPendingMessages] = useState<MessagePlanning[]>([])
  const [messageBeingEdited, setMessageBeingEdited] = useState<boolean>(false)

  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }
  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, messages.length)

  useEffect(() => {
    const isFilterState = getIsFilterState()
    if (isFilterState[TAB_MY_ORDERS] && isFilterState[TAB_MY_ORDERS] !== filter) {
      setTimeout(() => {
        setFilter(isFilterState[TAB_MY_ORDERS])
      })
    }
  }, [])

  useEffect(() => {
    if (pendingMessages.length) {
      // check there are no rows open
      if (!messageBeingEdited) {
        console.log('PlanningMessageList = update pending', pendingMessages.length)
        setMyMessages(pendingMessages)
        setPendingMessages([])
      } else {
        console.log('PlanningMessageList - not doing edit, message being edited')
      }
    }
  }, [pendingMessages, visibleRows, messageBeingEdited])

  useEffect(() => {
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === selectedForce.uniqid)
    const showOrdersForAllRoles = !onlyShowMyOrders
    const myRoleMessages = myForceMessages.filter((message: MessagePlanning) => showOrdersForAllRoles || message.details.from.roleId === playerRoleId)
    if (myMessages.length === 0) {
      console.log('PlanningMessageList = update 1. Initialise list')
      // initial load, just load them
      setMyMessages(myRoleMessages)
    } else if (myRoleMessages.length === 0) {
      console.log('PlanningMessageList = update 2. Clear list')
      // no messages, clear list
      setMyMessages([])
    } else {
      // cache changes if a message is currently being edited
      if (messageBeingEdited) {
        console.log('PlanningMessageList = update 3 - store pending messages', myRoleMessages.length)
        setPendingMessages(myRoleMessages)
      } else {
        console.log('PlanningMessageList = update 4. Update list')
        setMyMessages(myRoleMessages)
      }
    }
  }, [messages, selectedForce.uniqid, playerRoleId, onlyShowMyOrders])

  useEffect(() => {
    const res: Action<OrderRow>[] = [
      {
        icon: () => <FontAwesomeIcon title='Only show orders created by me' icon={onlyShowMyOrders ? faUser : faUserLock} className={cx({ [styles.selected]: onlyShowMyOrders })} />,
        iconProps: onlyShowMyOrders ? { color: 'error' } : { color: 'action' },
        tooltip: onlyShowMyOrders ? 'Show all orders' : 'Only show orders created by me',
        isFreeAction: true,
        onClick: (): void => setOnlyShowMyOrders(!onlyShowMyOrders)
      },
      {
        icon: () => <FontAwesomeIcon title='Show filter controls' icon={filter ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: filter })} />,
        iconProps: filter ? { color: 'error' } : { color: 'action' },
        tooltip: !filter ? 'Show filter controls' : 'Hide filter controls',
        isFreeAction: true,
        onClick: (): void => {
          setFilter(!filter)
          const isFilterState = getIsFilterState()
          isFilterState[TAB_MY_ORDERS] = !filter
          onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.IS_FILTER, JSON.stringify(isFilterState))
        }
      }
    ]
    if (isUmpire) {
      // also provide the `achive` button
      res.unshift({
        icon: () => <FontAwesomeIcon title='Archive selected messages' icon={faTrashAlt} className={cx({ [styles.selected]: filter })} />,
        iconProps: { color: 'action' },
        tooltip: 'Archive messages',
        isFreeAction: false,
        onClick: (_event: any, data: OrderRow | OrderRow[]): void => archiveSelected(data)
      })
    }
    setToolbarActions(res)
  }, [isUmpire, filter, onlyShowMyOrders])

  // useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously
  useLayoutEffect(() => {
    console.log('PlanningMessageList update messages:', myMessages.length, myMessages.length && myMessages[0].message.title)
    const dataTable: OrderRow[] = myMessages.map((message) => {
      return toRow(message)
    })
    setRows(dataTable)

    if (!columns.length || !filter || !initialised) {
      setInitialised(true)
      const columnData = toColumn(myMessages)
      setColumns(columnData)
    }
  }, [turnFilter, filter, myMessages])

  const editorValue = (val: { [property: string]: any }): void => {
    if (!isEqual(val, messageValue.current)) {
      // new value is different from stored one. Record message as being edited.
      setMessageBeingEdited(true)
    }
    messageValue.current = val
  }

  const onLocalDetailPanelClose = (rowData: OrderRow) => {
    setMessageBeingEdited(false)
    onDetailPanelClose && onDetailPanelClose(rowData)
  }

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
            // messageValue.current = ''

            // this document is being saved. Cause page update without checking for open rows,
            // so that we display updated document
            console.log('PlanningMessageList = about to clear only update flag')
            setMessageBeingEdited(false)
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
              onLocalDetailPanelClose(rowData)
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

  /*eslint-disable */
  const archiveConfirmed = (): void => {
    if (pendingArchive) {
      const actualMessages = pendingArchive.map((row): MessagePlanning | undefined => messages.find((msg) => msg.message.Reference === row.rawRef))
      if (actualMessages.length !== pendingArchive.length) {
        console.warn('failed to find actual version of some messages', rows, actualMessages)
      }
      const foundMessaes = actualMessages.filter((msg) => msg !== undefined) as MessagePlanning[]
      const markArchived = foundMessaes.map((msg, index): MessagePlanning => {
        msg.details.archived = true

        const archivedMessage = {
          ...msg,
          _id: new Date().toISOString() + index,
          _rev: undefined
        }

        return archivedMessage
      })
      postBackArchive && postBackArchive(markArchived)
      setPendingArchive([])
    }
  }

  const archiveCancelled = () => setPendingArchive([])
  /* eslint-enable */

  const archiveSelected = (data: OrderRow | OrderRow[]): void => {
    const rows: OrderRow[] = Array.isArray(data) ? data : [data]
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
      actions={toolbarActions}
      options={{
        search: true,
        paging: true,
        pageSize: 20,
        pageSizeOptions: [20, 50, 100],
        filtering: filter,
        selection: true,
        rowStyle: { fontSize: '80%' }
      }}
      onSelectionChange={onSelectionChange}
      detailPanel={detailPanel}
      components={{
        Body: (props): React.ReactElement => {
          if (props.columns.length) {
            setTimeout(() => {
              setVisibleRows(props.data)
            })
          }
          return (<MTableBody
            {...props}
          />)
        },
        FilterRow: props => <CustomFilterRow {...props} forces={[]} onSupportPanelLayoutChange={onSupportPanelLayoutChange} cacheKey={TAB_MY_ORDERS} />
      }}
    />
  }, [rows, filter, toolbarActions, onlyShowMyOrders])

  return (
    <div className={styles['messages-list']} style={{ zIndex: 9 }}>
      {pendingArchive.length > 0 &&
        <CustomDialog
          isOpen={pendingArchive.length > 0}
          header={'Archive orders'}
          cancelBtnText={'Cancel'}
          saveBtnText={'Archive'}
          /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
          onClose={archiveCancelled}
          onSave={archiveConfirmed}
          /* deepscan-enable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
        >
          <>Are you sure you wish to archive {pendingArchive.length} sets of orders?</>
        </CustomDialog>
      }
      {TableData}
    </div>
  )
}

export default PlanningMessagesList
