import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from '@material-ui/core'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { Asset, ForceData, InteractionDetails, LocationOutcome, MessageAdjudicationOutcomes, MessageInteraction, MessagePlanning, MessageStructure } from '@serge/custom-types'
import { findAsset, forceColors, ForceStyle, incrementGameTime } from '@serge/helpers'
import _ from 'lodash'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { Fragment, useEffect, useRef, useState } from 'react'
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

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, interactionMessages, planningMessages, template, gameDate,
  customiseTemplate, playerRoleId, forcePlanningActivities, handleAdjudication,
  turnFilter, platformTypes, onDetailPanelOpen, onDetailPanelClose, mapPostBack,
  gameTurnLength,
  onLocationEditorLoaded
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const [dialogMessage, setDialogMessage] = useState<string>('')

  const [filteredInteractions, setFilteredInteractions] = useState<MessageInteraction[]>([])
  const [filteredInteractionsRow, setFilteredInteractionsRow] = useState<MessageInteraction[]>([])

  const [filteredPlans, setFilteredPlans] = useState<MessagePlanning[]>([])

  const forceStyles: Array<ForceStyle> = forceColors(forces, true)

  const currentAdjudication = useRef<MessageAdjudicationOutcomes | string>('')

  const localDetailPanelOpen = (row: AdjudicationRow): void => {
    onDetailPanelOpen && onDetailPanelOpen(row)
  }

  const localDetailPanelClose = (row: AdjudicationRow): void => {
    onDetailPanelClose && onDetailPanelClose(row)
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
  }, [interactionMessages])

  useEffect(() => {
    const plans = turnFilter === SHOW_ALL_TURNS ? planningMessages
      : planningMessages.filter((inter) => inter.details.turnNumber === turnFilter)
    setFilteredPlans(plans)
  }, [planningMessages])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
  }

  const renderAsset = (assetId: { asset: Asset['uniqid'], number?: number }, forces: ForceData[], index: number): React.ReactElement => {
    let asset: Asset | undefined
    let numStr = ''
    try {
      asset = findAsset(forces, assetId.asset)
      if (assetId.number) {
        numStr = ' (' + assetId.number + ')'
      }
    } catch (e) {
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
    const plan: MessagePlanning | undefined = filteredPlans.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      console.warn('Failed to find message:', id)
      return <span>Order not found</span>
    }
    const done = ['title', 'activity', 'location', 'ownAssets', 'otherAssets']
    const items = Object.keys(plan.message).map((item, index): React.ReactElement => {
      if (done.includes(item)) {
        return <Fragment key={index} />
      } else {
        const name = _.kebabCase(item)
        return <Fragment key={index}><span key={index}><b>{name}: </b>{'' + plan.message[item]}</span><br /></Fragment>
      }
    })
    return <div>
      <span><b>Title: </b> {plan.message.title} </span>
      <span><b>Activity: </b> {activity || 'n/a'} </span><br />
      <span><b>Own: </b> {plan.message.ownAssets &&
        <ul> {
          plan.message.ownAssets.map((str, index) => renderAsset(str, forces, index))}
        </ul>}</span>
      <span><b>Other: </b> {plan.message.otherAssets &&
        <ul> {
          plan.message.otherAssets.map((str, index) => renderAsset(str, forces, index))}
        </ul>}</span>
      {items}
    </div>
  }

  const renderOrderTitle = (order1: boolean, row: AdjudicationRow): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    const plan: MessagePlanning | undefined = filteredPlans.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      console.warn('Failed to find message:', id)
      return <span>Order not found</span>
    }
    return <span>Title: {plan.message.title}</span>
  }

  const toRow = (message: MessageInteraction): AdjudicationRow => {
    const interaction = message.details.interaction
    if (!interaction) {
      throw Error('Interaction details missing')
    }
    const myMessage = message.details.from.roleId === playerRoleId
    const incompleteMessageFromMe = (myMessage && !interaction.complete)

    const row = {
      id: message._id,
      order1: interaction.orders1,
      order2: interaction.orders2 || 'n/a',
      turn: message.details.turnNumber,
      complete: !!interaction.complete,
      activity: message.message.Reference,
      period: shortDate(interaction.startTime) + '-' + shortDate(interaction.endTime),
      // if the item is incomplete
      tableData: { showDetailPanel: incompleteMessageFromMe ? detailPanel : undefined }
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
      const columnsData: Column[] = jestWorkerId ? [] : !summaryData ? [] : [
        { title: 'ID', field: 'id' },
        { title: 'Complete', field: 'complete', render: renderBoolean },
        { title: 'Order 1', field: 'order1', render: (row) => renderOrderTitle(true, row) },
        { title: 'Order 2', field: 'order2', render: (row) => renderOrderTitle(false, row) },
        { title: 'Activity', field: 'Reference' },
        { title: 'Duration', field: 'period' }
      ]
      if (turnFilter === SHOW_ALL_TURNS && !jestWorkerId) {
        const turnColumn: Column = { title: 'Turn', field: 'turn', type: 'numeric' }
        columnsData.splice(1, 0, turnColumn)
      }
      if (columns.length === 0) {
        setColumns(columnsData)
      }
    }
  }, [filteredInteractionsRow])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

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

  const localSubmitAdjudication = (): void => {
    if (currentAdjudication.current) {
      // get current message
      const outcomes = currentAdjudication.current as any as MessageAdjudicationOutcomes
      const document = filteredInteractions.find((msg) => msg.message.Reference === outcomes.Reference)
      if (document) {
        const details = document.details
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
    // console.log('count remaining')
    // const contacts = getNextInteraction(filteredPlans, forcePlanningActivities || [], filteredInteractions, 0, 30, true)
    // console.log('contacts', contacts)
    // const message = '' + contacts.length + ' interactions remaining'
    // setDialogMessage(message)
  }

  const getInteraction = (): void => {
    console.log('get interaction', forcePlanningActivities)
    const gameTurnEnd = incrementGameTime(gameDate, gameTurnLength)
    const results: InteractionResults = getNextInteraction2(filteredPlans, forcePlanningActivities || [], filteredInteractions, 0, 30, gameDate, gameTurnEnd, forces, false)
    if (results === undefined ) {
      // fine, ignore it
    } else if (typeof results === 'object') {
      const outcomes = results as {details: InteractionDetails, outcomes: MessageAdjudicationOutcomes}
      handleAdjudication && handleAdjudication(outcomes.details, outcomes.outcomes)
    } else if (typeof results === 'number') {
     console.warn('not expecting number return from get next interaction')
    }
  }

  const detailPanel = (rowData: AdjudicationRow): any => {
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
        const data = collateInteraction(message._id, interactionMessages, filteredPlans, forces, forceStyles, forcePlanningActivities)
        if (!data) {
          return <span>Orders not found for interaction with id: {message._id}</span>
        } else {
          return <>
            <DetailPanelStateListener />
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

  const extendProps = jestWorkerId ? {} : {
    detailPanel: detailPanel
  }

  const closeDialog = (): void => {
    if (dialogMessage !== '') {
      setDialogMessage('')
    }
  }

  return (
    <div className={styles['messages-list']}>
      <CustomDialog
        isOpen={dialogMessage.length > 0}
        header={'Generate interactions'}
        cancelBtnText={'OK'}
        // TODO: fix issue on next line
        // deepscan-disable-next-line
        onClose={(): void => closeDialog()}
        content={dialogMessage}
      />
      <div className='button-wrap' >
        <Button color='secondary' onClick={getInteraction} icon='save'>Get next interaction</Button>
        &nbsp;
        <Button color="secondary" onClick={countRemainingInteractions} icon='functions'>Remaining</Button>
      </div>

      <MaterialTable
        title={'Adjudication'}
        columns={columns}
        data={rows}
        icons={materialIcons}
        actions={jestWorkerId ? [] : [
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
          pageSize: 20,
          pageSizeOptions: [5, 10, 15, 20],
          sorting: false,
          filtering: filter,
          selection: !jestWorkerId // fix unit-test for material table
        }}
        {...extendProps}
      />
    </div>
  )
}

export default AdjudicationMessagesList
