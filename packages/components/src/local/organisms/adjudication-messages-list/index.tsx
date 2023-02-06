import { faFilter, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column } from '@material-table/core'
import { Box, Chip, Table } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { Asset, ForceData, InteractionDetails, INTERACTION_SHORT_CIRCUIT, LocationOutcome, MessageAdjudicationOutcomes, MessageDetails, MessageInteraction, MessagePlanning, MessageStructure, PlannedActivityGeometry, PlannedProps } from '@serge/custom-types'
import { findForceAndAsset, forceColors, ForceStyle, hexToRGBA, incrementGameTime } from '@serge/helpers'
import dayjs, { Dayjs } from 'dayjs'
import _ from 'lodash'
import moment from 'moment'
import React, { Fragment, SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../atoms/button'
import CustomDialog from '../../atoms/custom-dialog'
import JsonEditor from '../../molecules/json-editor'
import { getColumnSummary } from '../planning-assets/helpers/collate-assets'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { SHOW_ALL_TURNS } from '../support-panel/helpers/TurnFilter'
import { collateInteraction, InteractionData, updateForces, updatePlatformTypes, updateWithAllAssets } from './helpers/collate-interaction'
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
  orders: MessagePlanning []
  otherAssets: Asset[]
  startDate: string
  endDate: string
}

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, interactionMessages, planningMessages, template, gameDate, turnFilter,
  customiseTemplate, playerRoleId, forcePlanningActivities, handleAdjudication,
  platformTypes, onDetailPanelOpen, onDetailPanelClose, mapPostBack,
  gameTurnLength, onLocationEditorLoaded
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column<AdjudicationRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [onlyShowOpen, setOnlyShowOpwn] = useState<boolean>(false)
  const [dialogMessage, setDialogMessage] = useState<string>('')
  // note: we don't work directly with the list of interactions, since we need some special processing to prevent
  // note: interactions being edited from being wiped.  So we maintain an independent list
  const [cachedInteractions, setCachedInteractions] = useState<MessageInteraction[]>([])
  const [currentTime, setCurrentTime] = useState<string>('pending')
  const [manualDialog, setManualDialog] = useState<ManualInteractionData | undefined>(undefined)
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs(gameDate))
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs(gameDate))

  const forceStyles: Array<ForceStyle> = forceColors(forces, true)

  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const currentAdjudication = useRef<MessageAdjudicationOutcomes | string>('')
  const manuallyData = useRef<ManualInteractionResults>({ orders: [], endDate: gameDate, otherAssets: [], startDate: gameDate })

  const [interactionIsOpen, setInteractionIsOpen] = useState<boolean>(false)

  const msgSeparator = ' - '

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
    // find list of messages that are open and assigned to me
    const ownOpenMessages: MessageInteraction[] = interactionMessages.filter((msg) => {
      const isMine = msg.details.from.roleId === playerRoleId
      const isOpen = msg.details.interaction && msg.details.interaction.complete === false
      return isMine && isOpen
    })
    // if filter is selected, only show own open messages
    const ownMessages = onlyShowOpen ? ownOpenMessages : interactionMessages
    if (cachedInteractions.length === 0) {
      // application load. No interactions known about, so we can't lose
      // any data - just take the value
      setCachedInteractions(ownMessages)
    } else if (ownMessages.length === 0) {
      // no messages received. Clear list
      setCachedInteractions([])
    } else {
      // check the first message - it may be an update
      const newMessage = ownMessages[0]
      const existingRow = rows.find((row) => row.reference === newMessage.message.Reference)
      if (existingRow && existingRow.id !== newMessage._id) {
        const row = toRow(newMessage)
        const existingMessages = rows.filter(filter => !filter.activity.includes(newMessage.message.Reference))
        setRows([...existingMessages, row])
      } else {
        setCachedInteractions(ownMessages)
      }
    }
    // when determining the time of next adjudication, consider the full list
    if (interactionMessages.length > 0) {
      const lastMessage = interactionMessages[interactionMessages.length - 1]
      if (lastMessage.details.interaction) {
        setCurrentTime('Time now: ' + moment.utc(lastMessage.details.interaction.startTime).format('MMM DDHHmm[Z]').toUpperCase())
      }
    }
    setInteractionIsOpen(!!ownOpenMessages.length)
  }, [interactionMessages, onlyShowOpen])

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
  }

  const healthStyleFor = (aHealth: number | undefined) => {
    let healthStyle
    if (aHealth !== undefined) {
      if (aHealth === 100) {
        healthStyle = styles.full
      } else if (aHealth === 0) {
        healthStyle = styles.dead
      } else {
        healthStyle = styles.damaged
      }
    }
    return healthStyle
  }

  const renderAsset = (assetId: { asset: Asset['uniqid'], number?: number, missileType?: string }, forces: ForceData[],
    index: number, numberCol: boolean): React.ReactElement => {
    let asset: {force: ForceData, asset: Asset} | undefined
    try {
      asset = findForceAndAsset(forces, assetId.asset)
    } catch (e) {
      console.warn('can\'t find asset for render asset', e)
    }
    if (asset) {
      const platformType = platformTypes.find((value) => asset && value.uniqid === asset.asset.platformTypeId)
      const numAssets = assetId.number || 0
      const forceStyle = { backgroundColor: hexToRGBA(asset.force.color, 0.4) }
      const alive = asset.asset.health ? Math.floor(numAssets * asset.asset.health / 100) : 0
      const numDetails = assetId.missileType
        ? <td>{alive + ' of ' + numAssets}<br/>{assetId.missileType }</td>
        : <td>{alive + ' of ' + numAssets}</td>
      const aHealth = asset.asset.health
      const healthStyle = healthStyleFor(asset.asset.health)
      return <tr key={asset.asset.uniqid}>
        <td style={forceStyle}>{asset.asset.name}</td>
        { numberCol && numDetails }
        <td>{platformType ? platformType.name : 'n/a'}<br/>{asset.asset.attributes?.a_Type}</td>
        <td className={healthStyle}>{aHealth || 'unk'}</td>
        <td>{asset.asset.attributes?.a_C4_Status}</td>
      </tr>
    } else {
      console.warn('Failed to find asset:' + assetId)
      return <li key={index}>Asset not found</li>
    }
  }

  const renderOrderDetail = (order1: boolean, row: AdjudicationRow, forces: ForceData[], activity: string | undefined, geometry: string | undefined, geometryID: string | undefined): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    if (id === 'n/a') {
      return <span>n/a</span>
    } else {
      const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
      if (!plan) {
        console.warn('Failed to find message 1:', id)
        return <span>Order not found</span>
      }
      const done = ['title', 'activity', 'location', 'ownAssets', 'otherAssets', 'startDate', 'endDate', 'Reference']
      const items = Object.keys(plan.message).map((item, index): React.ReactElement => {
        if (done.includes(item)) {
          return <Fragment key={index} />
        } else {
          const name = _.kebabCase(item)
          return <Fragment key={index}><span key={index}><b>{name}: </b>{'' + plan.message[item]}</span><br /></Fragment>
        }
      })
      let geomTimings: string | undefined
      if (geometryID && plan.message.location) {
        const theGeom = plan.message.location.find((item: PlannedActivityGeometry) => item.uniqid === geometryID)
        if (theGeom) {
          const props = theGeom.geometry.properties as PlannedProps
          geomTimings = shortDate(props.startDate) + ' - ' + shortDate(props.endDate)
        }
      }
      const title = order1 ? 'Orders 1' : ' Orders 2'
      const orderTimings = shortDate(plan.message.startDate) + ' - ' + shortDate(plan.message.endDate)
      const force = forces.find((force: ForceData) => force.uniqid === plan.details.from.forceId)
      const forceStyle = { fontSize: '160%', backgroundColor: hexToRGBA(force ? force.color : '#ddd', 0.4) }
      return <Box>
        <div style={forceStyle}><b>{title}</b></div>
        <span><b>Title: </b> {plan.message.title} </span>
        <span><b>Reference: </b> {plan.message.Reference} </span>
        <span><b>Activity: </b> {activity || 'n/a'}: {geometry || ''}</span><br />
        <span><b>Order Time: </b> {orderTimings} </span><br />
        { geomTimings && <><span><b>Activity Time: </b> {geomTimings} </span><br /></>
        }
        <span><b>Own: </b> {plan.message.ownAssets && plan.message.ownAssets.length > 0 &&
          <table className={styles.assets}>
            <thead><tr><th>Name</th><th>Number</th><th>Type</th><th>Health</th><th>C4</th></tr></thead>
            <tbody>
              {plan.message.ownAssets.map((str, index) => renderAsset(str, forces, index, true))}
            </tbody>
          </table>}
        </span>
        <span><b>Other: </b> {plan.message.otherAssets && plan.message.otherAssets.length > 0 &&
          <table className={styles.assets}>
            <thead><tr><th>Name</th><th>Number</th><th>Type</th><th>Health</th><th>C4</th></tr></thead>
            <tbody>
              {plan.message.otherAssets.map((str, index) => renderAsset(str, forces, index, true))}
            </tbody>
          </table>}
        </span>
        <hr/>
        {items}
      </Box>
    }
  }

  const renderOrderTitle = (order1: boolean, row: AdjudicationRow): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    if (id === 'n/a') {
      return <span>n/a</span>
    } else {
      const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
      if (!plan) {
        console.warn('Failed to find message 2:', id)
        return <span>Order not found</span>
      }
      return <span>{plan.message.Reference}<br />{plan.message.title}</span>
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
      reference: message.message.Reference,
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
    if (planningMessages.length > 0) {
      const dataTable = cachedInteractions.map((message: MessageInteraction): AdjudicationRow => {
        return toRow(message)
      })
      setRows(dataTable)

      if (columns.length === 0) {
        console.time('collate')
        const umpireForce = forces.find((force: ForceData) => force.umpire)
        // TODO: the column definitions should use the data collated in the column summary (below)
        // provide more sophisticated column definition lookups
        const summaryData = umpireForce && getColumnSummary(forces, umpireForce.uniqid, false, [])
        const columnsData: Column<AdjudicationRow>[] = !summaryData ? [] : [
          { title: 'Reference', field: 'reference' },
          { title: 'Turn', field: 'turn', type: 'numeric', hidden: true }, // turnFilter !== SHOW_ALL_TURNS },
          { title: 'Complete', field: 'complete', render: renderBoolean },
          { title: 'Important', field: 'important', lookup: { Y: 'Y', N: 'N' } },
          { title: 'Owner', field: 'owner' },
          { title: 'Order 1', field: 'order1', render: (row: AdjudicationRow) => renderOrderTitle(true, row) },
          { title: 'Order 2', field: 'order2', render: (row: AdjudicationRow) => renderOrderTitle(false, row) },
          { title: 'Activity', field: 'Reference' },
          { title: 'Duration', field: 'period' }
        ]
        console.timeEnd('collate')
        setColumns(columnsData)
      }

      const turnColumn = columns.find((col) => col.title === 'Turn')
      if (turnColumn) {
        const newVal = turnFilter !== SHOW_ALL_TURNS
        if (turnColumn.hidden !== newVal) {
          turnColumn.hidden = newVal
        }
      } else {
        console.warn('Turn column not found in adj messages list')
      }
    } else {
      console.log('no planning messages received')
      setRows([])
    }
  }, [planningMessages, cachedInteractions, turnFilter])

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>, interaction: InteractionData): Record<string, any> => {
    // run the parent first
    const firstUpdate = customiseTemplate ? customiseTemplate(document, schema) : schema
    const includeUnknown = true
    // wrap manipulation code in `try` in case the template structure doesn't match
    try {
      // now our local changes. Note: we don't just provide the assets in the orders, we show all assets,
      // since an activity may relate to all assets in the area
      updateWithAllAssets(firstUpdate.properties.perceptionOutcomes.items.properties.asset, interaction, forces)
      updateWithAllAssets(firstUpdate.properties.healthOutcomes.items.properties.asset, interaction, forces)
      updateWithAllAssets(firstUpdate.properties.locationOutcomes.items.properties.asset, interaction, forces)

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

  const localSubmitSkip = (): void => {
    if (currentAdjudication.current) {
      // get current message
      const current = currentAdjudication.current as any as MessageAdjudicationOutcomes

      const document = filteredInteractions.find((msg) => msg.message.Reference === current.Reference)
      if (document) {
        // get current message
        const emptyOutcomes: MessageAdjudicationOutcomes = {
          messageType: ADJUDICATION_OUTCOMES,
          healthOutcomes: [],
          locationOutcomes: [],
          perceptionOutcomes: [],
          narrative: 'Adjudication skipped by ' + document.details.from.roleName,
          Reference: current.Reference,
          important: false
        }

        const details = JSON.parse(JSON.stringify(document.details)) as MessageDetails
        const interaction = details.interaction
        if (interaction) {
          // mark as adjudicatead
          interaction.complete = true
        }

        console.log('skipping adjudication', details, emptyOutcomes)

        // postBack. note - we use the mapping post back handler, so it
        // can modify the wargame, in addition to sending the message
        mapPostBack && mapPostBack(details, emptyOutcomes)
      }
    }
  }

  const localSubmitAdjudication = (): void => {
    if (currentAdjudication.current) {
      // get current message
      const outcomes = currentAdjudication.current as any as MessageAdjudicationOutcomes
      const document = interactionMessages.find((msg) => msg.message.Reference === outcomes.Reference)
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
          if (typeof loc === 'string' && (loc as string).length > 0) {
            try {
              // ok, convert string to JSON array
              const json = JSON.parse(loc)
              // extract the coords
              const lat = parseFloat(json[0])
              const lng = parseFloat(json[1])
              // create new location array
              const latLng: [number, number] = [lat, lng]
              // store the value
              value.location = latLng
            } catch (err) {
              console.warn('Failed to parse JSON. No location stored')
            }
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
    const contacts: InteractionResults = getNextInteraction2(planningMessages, forcePlanningActivities || [], interactionMessages, 0, 30, gameDate, gameTurnEnd, forces, true)
    if (Array.isArray(contacts)) {
      const message = '' + contacts[0] + ' events remaining' + ', ' + contacts[1] + ' interactions remaining'
      setDialogMessage(message)
    } else {
      setDialogMessage('No events or interactions remaining')
    }
    console.timeLog('count interactions')
  }

  const getInteraction = (): void => {
    const gameTurnEnd = incrementGameTime(gameDate, gameTurnLength)
    const results: InteractionResults = getNextInteraction2(planningMessages, forcePlanningActivities || [], interactionMessages, 0, 30, gameDate, gameTurnEnd, forces, false)
    console.log('get next inter recieved:', results)
    if (results === undefined) {
      setDialogMessage('No interactions found')
      // fine, ignore it
    } else if (!Array.isArray(results) && results !== undefined) {
      const outcomes = results as { details: InteractionDetails, outcomes: MessageAdjudicationOutcomes }
      handleAdjudication && handleAdjudication(outcomes.details, outcomes.outcomes)
    } else {
      console.warn('not expecting number return from get next interaction', results)
    }
  }

  const createManualInteraction = (): void => {
    // collate the data

    // orders
    const forceMsgs: ForceMessages[] = []
    planningMessages.forEach((msg: MessagePlanning) => {
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

    validateManualForm()
    // popup the form
    setManualDialog(data)
  }

  const handleManualInteraction = (): void => {
    // collate data for adjudication
    const data = manuallyData.current
    const iDetails: InteractionDetails = {
      startTime: data.startDate,
      endTime: data.endDate,
      otherAssets: data.otherAssets.map((asset: Asset) => asset.uniqid),
      orders1: data.orders[0]._id,
      orders2: data.orders.length === 2 ? data.orders[1]._id : undefined,
      complete: false,
      id: moment().toISOString() + ' Manual'
    }
    const outcomes: MessageAdjudicationOutcomes = {
      messageType: ADJUDICATION_OUTCOMES,
      Reference: '', // leave blank, so backend creates it
      narrative: '',
      important: false,
      perceptionOutcomes: [],
      locationOutcomes: [],
      healthOutcomes: []
    }
    // close the panel
    setManualDialog(undefined)

    // submit this new item
    handleAdjudication && handleAdjudication(iDetails, outcomes)
  }

  const translateEvent = (event: INTERACTION_SHORT_CIRCUIT): string => {
    switch (event) {
      case 'i-end':
        return 'End of activity'
      case 'i-start':
        return 'Start of activity'
      case 'i-random':
        return 'Random point in period'
    }
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
      console.error('message not found, id:', rowData.id, 'messages:', interactionMessages.length)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      if (message && template) {
        const msg = message.message
        const isComplete = message.details.interaction?.complete
        const interaction = message.details.interaction
        const data = interaction && collateInteraction(message._id, interactionMessages, planningMessages, forces, forceStyles, forcePlanningActivities)
        if (!data) {
          return <span>Orders not found for interaction with id: {message._id}</span>
        } else {
          const time = interaction.startTime === interaction.endTime ? shortDate(interaction.startTime) : shortDate(interaction.startTime) + ' - ' + shortDate(interaction.endTime)
          return <>
            <DetailPanelStateListener />
            {!isComplete &&
              <div className='button-wrap' >
                <Button color='secondary' onClick={localSubmitSkip} icon='delete'>Skip Adjudication</Button>
                <Button color='secondary' onClick={localSubmitAdjudication} icon='save'>Submit Adjudication</Button>
              </div>
            }
            <Box><b>Interaction details:</b><br />
              <ul>
                <li><b>Date/time: </b>{time}</li>
                <li><b>Geometry provided: </b>{interaction.geometry ? 'Yes' : 'No'}</li>
                { interaction.event && <li><b>Event: </b>{translateEvent(interaction.event)}</li> }
                <li><b>Other assets: </b>
                  <span>{data.otherAssets && data.otherAssets.length > 0
                    ? <table className={styles.assets}>
                      <thead><tr><th>Name</th><th>Type</th><th>Health</th><th>C4</th></tr></thead>
                      <tbody>
                        {data.otherAssets.map((asset, index) => renderAsset({ asset: asset.uniqid }, forces, index, false))}
                      </tbody>
                    </table> : ' None'}
                  </span>
                </li>
                <li><b>ID: </b>{interaction.id}</li>
              </ul>
            </Box>
            <Table>
              <tbody>
                <tr>
                  <td>{renderOrderDetail(true, rowData, forces, data.order1Activity, data.order1Geometry, data.order1GeometryID)}</td>
                  <td>{renderOrderDetail(false, rowData, forces, data.order2Activity, data.order2Geometry, data.order2GeometryID)}</td>
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
                <Button color='secondary' onClick={localSubmitSkip} icon='delete'>Skip Adjudication</Button>
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

  const modalStyle = useMemo(() => ({ content: { width: '850px' } }), [])

  const validateManualForm = ():void => {
    const res = []
    const orderLen = manuallyData.current.orders.length
    if (orderLen === 0) {
      res.push('One or two sets of orders must be selected')
    }
    if (orderLen > 2) {
      res.push('Only one or two sets of orders may be selected')
    }
    if (manuallyData.current.startDate === '' || manuallyData.current.endDate === '') {
      res.push('Start and end dates must be provided')
    }
    setValidationErrors(res)
  }

  type MessageValue = {id: string, label: string}

  return (
    <div className={styles['messages-list']}>
      { manualDialog && <CustomDialog
        isOpen={true}
        header={'Create Manual Interaction'}
        cancelBtnText={'Cancel'}
        saveBtnText={'Submit'}
        onClose={closeManualCallback}
        onSave={handleManualCallback}
        modalStyle={modalStyle}
        errors={validationErrors}
      >
        <div>
          <div className={styles['autocomplete-dropdown']}>
            {manualDialog.forceMessages.map(force => {
              return <Autocomplete
                key={force.forceName}
                disablePortal
                options={force.messages.map(message => ({ id: message._id, label: message.message.Reference + msgSeparator + message.message.title }))}
                sx={{ width: `${(100 / manualDialog.forceMessages.length) - 0.3}%` }}
                isOptionEqualToValue={(option, value): boolean => {
                  return option.id === value.id
                }}
                renderInput={(params) => <TextField {...params} size='small' label={force.forceName} />}
                onChange={(_: SyntheticEvent<Element, Event>, value: MessageValue | null) => {
                  // clear out any existing for this force
                  manuallyData.current.orders = manuallyData.current.orders.filter((plan: MessagePlanning) => {
                    return plan.details.from.force !== force.forceName
                  })
                  // extract the order reference
                  if (value) {
                    const message = force.messages.find(message => message._id === value.id)
                    // now add the new one
                    if (message) {
                      manuallyData.current.orders.push(message)
                    }
                  }
                  validateManualForm()
                }}
              />
            })}
          </div>
          <div className={styles['autocomplete-dropdown']}>
            <Autocomplete
              disablePortal
              multiple
              options={manualDialog.otherAssets.map(asset => ({ id: asset.uniqid, label: asset.uniqid + msgSeparator + asset.name })) || []}
              isOptionEqualToValue={(option, value): boolean => {
                return option.id === value.id
              }}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} size='small' label='Other assets' />}
              onChange={(_: SyntheticEvent<Element, Event>, value: MessageValue[]) => {
                const assets = manualDialog.otherAssets.filter(item => {
                  const ids = value.map((val: MessageValue) => val.id)
                  return ids.includes(item.uniqid)
                })
                if (assets) {
                  manuallyData.current.otherAssets = assets
                }
                validateManualForm()
              }}
            />
          </div>
          <div className={styles['autocomplete-dropdown']}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField size='small' inputProps={{ ...props.inputProps, readOnly: true }} {...props} sx={{ width: '50%' }} />}
                label='Start Time'
                inputFormat="YYYY/MM/DD HH:mm"
                value={startTime}
                onChange={(value) => {
                  try {
                    manuallyData.current.startDate = value?.toISOString() || new Date().toISOString()
                    setStartTime(value)
                  } catch (err) {
                    console.log('start date invalid')
                    manuallyData.current.startDate = ''
                  }
                  validateManualForm()
                }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField size='small' inputProps={{ ...props.inputProps, readOnly: true }} {...props} sx={{ width: '50%' }} />}
                label='End Time'
                inputFormat="YYYY/MM/DD HH:mm"
                value={endTime}
                onChange={(endTime) => {
                  try {
                    manuallyData.current.endDate = endTime?.toISOString() || new Date().toISOString()
                    setEndTime(endTime)
                  } catch (err) {
                    console.log('end date invalid')
                    manuallyData.current.endDate = ''
                  }
                  validateManualForm()
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </CustomDialog>
      }

      {dialogMessage.length > 0 &&
        <CustomDialog
          isOpen={dialogMessage.length > 0}
          header={'Generate interactions'}
          cancelBtnText={'OK'}
          onClose={closeDialogCallback}
        >
          <>{dialogMessage}</>
        </CustomDialog>
      }
      <div className='button-wrap' >
        <Button color='secondary' disabled={interactionIsOpen} onClick={getInteraction} icon='save'>Get next</Button>
        &nbsp;
        <Button color='secondary' disabled={interactionIsOpen} onClick={createManualInteraction} icon='add'>Create manual</Button>
        &nbsp;
        <Button color="secondary" onClick={countRemainingInteractions} icon='functions'># Remaining</Button>
        <Chip label={currentTime} />
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
          },
          {
            icon: () => <FontAwesomeIcon title='Only show open interactions' icon={faUser} />,
            iconProps: onlyShowOpen ? { color: 'action' } : { color: 'disabled' },
            tooltip: 'Only show open interactions',
            isFreeAction: true,
            onClick: (): void => setOnlyShowOpwn(!onlyShowOpen)
          }
        ]}
        options={{
          paging: true,
          pageSize: 20,
          pageSizeOptions: [5, 10, 15, 20],
          filtering: filter,
          selection: true,
          rowStyle: { fontSize: '80%' },
          columnsButton: true
        }}
        detailPanel={detailPanel}
      />
    </div>
  )
}

export default AdjudicationMessagesList
