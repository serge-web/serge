import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { ADJUDICATION_PHASE, MESSAGE_SENT_INTERACTION } from '@serge/config'
import { MessageDetails, MessageInteraction, MessagePlanning, MessageSentInteraction, MessageStructure } from '@serge/custom-types'
import { forceColors, ForceStyle, platformIcons, PlatformStyle } from '@serge/helpers'
import cx from 'classnames'
import moment from 'moment'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Rnd } from 'react-rnd'
import NewMessage from '../../form-elements/new-message'
import AdjudicationMessagesList from '../adjudication-messages-list'
import { AdjudicationRow } from '../adjudication-messages-list/types/props'
import PlanningAssets from '../planning-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningMessagesList from '../planning-messages-list'
import { OrderRow } from '../planning-messages-list/types/props'
import { DEFAULT_SIZE, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TABS } from './constants'
import { customiseActivities } from './helpers/customise-activities'
import { customiseAssets } from './helpers/customise-assets'
import { customiseDate } from './helpers/customise-date'
import { customiseLocation } from './helpers/customise-location'
import TurnFilter, { SHOW_ALL_TURNS } from './helpers/TurnFilter'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, SupportPanelContextInterface, TabPanelProps } from './types/props'

export const SupportPanelContext = createContext<SupportPanelContextInterface>({ selectedAssets: [] })

