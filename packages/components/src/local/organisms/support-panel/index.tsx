import { Column } from '@material-table/core'
import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { ADJUDICATION_PHASE, MESSAGE_SENT_INTERACTION, SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { MessageDetails, MessageInteraction, MessagePlanning, MessageSentInteraction, MessageStructure, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningMessageStructure, PlanningMessageStructureCore } from '@serge/custom-types'
import { incrementGameTime, platformIcons, PlatformStyle } from '@serge/helpers'
import { updateLocationNames } from '@serge/helpers/build/geometry-helpers'
import cx from 'classnames'
import { cloneDeep, noop, sortBy } from 'lodash'
import LRU from 'lru-cache'
import moment from 'moment'
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Rnd } from 'react-rnd'
import NewMessage from '../../form-elements/new-message'
import AdjudicationMessagesList from '../adjudication-messages-list'
import { AdjudicationRow } from '../adjudication-messages-list/types/props'
import PlanningAssets from '../planning-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningMessagesList from '../planning-messages-list'
import { collapseLocation, expandLocation } from '../planning-messages-list/helpers/collapse-location'
import { OrderRow } from '../planning-messages-list/types/props'
import { DEFAULT_SIZE, LRU_CACHE_OPTION, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TAB_ADJUDICATE, TAB_MY_FORCE, TAB_MY_ORDERS, TAB_OPP_FOR } from './constants'
import { customiseActivities } from './helpers/customise-activities'
import { customiseAssets } from './helpers/customise-assets'
import { customiseLiveOrders } from './helpers/customise-live-orders'
import { customiseLocation } from './helpers/customise-location'
import TurnFilter from './helpers/TurnFilter'
import { updateLocationTimings } from './helpers/update-location-timings'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, SupportPanelContextInterface } from './types/props'
import { customiseMissiles } from './helpers/customise-missiles'
import { customiseCyberCards } from './helpers/customise-cards'

export const SupportPanelContext = createContext<SupportPanelContextInterface>({ selectedAssets: [], setCurrentAssets: noop, setCurrentOrders: noop, setCurrentInteraction: noop, assetsCache: new LRU<string, string>(LRU_CACHE_OPTION), onSupportPanelLayoutChange: noop, getSupportPanelState: noop })

