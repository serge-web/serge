import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { ADJUDICATION_PHASE, expiredStorage, MESSAGE_SENT_INTERACTION, SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { MessageDetails, MessageInteraction, MessagePlanning, MessageSentInteraction, MessageStructure, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningMessageStructureCore } from '@serge/custom-types'
import { forceColors, ForceStyle, incrementGameTime, platformIcons, PlatformStyle } from '@serge/helpers'
import { updateLocationNames } from '@serge/helpers/build/geometry-helpers'
import cx from 'classnames'
import { Column } from '@material-table/core'
import { noop } from 'lodash'
import LRU from 'lru-cache'
import moment from 'moment'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
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

export const SupportPanelContext = createContext<SupportPanelContextInterface>({ selectedAssets: [], setCurrentAssets: noop, setCurrentOrders: noop, setCurrentInteraction: noop, assetsCache: new LRU<string, string>(LRU_CACHE_OPTION), onSupportPanelLayoutChange: noop })

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
  initialTab
}) => {
  const umpireInAdjudication = selectedForce.umpire && (phase === ADJUDICATION_PHASE)
  const [activeTab, setActiveTab] = useState<string>(initialTab || (umpireInAdjudication ? TAB_ADJUDICATE : TAB_MY_FORCE))
  const [isShowPanel, setShowPanel] = useState<boolean>(true)
  const [forceCols] = useState<ForceStyle[]>(forceColors(allForces))
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  const [gameTurnEndDate, setGameTurnEndDate] = useState<string>('')

  const selectedOwnAssets = useRef<AssetRow[]>([])
  const selectedOpAssets = useRef<AssetRow[]>([])

  const [filteredPlanningMessages, setFilteredPlanningMessages] = useState<MessagePlanning[]>([])
  const [filteredInteractionMessages, setFilteredInteractionMessages] = useState<MessageInteraction[]>([])
  const [turnFilter, setTurnFilter] = useState<number>(-1)
  const [localDraftMessage, setLocalDraftMessage] = useState<MessagePlanning | undefined>(undefined)
  const [activitiesForThisForce, setActivitiesForThisForce] = useState<PerForcePlanningActivitySet | undefined>(undefined)
  const [pendingLocationData, setPendingLocationData] = useState<PlannedActivityGeometry[]>([])
  const { setCurrentOrders, setCurrentAssets, setCurrentInteraction, onSupportPanelLayoutChange } = useContext(SupportPanelContext)

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
    onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.OPENING_TAB, tab)
  }

  const getPanelWidthFromCache = () => {
    const panelWidth = expiredStorage.getItem(SUPPORT_PANEL_LAYOUT.SUPPORT_PANEL_WIDTH)
    if (panelWidth && !isNaN(parseInt(panelWidth))) {
      return parseInt(panelWidth)
    }
    return MIN_PANEL_WIDTH
  }

  useEffect(() => {
    const openingTab = expiredStorage.getItem(SUPPORT_PANEL_LAYOUT.OPENING_TAB)
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
  }, [planningMessages, turnFilter])

  useEffect(() => {
    let filteredMessages: MessageInteraction[] | undefined
    if (turnFilter) {
      const thisTurn = allPeriods.find((turn) => turn.gameTurn === turnFilter)
      if (thisTurn) {
        const turnEnd = incrementGameTime(thisTurn.gameDate, gameTurnTime)
        const turnStartTime = moment.utc(thisTurn.gameDate).valueOf()
        const turnEndTime = moment.utc(turnEnd).valueOf()
        filteredMessages = interactionMessages.filter((msg) => {
          if (msg.details.interaction) {
            const pStart = moment.utc(msg.details.interaction.startTime).valueOf()
            const pEnd = moment.utc(msg.details.interaction.endTime).valueOf()
            return pEnd >= turnStartTime && pStart < turnEndTime
          } else {
            console.log('interaction missing')
            return false
          }
        })
      }
    }
    if (filteredMessages === undefined) {
      filteredMessages = interactionMessages
    }
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

    const fixDate = (element: any, gameDate: string): any => {
      if (element && element.options && element.options.flatpickr) {
        element.options.flatpickr.defaultDate = gameDate
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

    // now modify the template
    const customisers: Array<{ (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }> = [
      (document, template) => customiseAssets(document, template, allOwnAssets, allOppAssets),
      (document, template) => customiseActivities(document, template, forcePlanningActivities || [], selectedForce),
      (document, template) => customiseLocation(document, template),
      (document, template) => customiseLiveOrders(document, template, liveOrders)
    ]

    let current: Record<string, any> = { ...schema }
    customisers.forEach((fn) => {
      current = fn(document, current)
    })
    return current
  }

  const editThisMessage = (docId: string): void => {
    const order = planningMessages.find((doc) => doc._id === docId)
    setLocalDraftMessage(order)
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

  const onDetailPanelOpen = (rowData: OrderRow | AdjudicationRow) => {
    // if this is an orders item, or an adjudication, mark the relevant data
    // as 'current
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

  const onDetailPanelClose = () => {
    setCurrentAssets([])
    setCurrentOrders([])
    if (activeTab === TAB_ADJUDICATE) {
      setCurrentInteraction(undefined)
    }
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
                  forceColors={forceCols}
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
                  messages={filteredPlanningMessages}
                  gameDate={gameDate}
                  phase={phase}
                  gameTurnEndDate={gameTurnEndDate}
                  playerRoleId={selectedRoleId}
                  isUmpire={!!selectedForce.umpire}
                  selectedForce={selectedForce}
                  selectedRoleName={selectedRoleName}
                  currentTurn={currentTurn}
                  hideForcesInChannel={false}
                  onRead={onRead}
                  onUnread={onUnread}
                  onMarkAllAsRead={onReadAll}
                  channel={channel}
                  allTemplates={allTemplates}
                  confirmCancel={true}
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
                  forceColors={forceCols}
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
                  planningMessages={filteredPlanningMessages}
                  forces={allForces}
                  currentTurn={currentTurn}
                  periods={allPeriods}
                  gameDate={gameDate}
                  gameTurnLength={gameTurnTime}
                  playerRoleId={selectedRoleId}
                  forceColors={forceCols}
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
