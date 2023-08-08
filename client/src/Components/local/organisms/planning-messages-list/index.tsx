import { faSearchMinus, faMedkit, faEye, faEyeSlash, faGlobe, faSearchPlus, faTable, faTrashAlt, faUser, faUserLock, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Action, Column, MTableBody } from '@material-table/core'
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { Phase, SUPPORT_PANEL_LAYOUT } from 'src/config'
import { ForceData, MessageDetails, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlanningMessageStructure, TemplateBody } from 'src/custom-types'
import { findForceAndAsset } from 'src/Helpers'
import cx from 'classnames'
import _, { cloneDeep, isEqual } from 'lodash'
import moment from 'moment'
import React, { CSSProperties, Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CustomDialog from '../../atoms/custom-dialog'
import JsonEditor from '../../molecules/json-editor'
import { arrayToTable } from '../adjudication-messages-list'
import CustomFilterRow from '../planning-assets/helpers/custom-filter-row'
import { TAB_MY_ORDERS } from '../support-panel/constants'
import { getFilterApplied, getIsFilterState } from '../support-panel/helpers/caching-utils'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { collapseLocation } from './helpers/collapse-location'
import { collateOutcomeDetails } from './helpers/collate-outcome-details'
import { needToUpdate, toColumn, toRow } from './helpers/genData'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  planningMessages, interactionMessages, allTemplates, isUmpire, customiseTemplate,
  playerRoleId, selectedOrders, postBack, postBackArchive, setSelectedOrders, allForces, forceColors,
  confirmCancel, channel, selectedForce, selectedRoleName, currentTurn, turnFilter, platformTypes,
  editLocation, forcePlanningActivities, onDetailPanelOpen, onDetailPanelClose,
  modifyForSave, phase, onSupportPanelLayoutChange, getSupportPanelState, copyMessage
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column<OrderRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [initialised, setInitialised] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const [myPlanningMessages, setMyPlanningMessages] = useState<MessagePlanning[]>([])
  const messageValue = useRef<any>(null)
  const tableRef = useRef<any>()
  const [pendingArchive, setPendingArchive] = useState<OrderRow[]>([])
  const [pendingExclude, setPendingExclude] = useState<OrderRow[]>([])
  const [toolbarActions, setToolbarActions] = useState<Action<OrderRow>[]>([])
  const [visibleRows, setVisibleRows] = useState<OrderRow[]>([])

  const [pendingLocationData] = useState<Array<PlannedActivityGeometry[]>>([])

  const [pendingMessages, setPendingMessages] = useState<MessagePlanning[]>([])
  const [messageBeingEdited, setMessageBeingEdited] = useState<boolean>(false)

  const [countOfSelectedPlans, setCountOfSelectedPlans] = useState<number>(0)
  const [dialogMessage, setDialogMessage] = useState<React.ReactElement | undefined>()
  const [showTurnSummaryTable, setShowTurnSummaryTable] = useState<boolean>(false)
  const [hiddenColumnChanges, setHiddenColumnChanges] = useState<boolean>(false)

  const currentColumnsData = useRef<Column<OrderRow>[]>([])

  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }
  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders, planningMessages.length)

  const panelState = useMemo(() => getSupportPanelState(), [])

  useEffect(() => {
    if (showTurnSummaryTable) {
      interface BaseEntry {
        Name: string
        Turn: number
      }
      interface HealthEntry extends BaseEntry {
        Health: string
        C4: string
        orders?: string
        activity?: string
      }
      interface MovementEntry extends BaseEntry {
        Location: string
        orders?: string
        activity?: string
      }
      const myHealthList: HealthEntry[] = []
      const oppHealthList: HealthEntry[] = []
      const myMovementList: MovementEntry[] = []
      const myFriendlyForces = selectedForce.uniqid === 'f-red' ? ['f-red'] : ['f-blue', 'f-green']

      // filter for interaction messages from previous turn
      const lastTurnInteractions = interactionMessages.filter((msg) => {
        return msg.details.turnNumber >= currentTurn - 1
      })

      lastTurnInteractions.forEach((msg) => {
        if (msg.message.healthOutcomes) {
          msg.message.healthOutcomes.forEach((outcome) => {
            const assetId = outcome.asset
            const asset = findForceAndAsset(allForces, assetId)
            if (asset) {
              // collate data
              const entry: HealthEntry = {
                Name: asset.asset.name,
                Turn: msg.details.turnNumber,
                Health: '' + outcome.health,
                C4: outcome.c4
              }
              if (isUmpire || myFriendlyForces.includes(asset.force.uniqid)) {
                myHealthList.push(entry)
              } else {
                oppHealthList.push(entry)
              }
            }
          })
        }
        if (msg.message.locationOutcomes) {
          const formatLocation = (val: number): string => {
            return '' + Math.floor(val * 1000) / 1000
          }
          msg.message.locationOutcomes.forEach((outcome) => {
            const assetId = outcome.asset
            const asset = findForceAndAsset(allForces, assetId)
            if (asset) {
              if (myFriendlyForces.includes(asset.force.uniqid)) {
                // collate data
                const loc = outcome.location
                if (Array.isArray(loc)) {
                  const entry: MovementEntry = {
                    Name: asset.asset.name,
                    Turn: msg.details.turnNumber,
                    Location: '[' + formatLocation(loc[0]) + ', ' + formatLocation(loc[1]) + ']'
                  }
                  myMovementList.push(entry)
                }
              }
            }
          })
        }
      })
      const sortAndConvert = (data: Array<HealthEntry | MovementEntry>): React.ReactElement => {
        // sort the array
        const sorted = _.sortBy(data, (item) => item.Name)
        const map = sorted.map((item): Record<string, any> => {
          const objAny = item as any
          if (objAny.Location) {
            const move = item as MovementEntry
            return {
              Name: item.Name,
              Turn: item.Turn,
              Location: move.Location
            }
          } else {
            const health = item as HealthEntry
            return {
              Name: item.Name,
              Turn: item.Turn,
              Health: health.Health,
              C4: health.C4
            }
          }
        })
        return arrayToTable(map)
      }
      setDialogMessage(
        <>Adjudication outcomes in selected turn(s)<br />
          {myHealthList.length > 0 && <span>Friendly Force Health Changes:{sortAndConvert(myHealthList)}</span>}
          {oppHealthList.length > 0 && <span>Opp Force Health Changes:{sortAndConvert(oppHealthList)}</span>}
          {myMovementList.length > 0 && <span>Movement changes:{sortAndConvert(myMovementList)}</span>}</>)
      setShowTurnSummaryTable(false)
    }
  }, [showTurnSummaryTable])

  useEffect(() => {
    const isFilterState = getIsFilterState(panelState)
    if (isFilterState[TAB_MY_ORDERS] && isFilterState[TAB_MY_ORDERS] !== filter) {
      setTimeout(() => {
        setFilter(isFilterState[TAB_MY_ORDERS])
      })
    }
  }, [])

  useEffect(() => {
    const selectedCount = visibleRows.filter((item) => {
      return item.tableData && item.tableData.checked
    }).length
    setCountOfSelectedPlans(selectedCount)
  }, [visibleRows])

  useEffect(() => {
    if (pendingMessages.length) {
      // check there are no rows open
      if (!messageBeingEdited) {
        console.log('PlanningMessageList = update pending', pendingMessages.length)
        setMyPlanningMessages(pendingMessages)
        setPendingMessages([])
      } else {
        console.log('PlanningMessageList - not doing edit, message being edited')
      }
    }
  }, [pendingMessages, visibleRows, messageBeingEdited])

  useEffect(() => {
    const myForceMessages = planningMessages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === selectedForce.uniqid)
    const showOrdersForAllRoles = !onlyShowMyOrders
    const myRoleMessages = myForceMessages.filter((message: MessagePlanning) => showOrdersForAllRoles || message.details.from.roleId === playerRoleId)
    const checkOpenRows = visibleRows.filter((item) => {
      const showPanel: any = item.tableData
      return item.tableData && showPanel.showDetailPanel
    })
    if (myPlanningMessages.length === 0) {
      console.log('PlanningMessageList = update 1. Initialise list')
      // initial load, just load them
      setMyPlanningMessages(myRoleMessages)
    } else if (myRoleMessages.length === 0) {
      console.log('PlanningMessageList = update 2. Clear list')
      // no messages, clear list
      setMyPlanningMessages([])
    } else {
      // cache changes if a message is currently being edited
      if (messageBeingEdited && !!checkOpenRows.length) {
        console.log('PlanningMessageList = update 3 - store pending messages', myRoleMessages.length)
        setPendingMessages(myRoleMessages)
      } else {
        console.log('PlanningMessageList = update 4. Update list')
        setMyPlanningMessages(myRoleMessages)
      }
    }
  }, [planningMessages, selectedForce.uniqid, playerRoleId, onlyShowMyOrders])

  const closeDialogCallback = useCallback(() => setDialogMessage(undefined), [])

  useEffect(() => {
    const res: Action<OrderRow>[] = [
      {
        icon: () => <FontAwesomeIcon title='View summary' icon={faTable} className={cx({ [styles.selected]: true })} />,
        iconProps: { color: 'action' },
        tooltip: 'Show summary of outcomes of previous turn',
        disabled: false,
        isFreeAction: true,
        onClick: (): void => setShowTurnSummaryTable(true)
      },
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
          const isFilterState = getIsFilterState(panelState)
          isFilterState[TAB_MY_ORDERS] = !filter
          onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.IS_FILTER, JSON.stringify(isFilterState))
          // reset filters applied when toggle off filter state
          if (filter) {
            const filtersApplied = getFilterApplied(panelState)
            delete filtersApplied[TAB_MY_ORDERS]
            onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED, JSON.stringify(filtersApplied))
          }
        }
      },
      {
        icon: () => <FontAwesomeIcon title='Copy Message' icon={faCopy} />,
        iconProps: { color: 'action' },
        tooltip: countOfSelectedPlans === 1 ? 'Copy Message' : 'Only a single set of orders can be copied',
        disabled: countOfSelectedPlans !== 1,
        isFreeAction: false,
        onClick: (_event: any, data: OrderRow | OrderRow[]): void => localCopyMessage(data)
      }
    ]
    if (isUmpire) {
      // also provide the `archive` button
      res.unshift({
        icon: () => <FontAwesomeIcon title='Archive selected messages' icon={faTrashAlt} className={cx({ [styles.selected]: filter })} />,
        iconProps: { color: 'action' },
        tooltip: 'Archive messages',
        isFreeAction: false,
        onClick: (_event: any, data: OrderRow | OrderRow[]): void => archiveSelected(data)
      })
      // also provide the `skip adjudication` button
      res.unshift({
        icon: () => <FontAwesomeIcon title='Exclude orders from adjudication' icon={faEyeSlash} className={cx({ [styles.selected]: filter })} />,
        iconProps: { color: 'action' },
        tooltip: 'Exclude orders from addjudication',
        isFreeAction: false,
        onClick: (_event: any, data: OrderRow | OrderRow[]): void => excludeSelected(data)
      })
    }
    setToolbarActions(res)
  }, [isUmpire, filter, onlyShowMyOrders, countOfSelectedPlans])

  // useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously
  useLayoutEffect(() => {
    // console.log('PlanningMessageList update messages:', myPlanningMessages.length, myPlanningMessages.length && myPlanningMessages[0].message.title)
    const dataTable: OrderRow[] = myPlanningMessages.map((message) => {
      return toRow(message, allForces)
    })
    setRows(dataTable)

    const columnData = toColumn(myPlanningMessages, isUmpire)
    const needUpdate = needToUpdate(currentColumnsData.current, columnData)

    if (!columns.length || !filter || !initialised || needUpdate) {
      setInitialised(true)
      setColumns(columnData)
      currentColumnsData.current = columnData
    }
  }, [turnFilter, filter, myPlanningMessages])

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

  const iconFor = (nature: string): any => {
    switch (nature) {
      case 'Health': return faMedkit
      case 'Movement': return faGlobe
      case 'Perceptiohn':
      default: return faEye
    }
  }

  const outcomesForPlan = (plan: MessagePlanning, forceId: ForceData['uniqid'], isUmpire: boolean, forces: ForceData[]): React.ReactElement | undefined => {
    // find interactions that relate to these messages
    const planId = plan._id
    const myInteractionMessages = interactionMessages.filter((msg) => {
      const inter = msg.details.interaction
      if (inter) {
        const planIds = inter.orders2 ? [inter.orders1, inter.orders2] : [inter.orders1]
        return planIds.includes(planId)
      }
      return false
    })

    const details = collateOutcomeDetails(plan, myInteractionMessages, isUmpire, forceId, forces, forceColors, platformTypes)
    const specialFields = ['name', 'location', 'nature']
    if (details !== undefined) {
      const usefulDetails = details.interactions.filter((detail) => {
        const narr = detail.perForceNarratives && detail.perForceNarratives.length > 0
        const assets = detail.changes && detail.changes.length > 0
        return narr || assets
      })
      return <Card key={plan._id}>
        <CardContent key={plan._id + 'content'}>
          {usefulDetails.map((summ) =>
            <Fragment key={summ.reference}>
              <Typography key={summ.reference} variant="h6">Adjudication:<b>{summ.reference}</b> Time: <b>{summ.time}</b></Typography>
              {summ.perForceNarratives && summ.perForceNarratives.length > 0 &&
                <>
                  <Typography key={'heading'} variant="h6">Narratives</Typography>
                  <Typography key={'content'}>
                    <ul>
                      {summ.perForceNarratives.map((narr, index) =>
                        <li key={index}><b>{narr.force}</b> {narr.summary}</li>
                      )}
                    </ul>
                  </Typography>
                </>
              }
              {summ.changes &&
                <Typography key={summ.reference + '-changes'} component={'span'} >
                  <TableContainer>
                    <Table size="small" >
                      <TableHead>
                        <TableRow key='header'>
                          <TableCell key={1}>Type</TableCell>
                          <TableCell key={2}>Asset</TableCell>
                          <TableCell key={3}>Details</TableCell>
                          <TableCell key={4}>Location</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{summ.changes.map((change, index) =>
                        <TableRow key={index}>
                          <TableCell key={1}> <FontAwesomeIcon size='lg' title='Copy Message' icon={iconFor(change.nature)} className={cx({ [styles.selected]: filter })} /></TableCell>
                          <TableCell key={2}>{change.name}</TableCell>
                          <TableCell key={3}>{Object.keys(change).filter((key) => !specialFields.includes(key)).map((key, index) => <Fragment key={index}><span>{key}:</span> <b>{change[key]}</b>, </Fragment>)}</TableCell>
                          <TableCell key={4}>{change.location && 'Updated'}</TableCell>
                        </TableRow>
                      )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Typography>
              }
            </Fragment>)}
        </CardContent>
      </Card>
    } else {
      return undefined
    }
  }

  // console.table(myPlanningMessages.map((plan) => {
  // const filterList = (outcomes: CoreOutcome[]) => {
  //   return outcomes.length > 0
  // }
  //   const inters = myInteractionMessages.filter((inter) => {
  //     const details = inter.details.interaction
  //     return details && (details.orders1 === plan._id || details.orders2 === plan._id)
  //   })
  //   return {
  //     plan: plan.message.Reference,
  //     narratives: inters.filter((inter) => inter.message.perForceNarratives && inter.message.perForceNarratives.length > 0).map((aa) => aa.message.Reference).join(', '),
  //     health: inters.filter((inter) => filterList(inter.message.healthOutcomes)).map((aa) => aa.message.Reference).join(', '),
  //     perception: inters.filter((inter) => filterList(inter.message.perceptionOutcomes)).map((aa) => aa.message.Reference).join(', '),
  //     movement: inters.filter((inter) => filterList(inter.message.locationOutcomes)).map((aa) => aa.message.Reference).join(', '),
  //   }
  // }))

  const detailPanel = ({ rowData }: { rowData: OrderRow }): any => {
    // retrieve the message & template
    const message: MessagePlanning | undefined = myPlanningMessages.find((value: MessagePlanning) => value.message.Reference === rowData.rawRef)
    if (!message) {
      console.error('planning message not found, id:', rowData.rawRef, 'planningMessages:', planningMessages)
    } else {
      // sort out if editable
      // const myMessageInPlanning = message.details.from.roleId === playerRoleId && phase === Phase.Planning
      const myForceMessageInPlanning = message.details.from.forceId === selectedForce.uniqid && phase === Phase.Planning
      const adjInAdjuPhase = isUmpire && phase === Phase.Adjudication
      const canEdit = myForceMessageInPlanning || adjInAdjuPhase

      // check if message is being edited
      const localTemplates = allTemplates || []
      const template = localTemplates.find((value: TemplateBody) => value.title === message.details.messageType)
      if (!template) {
        console.warn('template not found for', message.details.messageType, 'templates:', allTemplates)
      }
      if (message && template) {
        const saveMessage = () => {
          if (messageValue.current) {
            // note if this player is from umpire force they may be tidying a set of orders.
            // if so, keep the from field
            const fromField = selectedForce.umpire ? message.details.from : {
              force: selectedForce.name,
              forceColor: selectedForce.color,
              roleName: selectedRoleName,
              forceId: selectedForce.uniqid,
              roleId: playerRoleId,
              iconURL: selectedForce.iconURL || selectedForce.icon || ''
            }
            const details: MessageDetails = {
              channel: channel.uniqid,
              from: fromField,
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
            const rowTable: any = rowData.tableData
            const rowIndex: number = rowTable.index
            tableRef.current.onToggleDetailPanel([rowIndex], tableRef.current.props.detailPanel === undefined)
          }
        }

        const onCancelEdit = () => {
          setMessageBeingEdited(false)
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

        const editorRightValue = message.message ? cloneDeep(message.message) : undefined

        const outcomesFor = outcomesForPlan(message, selectedForce.uniqid, isUmpire, allForces)

        return <>
          {outcomesFor}

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
            onCancelEdit={onCancelEdit}
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
      const actualMessages = pendingArchive.map((row): MessagePlanning | undefined => planningMessages.find((msg) => msg.message.Reference === row.rawRef))
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

  const excludeConfirmed = (): void => {
    if (pendingExclude) {
      const actualMessages = pendingExclude.map((row): MessagePlanning | undefined => planningMessages.find((msg) => msg.message.Reference === row.rawRef))
      if (actualMessages.length !== pendingExclude.length) {
        console.warn('failed to find actual version of some messages', rows, actualMessages)
      }
      const foundMessaes = actualMessages.filter((msg) => msg !== undefined) as MessagePlanning[]
      const markExcluded = foundMessaes.map((msg, index): MessagePlanning => {
        msg.details.excluded = true

        const archivedMessage = {
          ...msg,
          _id: new Date().toISOString() + index,
          _rev: undefined
        }

        return archivedMessage
      })
      postBackArchive && postBackArchive(markExcluded)
      setPendingExclude([])
    }
  }

  const excludeCancelled = () => setPendingExclude([])

  /* eslint-enable */

  const archiveSelected = (data: OrderRow | OrderRow[]): void => {
    const rows: OrderRow[] = Array.isArray(data) ? data : [data]
    setPendingArchive(rows)
  }

  const excludeSelected = (data: OrderRow | OrderRow[]): void => {
    const rows: OrderRow[] = Array.isArray(data) ? data : [data]
    setPendingExclude(rows)
  }

  const localCopyMessage = (data: OrderRow | OrderRow[]): void => {
    if (Array.isArray(data)) {
      const item = data as OrderRow[]
      copyMessage && copyMessage(item[0].id)
    }
  }

  const onSelectionChange = (rows: OrderRow[]): void => {
    const indices = rows.map((row: OrderRow): string => row.id)
    setSelectedOrders(indices)
  }

  const TableData = useMemo(() => {
    return <MaterialTable
      title={'Orders'}
      columns={columns}
      tableRef={tableRef}
      data={rows}
      icons={materialIcons as any}
      actions={toolbarActions}
      options={{
        search: true,
        paging: true,
        pageSize: 20,
        emptyRowsWhenPaging: false,
        pageSizeOptions: [20, 50, 100],
        filtering: filter,
        selection: true,
        columnsButton: true,
        rowStyle: { fontSize: '80%' }
      }}
      onSelectionChange={onSelectionChange}
      onChangeColumnHidden={() => setHiddenColumnChanges(!hiddenColumnChanges)}
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
        FilterRow: props => <CustomFilterRow
          {...props}
          onSupportPanelLayoutChange={onSupportPanelLayoutChange}
          getSupportPanelState={getSupportPanelState}
          cacheKey={TAB_MY_ORDERS}
        />
      }}
    />
  }, [rows, filter, toolbarActions, onlyShowMyOrders, columns, hiddenColumnChanges])

  // linter warned that this object was being created on each render, so use a useMemo
  const eventList = useMemo(() => {
    const eventList: CSSProperties = {
      height: '700px',
      overflowY: 'scroll'
    } as CSSProperties
    return eventList
  }, [currentTurn])

  return (
    <div className={styles['messages-list']} style={{ zIndex: 9 }}>
      {dialogMessage !== undefined &&
        <CustomDialog
          isOpen={dialogMessage !== undefined}
          header={'Review outcomes'}
          cancelBtnText={'OK'}
          onClose={closeDialogCallback}
          bodyStyle={eventList}
        >
          <>{dialogMessage}</>
        </CustomDialog>
      }
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
      {pendingExclude.length > 0 &&
        <CustomDialog
          isOpen={pendingExclude.length > 0}
          header={'Exclude orders'}
          cancelBtnText={'Cancel'}
          saveBtnText={'Exclude'}
          /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
          onClose={excludeCancelled}
          onSave={excludeConfirmed}
        /* deepscan-enable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
        >
          <>Are you sure you wish to exclude {pendingExclude.length} sets of orders from the interaction generator?</>
        </CustomDialog>
      }
      {TableData}
    </div>
  )
}

export default PlanningMessagesList