export const SupportPanel: React.FC<PropTypes> = ({
  platformTypes,
  planningMessages,
  interactionMessages,
  onRead,
  onUnread,
  onReadAll,
  channel,
  allTemplates,
  adjudicationTemplate,
  mapPostBack,
  saveMessage,
  postBackArchive,
  saveNewActivityTimeMessage,
  saveCachedNewMessageValue,
  getCachedNewMessagevalue,
  clearCachedNewMessage,
  selectedForce,
  selectedRoleId,
  selectedRoleName,
  allForces,
  forceColors,
  allPeriods,
  gameDate,
  gameTurnLength: gameTurnTime,
  currentTurn,
  phase,
  currentWargame,
  setSelectedAssets,
  selectedOrders,
  setSelectedOrders,
  setOpForcesForParent,
  setOwnForcesForParent,
  allOppAssets,
  allOwnAssets,
  onPanelWidthChange,
  draftMessage,
  onCancelDraftMessage,
  forcePlanningActivities,
  editLocation,
  attributeTypes,
  handleAdjudication,
  initialTab,
  forceTemplateData
}) => {
  const umpireInAdjudication = selectedForce.umpire && (phase === ADJUDICATION_PHASE)
  const [activeTab, setActiveTab] = useState<string>(initialTab || (umpireInAdjudication ? TAB_ADJUDICATE : TAB_MY_FORCE))
  const [isShowPanel, setShowPanel] = useState<boolean>(true)
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  const [gameTurnEndDate, setGameTurnEndDate] = useState<string>('')

  const selectedOwnAssets = useRef<AssetRow[]>([])
  const selectedOpAssets = useRef<AssetRow[]>([])

  const [sortedOwnAssets, setSortedOwnAssets] = useState<AssetRow[]>([])
  const [sortedOppAssets, setSortedOppAssets] = useState<AssetRow[]>([])

  const [filteredPlanningMessages, setFilteredPlanningMessages] = useState<MessagePlanning[]>([])
  const [allPlanningMessages, setAllPlanningMessages] = useState<MessagePlanning[]>([])
  const [filteredInteractionMessages, setFilteredInteractionMessages] = useState<MessageInteraction[]>([])
  const [turnFilter, setTurnFilter] = useState<number>(-1)
  const [localDraftMessage, setLocalDraftMessage] = useState<MessagePlanning | undefined>(undefined)
  const [activitiesForThisForce, setActivitiesForThisForce] = useState<PerForcePlanningActivitySet | undefined>(undefined)
  const [pendingLocationData, setPendingLocationData] = useState<PlannedActivityGeometry[]>([])
  const { setCurrentOrders, setCurrentAssets, setCurrentInteraction, onSupportPanelLayoutChange, getSupportPanelState } = useContext(SupportPanelContext)

  const [pendingDetailOpen, setPendingDetailOpen] = useState<undefined | OrderRow | AdjudicationRow>(undefined)
  const [pendingDetailClose, setPendingDetailClose] = useState<boolean>(false)

  const panelState = useMemo(() => getSupportPanelState(), [])

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
    onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.OPENING_TAB, tab)
  }

  const getPanelWidthFromCache = () => {
    const panelWidth = panelState[SUPPORT_PANEL_LAYOUT.SUPPORT_PANEL_WIDTH]
    if (panelWidth && !isNaN(parseInt(panelWidth))) {
      return parseInt(panelWidth)
    }
    return MIN_PANEL_WIDTH
  }

  useEffect(() => {
    const openingTab = panelState[SUPPORT_PANEL_LAYOUT.OPENING_TAB]
    if (openingTab) {
      setActiveTab(openingTab)
    }
    setTimeout(() => {
      const panelWidth = getPanelWidthFromCache()
      if (panelWidth !== MIN_PANEL_WIDTH) {
        onPanelWidthChange && onPanelWidthChange(panelWidth)
      } else {
        onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.SUPPORT_PANEL_WIDTH, '' + panelWidth)
      }
    })
  }, [])

  useEffect(() => {
    setSortedOwnAssets(sortBy(allOwnAssets, function (row) { return row.name }))
  }, [allOwnAssets])

  useEffect(() => {
    setSortedOppAssets(sortBy(allOppAssets, function (row) { return row.name }))
  }, [allOppAssets])

  useEffect(() => {
    setLocalDraftMessage(draftMessage)
    if (draftMessage) {
      setActiveTab(TAB_MY_ORDERS)
    }
  }, [draftMessage])

  useEffect(() => {
    if (gameDate !== '' && gameTurnTime) {
      const endDate = incrementGameTime(gameDate, gameTurnTime)
      setGameTurnEndDate(endDate)
    }
  }, [gameDate, gameTurnTime])

  useEffect(() => {
    if (forcePlanningActivities) {
      const thisForce = forcePlanningActivities.find((act: PerForcePlanningActivitySet) => act.force === selectedForce.uniqid)
      setActivitiesForThisForce(thisForce)
    }
  }, [forcePlanningActivities, selectedForce])

  useEffect(() => {
    let filteredMessages: MessagePlanning[] | undefined
    if (turnFilter) {
      const thisTurn = allPeriods.find((turn) => turn.gameTurn === turnFilter)
      if (thisTurn) {
        const turnEnd = incrementGameTime(thisTurn.gameDate, gameTurnTime)
        const turnStartTime = moment.utc(thisTurn.gameDate).valueOf()
        const turnEndTime = moment.utc(turnEnd).valueOf()
        filteredMessages = planningMessages.filter((msg) => {
          const pStart = moment.utc(msg.message.startDate).valueOf()
          const pEnd = moment.utc(msg.message.endDate).valueOf()
          return pEnd >= turnStartTime && pStart < turnEndTime
        })
      }
    }
    if (filteredMessages === undefined) {
      filteredMessages = planningMessages
    }
    setFilteredPlanningMessages(filteredMessages)
    setAllPlanningMessages(planningMessages)
  }, [planningMessages, turnFilter])

  useEffect(() => {
    const filteredMessages: MessageInteraction[] = interactionMessages.filter((inter) => {
      return (turnFilter === -1) || (inter.details.turnNumber === turnFilter)
    })
    setFilteredInteractionMessages(filteredMessages)
  }, [interactionMessages, turnFilter])

  const TabPanelActions = ({ onChange, className }: PanelActionTabsProps): React.ReactElement => {
    if (selectedForce.umpire) {
      return <div className={cx(styles['action-tab'], className)}>
        <p onClick={(): void => onChange(TAB_MY_FORCE)} className={cx({ [styles.active]: activeTab === TAB_MY_FORCE })}>All Forces</p>
        <p onClick={(): void => onChange(TAB_MY_ORDERS)} className={cx({ [styles.active]: activeTab === TAB_MY_ORDERS })}>Orders</p>
        <p onClick={(): void => onChange(TAB_ADJUDICATE)} className={cx({ [styles.active]: activeTab === TAB_ADJUDICATE })}>Adjudication</p>
      </div>
    } else {
      return <div className={cx(styles['action-tab'], className)}>
        <p onClick={(): void => onChange(TAB_MY_FORCE)} className={cx({ [styles.active]: activeTab === TAB_MY_FORCE })}>My Force</p>
        <p onClick={(): void => onChange(TAB_MY_ORDERS)} className={cx({ [styles.active]: activeTab === TAB_MY_ORDERS })}>Orders</p>
        <p onClick={(): void => onChange(TAB_OPP_FOR)} className={cx({ [styles.active]: activeTab === TAB_OPP_FOR })}>Other Forces</p>
      </div>
    }
  }

  const onRender = (): void => {
    console.log('=> render')
  }

  const handleSelectedAssetChange = () => {
    const allSelectedAssets = selectedOwnAssets.current.concat(selectedOpAssets.current)
    const selectedAssetIDs = allSelectedAssets.map((row: AssetRow) => row.id)
    setSelectedAssets(selectedAssetIDs)
  }

  useEffect(() => {
    onPanelWidthChange && onPanelWidthChange(isShowPanel ? MIN_PANEL_WIDTH : 0)
  }, [isShowPanel])

  const onVisibleRowsChange = (opFor: boolean, data: AssetRow[]): void => {
    if (opFor) {
      setOpForcesForParent(data)
    } else {
      setOwnForcesForParent(data)
    }
  }

  const cancelNewOrders = (): void => {
    onCancelDraftMessage && onCancelDraftMessage()
    // also the local document
    setLocalDraftMessage(undefined)
  }

  const postBack = (details: MessageDetails, message: any): void => {
    console.log('SupportPanel - save message postack', message.Reference)

    // We removed an hour from dates - due to flatPickr bug.  Replace that hour
    if (message.startDate) {
      message.startDate = moment(message.startDate).add(1, 'hour').toISOString()
    }
    if (message.endDate) {
      message.endDate = moment(message.endDate).add(1, 'hour').toISOString()
    }

    // do we have any pending geometry
    if (pendingLocationData.length > 0) {
      const plan = message as MessagePlanning
      console.log('injecting geometry', plan.message.location, pendingLocationData)
    }

    const activity: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }

    saveNewActivityTimeMessage(selectedRoleId, activity, currentWargame)

    // fix the location bits, if necessary
    const updatedDoc = localModifyForSave(message)

    saveMessage(currentWargame, details, updatedDoc)()
    // also clear local one
    setLocalDraftMessage(undefined)
  }

  const onSizeChange = (_: MouseEvent | TouchEvent, __: any, elementRef: HTMLElement): void => {
    onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.SUPPORT_PANEL_WIDTH, '' + elementRef.offsetWidth)
    onPanelWidthChange && onPanelWidthChange(elementRef.offsetWidth)
  }

  const onTurnFilterChange = (turn: number) => {
    setTurnFilter(turn)
  }

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
    // sort out which orders are currently "live"
    const turnStart = moment(gameDate)
    const turnEnd = moment(gameTurnEndDate)
    const myForceOrders = planningMessages.filter((plan) => plan.details.from.forceId === selectedForce.uniqid)
    const liveOrders: MessagePlanning[] = myForceOrders.filter((plan: MessagePlanning) => {
      const startDate = plan.message.startDate
      const endDate = plan.message.endDate
      if (startDate && endDate) {
        const startD = moment(startDate)
        const endD = moment(endDate)
        return startD.isBefore(turnEnd) && endD.isAfter(turnStart)
      } else {
        // console.log('Support panel. Orders start/end missing, so cannot offer for live orders', plan.message.Reference, plan)
        return true
      }
    })

    // specify the date formats, and default date for any flatPickr controls
    const fixDate = (element: any, gameDate: string): any => {
      if (element && element.options && element.options.flatpickr) {
        element.options.flatpickr.dateFormat = 'Z'
        element.options.flatpickr.altInput = true
        element.options.flatpickr.altFormat = 'M dHi\\Z'
        if (gameDate) {
          const localDate = moment.utc(gameDate).subtract(1, 'hour').toISOString()
          element.options.flatpickr.defaultDate = localDate
        }
      }
      return element
    }

    // check this isn't an adjudication message, since we only
    // set the default dates, if this is a planning message
    const schemaTitle: string = schema.title || 'unknown'
    if (!schemaTitle.startsWith('Adjudicat')) {
      if (gameDate && schema.properties) {
        fixDate(schema.properties.startDate, gameDate)
        fixDate(schema.properties.endDate, gameDate)
      }
    }

    // we have an issue where flatPickr is showing dates on hour out - it is adding an hour.
    // There isn't a fix for it, so manually subtract an hour - so the Z date-time is displayed
    if (document) {
      const plan = document as PlanningMessageStructure
      if (plan.startDate && plan.startDate.length > 0) {
        plan.startDate = moment.utc(plan.startDate).subtract(1, 'hour').toISOString()
      }
      if (plan.endDate && plan.endDate.length > 0) {
        plan.endDate = moment.utc(plan.endDate).subtract(1, 'hour').toISOString()
      }
    }

    // now modify the template
    const customisers: Array<{ (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }> = [
      (document, template) => customiseAssets(document, template, sortedOwnAssets, sortedOppAssets),
      (document, template) => customiseActivities(document, template, forcePlanningActivities || [], selectedForce),
      (document, template) => customiseLocation(document, template),
      (document, template) => customiseLiveOrders(document, template, liveOrders),
      (document, template) => customiseMissiles(document, template, selectedForce.uniqid, !!selectedForce.umpire, forceTemplateData),
      (document, template) => customiseCyberCards(document, template, selectedForce.uniqid, !!selectedForce.umpire, forceTemplateData)
    ]

    let current: Record<string, any> = { ...schema }
    customisers.forEach((fn) => {
      current = fn(document, current)
    })
    return current
  }

  const localModifyForSave = (document: Record<string, any>): Record<string, any> => {
    const fixedLocation = expandLocation(document)
    const planDoc = fixedLocation as PlanningMessageStructureCore
    if (planDoc.location && planDoc.ownAssets) {
      const ownAssets = planDoc.ownAssets.map((item: { asset: string }) => item.asset)
      // update the start/end time in the props
      const updatedLocations = updateLocationTimings(planDoc.Reference, planDoc.location, ownAssets, allForces, planDoc.startDate, planDoc.endDate)
      !7 && summariseLocations('before', planDoc.location)
      !7 && summariseLocations('after', updatedLocations)
      planDoc.location = updatedLocations
    }

    // also try to fix the names
    planDoc.location = planDoc.location ? updateLocationNames(planDoc.location, activitiesForThisForce) : undefined

    return planDoc
  }

  const editThisMessage = (docId: string): void => {
    const order = planningMessages.find((doc) => doc._id === docId)
    setLocalDraftMessage(order)
  }

  const copyMessage = (docId: string): void => {
    const order = planningMessages.find((doc) => doc._id === docId)

    if (order) {
      // make duplicate
      const dupe = cloneDeep(order)

      // strip out some bits
      const dupeAny = dupe as any
      console.log('Making duplicate of', dupe._id, dupe._rev, dupe.message.Reference, dupe.message.title)
      dupeAny._id = ''
      delete dupeAny._rev
      delete dupeAny.message.Reference
      dupe.message.title = dupe.message.title + ' Copy'
      dupe.details.timestamp = moment.utc().toISOString()
      console.log('copying order', docId, order, dupe)

      // clear out some bits
      setLocalDraftMessage(dupe)
    }
  }

  const assetsForOrders = (id?: string): string[] => {
    let res: string[] = []
    const plan = planningMessages.find((msg) => msg._id === id)
    if (plan) {
      const mine = plan.message.ownAssets || []
      const myIds = mine.map((val: { asset: string, number: number }): string => val.asset)
      const others = plan.message.otherAssets ? plan.message.otherAssets.map((val: { asset: string }): string => val.asset) : []
      res = myIds.concat(others)
    }
    return res
  }

  useEffect(() => {
    if (pendingDetailOpen) {
      const rowData = pendingDetailOpen
      setPendingDetailOpen(undefined)
      switch (activeTab) {
        case TAB_MY_ORDERS: {
          const order = rowData as OrderRow
          const plan = planningMessages.find((msg) => msg._id === order.id)
          if (plan) {
            const mine = plan.message.ownAssets || []
            const myIds = mine.map((val: { asset: string, number: number }): string => val.asset)
            const others = plan.message.otherAssets ? plan.message.otherAssets.map((val: { asset: string }): string => val.asset) : []
            const allIds = myIds.concat(others)
            setCurrentAssets(allIds)
            setCurrentOrders([plan._id])
          }
          break
        }
        case TAB_ADJUDICATE: {
          const adj = rowData as AdjudicationRow

          const doc = interactionMessages.find((doc) => doc._id === adj.id)
          if (doc) {
            const inter = doc.details.interaction
            if (inter) {
              // get the assets
              const assets1 = assetsForOrders(inter.orders1)
              const assets2 = assetsForOrders(inter.orders2)
              const assets3 = inter.otherAssets || []
              const allAssets = assets1.concat(assets2).concat(assets3)
              setCurrentAssets(allAssets)
              setCurrentInteraction(adj.reference)
            }
          }
        }
      }
    }
  }, [planningMessages, interactionMessages, pendingDetailOpen, activeTab])

  useEffect(() => {
    if (pendingDetailClose) {
      setPendingDetailClose(false)
      setCurrentAssets(undefined)
      setCurrentOrders([])
      if (activeTab === TAB_ADJUDICATE) {
        setCurrentInteraction(undefined)
      }
    }
  }, [pendingDetailClose, activeTab])

  const onDetailPanelOpen = (rowData: OrderRow | AdjudicationRow) => {
    // we need the page state to handle this, so push into state
    setPendingDetailOpen(rowData)
  }

  const onDetailPanelClose = () => {
    setPendingDetailClose(true)
  }

  const storeNewLocation = (geoms: PlannedActivityGeometry[]): void => {
    console.log('storing new geometries', geoms)
    setPendingLocationData(geoms)
  }

  const localEditLocation = (geoms: PlannedActivityGeometry[]): void => {
    console.log('local edit location', geoms)
    setPendingLocationData(geoms)
    editLocation && editLocation(geoms, storeNewLocation)

    // if (message.message.location) {
    //   const localCallback = (newValue: unknown): void => {
    //     pendingLocationData.push(newValue as PlannedActivityGeometry[])
    //   }
    //   // pass the location data object
    //   editLocation && editLocation(message.message.location, localCallback)
    // }
  }

  const onLocationEditorLoaded = (editorElm: HTMLDivElement) => {
    console.log('editorElm: ', editorElm)
  }

  const summariseLocations = (title: string, plans: PlannedActivityGeometry[]): void => {
    console.log('== ' + title + ' ==')
    console.table(plans.map((plan: PlannedActivityGeometry) => {
      const props = plan.geometry.properties as PlannedProps
      return {
        id: plan.uniqid,
        start: props.startDate,
        end: props.endDate
      }
    }))
  }

  const mapColumnState = (activeTab: string, columns: Column<any>[]): string => {
    const mapCols = columns.map(col => ({ field: col.field, hidden: col.hidden || false }))
    const objRes = {}
    objRes[activeTab] = mapCols
    return JSON.stringify(objRes)
  }

  const onMyForceTableColumnChange = (columns: Column<any>[]) => {
    if (activeTab === TAB_MY_FORCE) {
      onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.VISIBLE_COLUMNS, mapColumnState(activeTab, columns))
    }
  }

  const onOtherForceTableColumnChange = (columns: Column<any>[]) => {
    if (activeTab === TAB_OPP_FOR) {
      onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.VISIBLE_COLUMNS, mapColumnState(activeTab, columns))
    }
  }

  return (
    <div className={styles.root}>
      <Slide direction="right" in={isShowPanel}>
        <div className={styles.panel}>
          <Rnd
            disableDragging
            style={PANEL_STYLES}
            default={{ ...DEFAULT_SIZE, width: getPanelWidthFromCache() }}
            minWidth={MIN_PANEL_WIDTH}
            maxWidth={MAX_PANEL_WIDTH}
            minHeight={MIN_PANEL_HEIGHT}
            maxHeight={MAX_PANEL_HEIGHT}
            onResize={onSizeChange}
          >
            <div className={styles.content}>
              <div className={cx({ [styles['tab-panel']]: true, [styles.hide]: activeTab !== TAB_MY_FORCE })}>
                <PlanningAssets
                  forceColors={forceColors}
                  assets={allOwnAssets}
                  attributeTypes={attributeTypes}
                  platformStyles={platIcons}
                  forces={allForces}
                  playerForce={selectedForce}
                  platformTypes={platformTypes}
                  render={onRender}
                  opFor={false}
                  onSelectionChange={ownAssets => {
                    selectedOwnAssets.current = ownAssets
                    handleSelectedAssetChange()
                  }}
                  onVisibleRowsChange={(data): void => onVisibleRowsChange(false, data)}
                  onVisibleColumnsChange={onMyForceTableColumnChange}
                />
              </div>
              <div className={cx({ [styles['tab-panel']]: true, [styles.hide]: activeTab !== TAB_MY_ORDERS })}>
                <TurnFilter label='Show orders for turn:' allPeriods={allPeriods} value={turnFilter} onChange={onTurnFilterChange} />
                <PlanningMessagesList
                  planningMessages={filteredPlanningMessages}
                  interactionMessages={filteredInteractionMessages}
                  platformTypes={platformTypes}
                  phase={phase}
                  gameTurnEndDate={gameTurnEndDate}
                  playerRoleId={selectedRoleId}
                  isUmpire={!!selectedForce.umpire}
                  selectedForce={selectedForce}
                  selectedRoleName={selectedRoleName}
                  currentTurn={currentTurn}
                  hideForcesInChannel={false}
                  allForces={allForces}
                  forceColors={forceColors}
                  onRead={onRead}
                  onUnread={onUnread}
                  onMarkAllAsRead={onReadAll}
                  channel={channel}
                  allTemplates={allTemplates}
                  confirmCancel={true}
                  copyMessage={copyMessage}
                  customiseTemplate={localCustomiseTemplate}
                  selectedOrders={selectedOrders}
                  setSelectedOrders={setSelectedOrders}
                  postBackArchive={postBackArchive}
                  postBack={postBack}
                  turnFilter={turnFilter}
                  editLocation={editLocation}
                  modifyForSave={localModifyForSave}
                  forcePlanningActivities={forcePlanningActivities}
                  onDetailPanelOpen={onDetailPanelOpen}
                  onDetailPanelClose={onDetailPanelClose}
                  editThisMessage={editThisMessage}
                  onSupportPanelLayoutChange={onSupportPanelLayoutChange}
                  getSupportPanelState={getSupportPanelState}
                />
                {localDraftMessage && <NewMessage
                  orderableChannel={true}
                  privateMessage={!!selectedForce.umpire}
                  templates={allTemplates}
                  title={'New Orders'}
                  hideTemplateSelector={true}
                  saveCachedNewMessageValue={saveCachedNewMessageValue}
                  getCachedNewMessagevalue={getCachedNewMessagevalue}
                  clearCachedNewMessage={clearCachedNewMessage}
                  selectedRole={selectedRoleId}
                  selectedForce={selectedForce}
                  selectedRoleName={selectedRoleName}
                  confirmCancel={true}
                  onCancel={cancelNewOrders}
                  channel={channel}
                  currentTurn={currentTurn}
                  gameDate={gameDate}
                  postBack={postBack}
                  customiseTemplate={localCustomiseTemplate}
                  modifyForEdit={(document) => collapseLocation(document, activitiesForThisForce)}
                  modifyForSave={localModifyForSave}
                  draftMessage={localDraftMessage}
                  editCallback={localEditLocation}
                />}
              </div>
              <div className={cx({ [styles['tab-panel']]: true, [styles.hide]: activeTab !== TAB_OPP_FOR })}>
                <PlanningAssets
                  forceColors={forceColors}
                  platformStyles={platIcons}
                  attributeTypes={attributeTypes}
                  assets={allOppAssets}
                  platformTypes={platformTypes}
                  forces={allForces}
                  playerForce={selectedForce}
                  render={onRender}
                  opFor={true}
                  onSelectionChange={opAssets => {
                    selectedOpAssets.current = opAssets
                    handleSelectedAssetChange()
                  }}
                  onVisibleRowsChange={(data): void => onVisibleRowsChange(true, data)}
                  onVisibleColumnsChange={onOtherForceTableColumnChange}
                />
              </div>
              <div className={cx({ [styles['tab-panel']]: true, [styles.hide]: activeTab !== TAB_ADJUDICATE })}>
                <TurnFilter label='Show interactions for turn:' allPeriods={allPeriods} value={turnFilter} onChange={onTurnFilterChange} />
                <AdjudicationMessagesList
                  interactionMessages={filteredInteractionMessages}
                  allPlanningMessages={allPlanningMessages}
                  turnPlanningMessages={filteredPlanningMessages}
                  forces={allForces}
                  currentTurn={currentTurn}
                  periods={allPeriods}
                  gameDate={gameDate}
                  gameTurnLength={gameTurnTime}
                  phase={phase}
                  playerRoleId={selectedRoleId}
                  forceColors={forceColors}
                  onRead={onRead}
                  onUnread={onUnread}
                  onMarkAllAsRead={onReadAll}
                  mapPostBack={mapPostBack}
                  channel={channel}
                  currentWargame={currentWargame}
                  template={adjudicationTemplate}
                  customiseTemplate={localCustomiseTemplate}
                  forcePlanningActivities={forcePlanningActivities}
                  turnFilter={turnFilter}
                  platformTypes={platformTypes}
                  onDetailPanelOpen={onDetailPanelOpen}
                  onDetailPanelClose={onDetailPanelClose}
                  handleAdjudication={handleAdjudication}
                  postBack={postBack}
                  onLocationEditorLoaded={onLocationEditorLoaded}
                />
              </div>
              <div className={styles['resize-indicator-container']} >
                <div className={styles['resize-indicator-icon']} >
                  <MoreVert fontSize='large' color='primary' style={{ marginLeft: 0 }} />
                </div>
              </div>
            </div>
          </Rnd>
          <TabPanelActions onChange={onTabChange} />
        </div>
      </Slide>
      <TabPanelActions onChange={onTabChange} className={styles['secondary-action-tab']} />
    </div>
  )
}

const areEqual = (prevProps: PropTypes, nextProps: PropTypes): boolean => JSON.stringify(prevProps) === JSON.stringify(nextProps)

export default React.memo(SupportPanel, areEqual)