export const SupportPanel: React.FC<PropTypes> = ({
  platformTypes,
  planningMessages,
  interactionMessages,
  turnPresentation,
  onRead,
  onUnread,
  onReadAll,
  channel,
  allTemplates,
  adjudicationTemplate,
  saveMessage,
  saveNewActivityTimeMessage,
  saveCachedNewMessageValue,
  getCachedNewMessagevalue,
  clearCachedNewMessage,
  selectedForce,
  selectedRoleId,
  selectedRoleName,
  allForces,
  gameDate,
  gameTurnTime,
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
  handleAdjudication
}) => {
  const umpireInAdjudication = selectedForce.umpire && (phase === ADJUDICATION_PHASE)
  console.log('support', selectedForce, phase)
  const [activeTab, setActiveTab] = useState<string>(umpireInAdjudication ? TABS[3] : TABS[0])
  const [isShowPanel, setShowPanel] = useState<boolean>(true)
  const [forceCols] = useState<ForceStyle[]>(forceColors(allForces))
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  const [selectedOwnAssets, setSelectedOwnAssets] = useState<AssetRow[]>([])
  const [selectedOpAssets, setSelectedOpAssets] = useState<AssetRow[]>([])

  const [filteredPlanningMessages, setFilteredPlanningMessages] = useState<MessagePlanning[]>([])
  const [filteredInteractionMessages, setFilteredInteractionMessages] = useState<MessageInteraction[]>([])
  const [turnFilter, setTurnFilter] = useState<number>(-1)

  const ORDERS_TAB = 1

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
  }

  useEffect(() => {
    const filtered = turnFilter === SHOW_ALL_TURNS ? planningMessages : planningMessages.filter((msg) => msg.details.turnNumber === turnFilter)
    setFilteredPlanningMessages(filtered)
  }, [planningMessages, turnFilter])

  useEffect(() => {
    const filtered = turnFilter === SHOW_ALL_TURNS ? interactionMessages : interactionMessages.filter((msg) => msg.details.turnNumber === turnFilter)
    setFilteredInteractionMessages(filtered)
  }, [interactionMessages, turnFilter])

  const TabPanel = (props: TabPanelProps): React.ReactElement => {
    const { children, active, ...other } = props
    return (
      <div
        hidden={!active}
        {...other}
      >
        {children}
      </div>
    )
  }

  const TabPanelActions = ({ onChange, className }: PanelActionTabsProps): React.ReactElement => {
    return (
      <div className={cx(styles['action-tab'], className)}>
        <p onClick={(): void => onChange(TABS[0])} className={cx({ [styles.active]: activeTab === TABS[0] })}>My Force</p>
        <p onClick={(): void => onChange(TABS[1])} className={cx({ [styles.active]: activeTab === TABS[1] })}>Orders</p>
        <p onClick={(): void => onChange(TABS[2])} className={cx({ [styles.active]: activeTab === TABS[2] })}>OPFOR</p>
        {selectedForce.umpire && <p onClick={(): void => onChange(TABS[3])} className={cx({ [styles.active]: activeTab === TABS[3] })}>Adjudication</p>
        }
      </div>
    )
  }

  const onRender = (): void => {
    console.log('=> render')
  }

  useEffect(() => {
    const allSelectedAssets = selectedOwnAssets.concat(selectedOpAssets)
    const selectedAssetIDs = allSelectedAssets.map((row: AssetRow) => row.id)
    setSelectedAssets(selectedAssetIDs)
  }, [selectedOwnAssets, selectedOpAssets])

  useEffect(() => {
    // if there is a draft message, open the `my orders` tab
    if (draftMessage) {
      setActiveTab(TABS[ORDERS_TAB])
    }
  }, [draftMessage])

  useEffect(() => {
    onPanelWidthChange && onPanelWidthChange(isShowPanel ? 330 : 0)
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
  }

  const postBack = (details: MessageDetails, message: any): void => {
    const activity: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }
    saveNewActivityTimeMessage(selectedRoleId, activity, currentWargame)
    saveMessage(currentWargame, details, message)()
  }

  const onSizeChange = (_: MouseEvent | TouchEvent, __: any, elementRef: HTMLElement): void => {
    onPanelWidthChange && onPanelWidthChange(elementRef.offsetWidth)
  }

  const onTurnFilterChange = (turn: number) => {
    setTurnFilter(turn)
  }

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
    const customisers: Array<{ (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }> = [
      (document, template) => customiseAssets(document, template, allOwnAssets, allOppAssets),
      (document, template) => customiseActivities(document, template, forcePlanningActivities || [], selectedForce),
      (document, template) => customiseLocation(document, template),
      (document, template) => customiseDate(document, template, moment(gameDate).valueOf(), gameTurnTime)
    ]

    let current: Record<string, any> = schema
    customisers.forEach((fn) => {
      current = fn(document, current)
    })
    return current
  }

  const onDetailPanelOpen = (rowData: OrderRow | AdjudicationRow) => {
    console.log('onDetailPanelOpen called: ', rowData)
  }

  const onDetailPanelClose = (rowData: OrderRow | AdjudicationRow) => {
    console.log('onDetailPanelClose called ', rowData)
  }

  const SlideComponent = useMemo(() => (
    <Slide direction="right" in={isShowPanel}>
      <div className={styles.panel}>
        <Rnd
          disableDragging
          style={PANEL_STYLES}
          default={DEFAULT_SIZE}
          minWidth={MIN_PANEL_WIDTH}
          maxWidth={MAX_PANEL_WIDTH}
          minHeight={MIN_PANEL_HEIGHT}
          maxHeight={MAX_PANEL_HEIGHT}
          onResize={onSizeChange}
        >
          <div className={styles.content}>
            <TabPanel className={styles['tab-panel']} value={TABS[0]} active={activeTab === TABS[0]}>
              {
                activeTab === TABS[0] &&
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
                  onSelectionChange={setSelectedOwnAssets}
                  onVisibleRowsChange={(data): void => onVisibleRowsChange(false, data)}
                />
              }
            </TabPanel>
            <TabPanel className={styles['tab-panel']} value={TABS[ORDERS_TAB]} active={activeTab === TABS[ORDERS_TAB]} >
              {activeTab === TABS[ORDERS_TAB] &&
                <div className={styles['order-group']}>
                  <TurnFilter label='Show orders for turn:' currentTurn={currentTurn} value={turnFilter} onChange={onTurnFilterChange} />
                  <PlanningMessagesList
                    messages={filteredPlanningMessages}
                    gameDate={gameDate}
                    playerForceId={selectedForce.uniqid}
                    playerRoleId={selectedRoleId}
                    isUmpire={!!selectedForce.umpire}
                    turnPresentation={turnPresentation}
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
                    postBack={postBack}
                    turnFilter={turnFilter}
                    editLocation={editLocation}
                    forcePlanningActivities={forcePlanningActivities}
                    onDetailPanelOpen={onDetailPanelOpen}
                    onDetailPanelClose={onDetailPanelClose}
                  />
                  {draftMessage && <NewMessage
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
                    draftMessage={draftMessage}
                  />}
                </div>
              }
            </TabPanel>

            <TabPanel className={styles['tab-panel']} value={TABS[2]} active={activeTab === TABS[2]} >
              {activeTab === TABS[2] &&
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
                  onSelectionChange={setSelectedOpAssets}
                  onVisibleRowsChange={(data): void => onVisibleRowsChange(true, data)}
                />
              }
            </TabPanel>
            {
              selectedForce.umpire && <TabPanel className={styles['tab-panel']} value={TABS[3]} active={activeTab === TABS[3]} >
                {activeTab === TABS[3] &&
                  <div className={styles['order-group']}>
                    <TurnFilter label='Show interactions for turn:' currentTurn={currentTurn} value={turnFilter} onChange={onTurnFilterChange} />
                    <AdjudicationMessagesList
                      interactionMessages={filteredInteractionMessages}
                      planningMessages={filteredPlanningMessages}
                      forces={allForces}
                      gameDate={gameDate}
                      playerForceId={selectedForce.uniqid}
                      playerRoleId={selectedRoleId}
                      isUmpire={!!selectedForce.umpire}
                      turnPresentation={turnPresentation}
                      forceColors={forceCols}
                      hideForcesInChannel={false}
                      onRead={onRead}
                      onUnread={onUnread}
                      onMarkAllAsRead={onReadAll}
                      channel={channel}
                      template={adjudicationTemplate}
                      customiseTemplate={localCustomiseTemplate}
                      selectedOrders={selectedOrders}
                      setSelectedOrders={setSelectedOrders}
                      forcePlanningActivities={forcePlanningActivities}
                      turnFilter={turnFilter}
                      platformTypes={platformTypes}
                      onDetailPanelOpen={onDetailPanelOpen}
                      onDetailPanelClose={onDetailPanelClose}
                      handleAdjudication={handleAdjudication}
                      postBack={postBack}
                    />
                  </div>
                }
              </TabPanel>
            }
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
  ), [
    isShowPanel,
    activeTab,
    allForces,
    filteredPlanningMessages,
    filteredInteractionMessages,
    selectedRoleId,
    turnFilter,
    draftMessage,
    platformTypes,
    planningMessages
  ]
  )

  return (
    <div className={styles.root}>
      {SlideComponent}
      <TabPanelActions onChange={onTabChange} className={styles['secondary-action-tab']} />
    </div>
  )
}

const areEqual = (prevProps: PropTypes, nextProps: PropTypes): boolean => JSON.stringify(prevProps) === JSON.stringify(nextProps)

export default React.memo(SupportPanel, areEqual)