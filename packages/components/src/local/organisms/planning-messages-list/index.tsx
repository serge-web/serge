import { faFilter, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UNSENT_SELECT_BY_DEFAULT_VALUE } from '@serge/config'
import { MessageDetails, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningMessageStructure, PlanningMessageStructureCore, TemplateBody } from '@serge/custom-types'
import cx from 'classnames'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import { arrToDict, collateActivities } from '../planning-assets/helpers/collate-assets'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { collapseLocation, expandLocation } from './helpers/collapse-location'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'
const PLANNING_MESSAGE_LIST = 'PLANNING_MESSAGE_LIST'
export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages, allTemplates, isUmpire, gameDate, customiseTemplate,
  playerForceId, playerRoleId, selectedOrders, postBack, setSelectedOrders,
  confirmCancel, channel, selectedForce, selectedRoleName, currentTurn, turnFilter,
  editLocation, forcePlanningActivities, onDetailPanelOpen, onDetailPanelClose,
  saveCachedPlanningMessageValue, getCachedPlanningMessageValue, clearCachedPlanningMessage
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const tableRef: any = useRef()
  const messageValue = useRef<any>(null)
  const localName = `${PLANNING_MESSAGE_LIST}-${UNSENT_SELECT_BY_DEFAULT_VALUE}`
  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }

  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, messages.length)

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  const [editorDefaultId, setEditorDefaultId] = useState<string>()
  useEffect(() => {
    const showOrdersForAllRoles = !onlyShowMyOrders
    const myForceMessages = messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId)
    const myRoleMessages = myForceMessages.filter((message: MessagePlanning) => showOrdersForAllRoles || message.details.from.roleId === playerRoleId)
    setMyMessages(myRoleMessages)
  }, [messages, playerForceId, onlyShowMyOrders, playerRoleId])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  const trimActivity = (forceId: string, activity?: string): string => {
    if (!activity) {
      return 'N/A'
    } else {
      const len = forceId.length
      return activity.slice(len + 1)
    }
  }

  useEffect(() => {
    const roles: string[] = []
    const { detailPanel } = tableRef.current.props
    const handleShowDetailPanel = detailPanel
    const CachedDefaultValue = getCachedPlanningMessageValue && getCachedPlanningMessageValue(localName)
    setEditorDefaultId(CachedDefaultValue)

    const dataTable: OrderRow[] = myMessages.map((message) => {
      const author = message.details.from.roleName
      if (!roles.includes(author)) {
        roles.push(author)
      }
      const plan = message.message as PlanningMessageStructureCore

      const row: OrderRow = {
        id: message._id,
        reference: message.message.Reference + ' (Turn ' + message.details.turnNumber + ')',
        title: plan.title,
        role: author,
        activity: trimActivity(playerForceId, plan.activity),
        startDate: shortDate(plan.startDate),
        endDate: shortDate(plan.endDate),
        tableData: {
          showDetailPanel: message._id === CachedDefaultValue ? handleShowDetailPanel : undefined
        }
      }
      return row
    })
    setRows(dataTable)

    // fix unit-test for MaterialTable
    const jestWorkerId = process.env.JEST_WORKER_ID
    // end

    const activities = collateActivities(myMessages)
    const trimmedActivities = activities.map((item) => trimActivity(playerForceId, item))

    const smallPadding: React.CSSProperties = {
      paddingLeft: '10px',
      paddingRight: '10px'
    }

    const narrowCell: React.CSSProperties = {
      ...smallPadding, width: '80px'
    }
    const mediumCell: React.CSSProperties = {
      ...smallPadding, width: '120px'
    }

    const columnData: Column[] = jestWorkerId ? [] : [
      { title: 'Reference', field: 'reference', cellStyle: mediumCell, headerStyle: mediumCell },
      { title: 'Author', field: 'role', lookup: arrToDict(roles), cellStyle: narrowCell, headerStyle: narrowCell },
      { title: 'Title', field: 'title', cellStyle: smallPadding, headerStyle: smallPadding },
      { title: 'Activity', field: 'activity', lookup: arrToDict(trimmedActivities), cellStyle: smallPadding, headerStyle: smallPadding },
      { title: 'Start Date', field: 'startDate', cellStyle: narrowCell, headerStyle: narrowCell },
      { title: 'Finish Date', field: 'endDate', cellStyle: narrowCell, headerStyle: narrowCell }
    ]

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
            clearCachedPlanningMessage && clearCachedPlanningMessage([localName])
            messageValue.current = ''
          }
        }

        const canEdit = message.details.from.roleId === playerRoleId

        const localEditLocation = (): void => {
          if (message.message.location) {
            const localCallback = (newValue: unknown): void => {
              pendingLocationData.push(newValue as PlannedActivityGeometry[])
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

        saveCachedPlanningMessageValue && saveCachedPlanningMessageValue(message._id, localName)
        const editorRightValue = message._id === editorDefaultId ? undefined : message.message
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
        tableRef={tableRef}
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
