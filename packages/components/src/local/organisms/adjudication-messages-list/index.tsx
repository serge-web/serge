import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column } from '@material-table/core'
import { Box, Chip, Table } from '@material-ui/core'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { Asset, ForceData, InteractionDetails, LocationOutcome, MessageAdjudicationOutcomes, MessageDetails, MessageInteraction, MessagePlanning, MessageStructure } from '@serge/custom-types'
import { findAsset, forceColors, ForceStyle, incrementGameTime } from '@serge/helpers'
import _ from 'lodash'
import moment from 'moment'
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import Button from '../../atoms/button'
import CustomDialog from '../../atoms/custom-dialog'
import JsonEditor from '../../molecules/json-editor'
import { getColumnSummary } from '../planning-assets/helpers/collate-assets'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { SHOW_ALL_TURNS } from '../support-panel/helpers/TurnFilter'
import { collateInteraction, InteractionData, updateAssets, updateForces, updatePlatformTypes } from './helpers/collate-interaction'
import { getNextInteraction2, InteractionResults } from './helpers/getNextInteraction'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'

type ForceMessages = {
  forceName: string
  messages: MessagePlanning[]
}

type ManualInteractionData = {
  forceMessages: ForceMessages[]
  otherAssets: Asset[]
}

type ManualInteractionResults = {
  order1: MessagePlanning
  order2?: MessagePlanning
  otherAssets: Asset[]
  startDate: string // isoString
  endDate: string
}

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, interactionMessages, planningMessages, template, gameDate,
  customiseTemplate, playerRoleId, forcePlanningActivities, handleAdjudication,
  turnFilter, platformTypes, onDetailPanelOpen, onDetailPanelClose, mapPostBack,
  gameTurnLength,
  onLocationEditorLoaded
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column<AdjudicationRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const [dialogMessage, setDialogMessage] = useState<string>('')

  const [filteredInteractions, setFilteredInteractions] = useState<MessageInteraction[]>([])
  const [filteredInteractionsRow, setFilteredInteractionsRow] = useState<MessageInteraction[]>([])

  const [filteredPlans, setFilteredPlans] = useState<MessagePlanning[]>([])

  const forceStyles: Array<ForceStyle> = forceColors(forces, true)

  const currentAdjudication = useRef<MessageAdjudicationOutcomes | string>('')

  const [currentTime, setCurrentTime] = useState<string>('pending')

  const [manualDialog, setManualDialog] = useState<ManualInteractionData | undefined>(undefined)

  const localDetailPanelOpen = (row: AdjudicationRow): void => {
    onDetailPanelOpen && onDetailPanelOpen(row)
  }

  const localDetailPanelClose = (row: AdjudicationRow): void => {
    onDetailPanelClose && onDetailPanelClose(row)
  }

  // compact date display
  const shortDate = (date: string): string => {
   return moment.utc(date).format('MMM DDHHmm[Z]').toUpperCase()
  }

  useEffect(() => {
    const messages = turnFilter === SHOW_ALL_TURNS ? interactionMessages
      : interactionMessages.filter((inter) => inter.details.turnNumber === turnFilter)
    setFilteredInteractions(messages)
    if (filteredInteractionsRow.length === 0) {
      setFilteredInteractionsRow(messages)
    } else {
      const newMessage = messages[0]
      if (newMessage) {
        const row = toRow(newMessage)
        const filterSaveMessage = rows.filter(filter => !filter.activity.includes(newMessage.message.Reference))

        setRows([...filterSaveMessage, row])
      }
    }
    if (interactionMessages.length > 0) {
      const lastMessage = interactionMessages[interactionMessages.length - 1]
      if (lastMessage.details.interaction) {
        setCurrentTime('Time now: ' + moment.utc(lastMessage.details.interaction.startTime).format('MMM DDHHmm[Z]').toUpperCase())
      }
    }
  }, [interactionMessages])

  useEffect(() => {
    const plans = turnFilter === SHOW_ALL_TURNS ? planningMessages
      : planningMessages.filter((inter) => inter.details.turnNumber === turnFilter)
    setFilteredPlans(plans)
  }, [planningMessages])

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
  }

  const renderAsset = (assetId: { asset: Asset['uniqid'], number?: number, missileType?: string }, forces: ForceData[], index: number): React.ReactElement => {
    let asset: Asset | undefined
    let numStr = ''
    try {
      asset = findAsset(forces, assetId.asset)
    } catch (e) {
      console.warn('can\'t find asset for render asset', e)
    }
    if (assetId.number) {
      if (assetId.missileType) {
        numStr = ' (' + assetId.number + ' x ' + assetId.missileType + ')'
      } else {
        numStr = ' (' + assetId.number + ')'
      }
    }
    if (!asset) {
      console.warn('Failed to find asset:' + assetId)
      return <li key={index}>Asset not found</li>
    } else {
      return <li key={index}>{asset.name}{numStr}</li>
    }
  }

  const renderOrderDetail = (order1: boolean, row: AdjudicationRow, forces: ForceData[], activity?: string): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    if (id === 'n/a') {
      return <span>n/a</span>
    } else {
      const plan: MessagePlanning | undefined = filteredPlans.find((val: MessagePlanning) => val._id === id)
      if (!plan) {
        console.warn('Failed to find message 1:', id)
        return <span>Order not found</span>
      }
      const done = ['title', 'activity', 'location', 'ownAssets', 'otherAssets', 'startDate', 'endDate']
      const items = Object.keys(plan.message).map((item, index): React.ReactElement => {
        if (done.includes(item)) {
          return <Fragment key={index} />
        } else {
          const name = _.kebabCase(item)
          return <Fragment key={index}><span key={index}><b>{name}: </b>{'' + plan.message[item]}</span><br /></Fragment>
        }
      })
      const title = order1 ? 'Orders 1' : ' Orders 2'
      const timings = shortDate(plan.message.startDate) + ' - ' + shortDate(plan.message.endDate)
      return <Box>
        <div><b>{title}</b></div>
        <span><b>Title: </b> {plan.message.title} </span>
        <span><b>Activity: </b> {activity || 'n/a'} </span><br />
        <span><b>Time: </b> {timings} </span><br />
        <span><b>Own: </b> {plan.message.ownAssets &&
          <ul> {
            plan.message.ownAssets.map((str, index) => renderAsset(str, forces, index))}
          </ul>}</span>
        <span><b>Other: </b> {plan.message.otherAssets &&
          <ul> {
            plan.message.otherAssets.map((str, index) => renderAsset(str, forces, index))}
          </ul>}</span>
        {items}
      </Box>
    }
  }

  const renderOrderTitle = (order1: boolean, row: AdjudicationRow): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    if (id === 'n/a') {
      return <span>n/a</span>
    } else {
      const plan: MessagePlanning | undefined = filteredPlans.find((val: MessagePlanning) => val._id === id)
      if (!plan) {
        console.warn('Failed to find message 2:', id)
        return <span>Order not found</span>
      }
      return <span>Title: {plan.message.title}</span>
    }
  }

  const toRow = (message: MessageInteraction): AdjudicationRow => {
    const interaction = message.details.interaction
    if (!interaction) {
      throw Error('Interaction details missing')
    }
    const myMessage = message.details.from.roleId === playerRoleId
    const incompleteMessageFromMe = (myMessage && !interaction.complete)

    const row: AdjudicationRow = {
      id: message._id,
      order1: interaction.orders1,
      order2: interaction.orders2 || 'n/a',
      important: message.message.important ? 'Y' : 'N',
      turn: message.details.turnNumber,
      complete: !!interaction.complete,
      activity: message.message.Reference,
      period: shortDate(interaction.startTime) + '-' + shortDate(interaction.endTime),
      // if the item is incomplete
      tableData: { showDetailPanel: incompleteMessageFromMe ? detailPanel : undefined },
      owner: message.details.from.roleName
    }
    return row
  }

  useEffect(() => {
    // check we have our planning messages
    if (filteredPlans.length > 0 && filteredInteractionsRow.length > 0) {
      const dataTable = filteredInteractionsRow.map((message: MessageInteraction): AdjudicationRow => {
        return toRow(message)
      })
      setRows(dataTable)

      const umpireForce = forces.find((force: ForceData) => force.umpire)
      const summaryData = umpireForce && getColumnSummary(forces, umpireForce.uniqid, false, [])
      const columnsData: Column<AdjudicationRow>[] = !summaryData ? [] : [
        { title: 'ID', field: 'id' },
        { title: 'Complete', field: 'complete', render: renderBoolean },
        { title: 'Important', field: 'important', lookup: { Y: 'Y', N: 'N' } },
        { title: 'Owner', field: 'owner' },
        { title: 'Order 1', field: 'order1', render: (row: AdjudicationRow) => renderOrderTitle(true, row) },
        { title: 'Order 2', field: 'order2', render: (row: AdjudicationRow) => renderOrderTitle(false, row) },
        { title: 'Activity', field: 'Reference' },
        { title: 'Duration', field: 'period' }
      ]
      if (turnFilter === SHOW_ALL_TURNS) {
        const turnColumn: Column<AdjudicationRow> = { title: 'Turn', field: 'turn', type: 'numeric' }
        columnsData.splice(1, 0, turnColumn)
      }
      if (columns.length === 0) {
        setColumns(columnsData)
      }
    }
  }, [filteredInteractionsRow])

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>, interaction: InteractionData): Record<string, any> => {
    // run the parent first
    const firstUpdate = customiseTemplate ? customiseTemplate(document, schema) : schema
    const includeUnknown = true
    // wrap manipulation code in `try` in case the template structure doesn't match
    try {
      // now our local changes
      updateAssets(firstUpdate.properties.perceptionOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.healthOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.locationOutcomes.items.properties.asset, interaction)

      // now the perceived forces
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.force, forceStyles)
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.perceivedForce, forceStyles, includeUnknown)

      // now the platform types
      updatePlatformTypes(firstUpdate.properties.perceptionOutcomes.items.properties.perceivedType, platformTypes, includeUnknown)
    } catch (e) {
      console.warn('Failed to customise template. Does it not match expected adjudication template?', e)
    }

    return firstUpdate
  }

  // console.table(interactionMessages.map((msg: MessageInteraction) => {
  //   return {
  //     id: msg._id,
  //     complete: msg.details.interaction && msg.details.interaction.complete,
  //     reference: msg.message.Reference
  //   }
  // }))

  const localSubmitAdjudication = (): void => {
    if (currentAdjudication.current) {
      // get current message
      const outcomes = currentAdjudication.current as any as MessageAdjudicationOutcomes
      const document = filteredInteractions.find((msg) => msg.message.Reference === outcomes.Reference)
      if (document) {
        const details = JSON.parse(JSON.stringify(document.details)) as MessageDetails
        const interaction = details.interaction
        if (interaction) {
          // mark as adjudicatead
          interaction.complete = true
        }

        // for the map handler to work, the message type needs to be int he emssage
        const outAsAny = outcomes as any
        outAsAny.messageType = ADJUDICATION_OUTCOMES

        // (temporarily) fix the locations. While we're waiting for the outcomes table
        // to support the location editor, we're allowing locations to be entered as
        // lat-long pairs
        outcomes.locationOutcomes.forEach((value: LocationOutcome) => {
          const loc = value.location
          if (typeof loc === 'string') {
            // ok, convert string to JSON array
            const json = JSON.parse(loc)
            // extract the coords
            const lat = parseFloat(json[0])
            const lng = parseFloat(json[1])
            // create new location array
            const latLng: [number, number] = [lat, lng]
            // store the value
            value.location = latLng
          } else if (Array.isArray(loc)) {
            // value is valid, leave
            value.location = loc
          } else {
            console.error('Unexpected location outcome format:', value.location)
          }
        })

        // postBack. note - we use the mapping post back handler, so it
        // can modify the wargame, in addition to sending the message
        mapPostBack && mapPostBack(details, outcomes)
      }
    }
  }

  /** this is how we prevent draft messages getting corrected */
  const localStoreNewValue = (value: { [property: string]: any }): void => {
    currentAdjudication.current = value as MessageAdjudicationOutcomes
  }

  const countRemainingInteractions = (): void => {
    console.time('count interactions')
    const gameTurnEnd = incrementGameTime(gameDate, gameTurnLength)
    const contacts: InteractionResults = getNextInteraction2(filteredPlans, forcePlanningActivities || [], filteredInteractions, 0, 30, gameDate, gameTurnEnd, forces, true)
    const message = '' + contacts + ' interactions remaining'
    console.timeLog('count interactions')
    setDialogMessage(message)
  }

  const getInteraction = (): void => {
    const gameTurnEnd = incrementGameTime(gameDate, gameTurnLength)
    const results: InteractionResults = getNextInteraction2(filteredPlans, forcePlanningActivities || [], filteredInteractions, 0, 30, gameDate, gameTurnEnd, forces, false)
    console.log('get next inter recieved:', results)
    if (results === undefined) {
      setDialogMessage('No interactions found')
      // fine, ignore it
    } else if (typeof results === 'object') {
      const outcomes = results as { details: InteractionDetails, outcomes: MessageAdjudicationOutcomes }
      handleAdjudication && handleAdjudication(outcomes.details, outcomes.outcomes)
    } else if (typeof results === 'number') {
      console.warn('not expecting number return from get next interaction')
    }
  }

  const createManualInteraction = (): void => {
    // collate the data

    // orders
    const forceMsgs: ForceMessages[] = []
    filteredPlans.forEach((msg: MessagePlanning) => {
      const force = msg.details.from.force
      let forceData = forceMsgs.find((val: ForceMessages) => val.forceName === force)
      if (!forceData) {
        forceData = { forceName: force, messages: [] }
        forceMsgs.push(forceData)
      }
      forceData.messages.push(msg)
    })

    const otherAssets: Asset[] = []
    forces.forEach((force: ForceData) => {
      if (force.assets) {
        otherAssets.push(...force.assets)
      }
    })

    const data: ManualInteractionData = {
      forceMessages: forceMsgs,
      otherAssets: otherAssets
    }

    // popup the form
    setManualDialog(data)
  }

  const handleManualInteraction = (results?: ManualInteractionResults): void => {
    // collate the data
    console.log('handling', results)
    // submit the adjudication

    // clear the data
    setManualDialog(undefined)
  }

  const detailPanel = ({ rowData }: { rowData: AdjudicationRow }): any => {
    const DetailPanelStateListener = () => {
      useEffect(() => {
        localDetailPanelOpen(rowData)
        return () => {
          localDetailPanelClose(rowData)
        }
      }, [])
      return <></>
    }

    // retrieve the message & template
    const message: MessageInteraction | undefined = interactionMessages.find((value: MessageInteraction) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', filteredInteractions)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      if (message && template) {
        const msg = message.message
        const isComplete = message.details.interaction?.complete
        const interaction = message.details.interaction
        const data = interaction && collateInteraction(message._id, interactionMessages, filteredPlans, forces, forceStyles, forcePlanningActivities)
        if (!data) {
          return <span>Orders not found for interaction with id: {message._id}</span>
        } else {
          const assetNames: string[] = data.otherAssets.map((asset: Asset) => asset.name)

          const time = interaction.startTime === interaction.endTime ? shortDate(interaction.startTime)  : shortDate(interaction.startTime) + ' - ' + shortDate(interaction.endTime)
          return <>
            <DetailPanelStateListener />
            <Box><b>Interaction details:</b><br/>
              <ul>
                <li><b>Other assets:</b>{ assetNames.length > 0 ? assetNames.join(', ') : 'None' }</li>
                <li><b>Date/time:</b>{ time }</li>
                <li><b>Geometry provided:</b>{ interaction.geometry ? 'Yes' : 'No' }</li>
              </ul>
            </Box>
            <Table>
              <tbody>
                <tr>
                  <td>{renderOrderDetail(true, rowData, forces, data.order1Activity)}</td>
                  <td>{renderOrderDetail(false, rowData, forces, data.order2Activity)}</td>
                </tr>
              </tbody>
            </Table>
            <JsonEditor
              messageContent={msg}
              customiseTemplate={(document, schema) => localCustomiseTemplate(document, schema, data)}
              messageId={rowData.id}
              disabled={isComplete}
              template={template}
              gameDate={gameDate}
              saveMessage={localSubmitAdjudication}
              storeNewValue={localStoreNewValue}
              onLocationEditorLoaded={onLocationEditorLoaded}
            />
            {!isComplete &&
              <div className='button-wrap' >
                <Button color='secondary' onClick={localSubmitAdjudication} icon='save'>Submit Adjudication</Button>
              </div>
            }
          </>
        }
      } else {
        return <div>Template not found for {message.details.messageType}</div>
      }
    }
  }

  const closeDialogCallback = useCallback(() => setDialogMessage(''), [])
  const closeManualCallback = useCallback(() => setManualDialog(undefined), [])
  const handleManualCallback = useCallback(handleManualInteraction, [])

  return (
    <div className={styles['messages-list']}>
      {/* todo - replace this CustomDialog with form matching layout */}
      <CustomDialog
        isOpen={manualDialog !== undefined}
        header={'Manual dialog, #assets:' + (manualDialog && manualDialog.otherAssets.length)}
        cancelBtnText={'Cancel'}
        saveBtnText={'Create'}
        onClose={closeManualCallback}
        onSave={handleManualCallback}
        content={'Form to create manual interaction'}
      />
      <CustomDialog
        isOpen={dialogMessage.length > 0}
        header={'Generate interactions'}
        cancelBtnText={'OK'}
        onClose={closeDialogCallback}
        content={dialogMessage}
      />
      <div className='button-wrap' >
        <Button color='secondary' onClick={getInteraction} icon='save'>Get next</Button>
        &nbsp;
        <Button color='secondary' onClick={createManualInteraction} icon='add'>Create manual</Button>
        &nbsp;
        <Button color="secondary" onClick={countRemainingInteractions} icon='functions'># Remaining</Button>
        <Chip label={currentTime}/>
      </div>

      <MaterialTable
        title={'Adjudication'}
        columns={columns}
        data={rows}
        icons={materialIcons as any}
        actions={[
          {
            icon: () => <FontAwesomeIcon title='Show filter controls' icon={faFilter} />,
            iconProps: filter ? { color: 'action' } : { color: 'disabled' },
            tooltip: 'Show filter controls',
            isFreeAction: true,
            onClick: (): void => setFilter(!filter)
          }
        ]}
        options={{
          paging: true,
          detailPanelType: 'single',
          pageSize: 20,
          pageSizeOptions: [5, 10, 15, 20],
          filtering: filter,
          selection: true,
          rowStyle: { fontSize: '80%' }
        }}
        detailPanel={detailPanel}
      />
    </div>
  )
}

export default AdjudicationMessagesList
