import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { MESSAGE_SENT_INTERACTION } from '@serge/config'
import { MessageDetails, MessagePlanning, MessageSentInteraction } from '@serge/custom-types'
import { forceColors, ForceStyle, platformIcons, PlatformStyle } from '@serge/helpers'
import cx from 'classnames'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Rnd } from 'react-rnd'
import NewMessage from '../../form-elements/new-message'
import AdjudicationMessagesList from '../adjudication-messages-list'
import PlanningAssets from '../planning-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningMessagesList from '../planning-messages-list'
import { DEFAULT_SIZE, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TABS } from './constants'
import TurnFilter, { SHOW_ALL_TURNS } from './helpers/TurnFilter'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, SupportPanelContextInterface, TabPanelProps } from './types/props'

export const SupportPanelContext = createContext<SupportPanelContextInterface>({ selectedAssets: [] })

export const SupportPanel: React.FC<PropTypes> = ({
  platformTypes,
  messages,
  turnPresentation,
  onRead,
  onUnread,
  onReadAll,
  channel,
  templates,
  adjudicationTemplate,
  saveMessage,
  saveNewActivityTimeMessage,
  selectedForce,
  selectedRoleId,
  selectedRoleName,
  allForces,
  gameDate,
  currentTurn,
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
  onCancelDraftMessage
}) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0])
  const [isShowPanel, setShowPanel] = useState<boolean>(true)
  const [forceCols] = useState<ForceStyle[]>(forceColors(allForces))
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  const [selectedOwnAssets, setSelectedOwnAssets] = useState<AssetRow[]>([])
  const [selectedOpAssets, setSelectedOpAssets] = useState<AssetRow[]>([])

  const [filteredMessages, setFilteredMessages] = useState<MessagePlanning[]>([])
  const [turnFilter, setTurnFilter] = useState<number>(-1)

  const ORDERS_TAB = 1

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
  }

  useEffect(() => {
    const filtered = turnFilter === SHOW_ALL_TURNS ? messages : messages.filter((msg) => msg.details.turnNumber === turnFilter)
    setFilteredMessages(filtered)
  }, [messages, turnFilter])

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

  const customiseTemplate = (schema: Record<string, any>): Record<string, any> => {
    if (schema) {
      const oldOwnAssets = schema.properties?.ownAssets?.items?.properties?.FEName?.enum
      if (oldOwnAssets) {
        schema.properties.ownAssets.items.properties.FEName.enum = allOwnAssets.map((asset: AssetRow) => asset.name)
      }
      const oldOwnTargets = schema.properties?.otherAssets?.items?.properties?.FEName?.enum
      if (oldOwnTargets) {
        schema.properties.otherAssets.items.properties.FEName.enum = allOppAssets.map((asset: AssetRow) => asset.name)
      }
    }
    return schema
  }

  const TabPanelActions = ({ onChange, className }: PanelActionTabsProps): React.ReactElement => {
    return (
      <div className={cx(styles['action-tab'], className)}>
        <p onClick={(): void => onChange(TABS[0])} className={cx({ [styles.active]: activeTab === TABS[0] })}>My Force</p>
        <p onClick={(): void => onChange(TABS[1])} className={cx({ [styles.active]: activeTab === TABS[1] })}>My Orders</p>
        <p onClick={(): void => onChange(TABS[2])} className={cx({ [styles.active]: activeTab === TABS[2] })}>OPFOR</p>
        <p onClick={(): void => onChange(TABS[3])} className={cx({ [styles.active]: activeTab === TABS[3] })}>Adjudication</p>
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
                  platformStyles={platIcons}
                  forces={allForces}
                  playerForce={selectedForce}
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
                    messages={filteredMessages}
                    gameDate={gameDate}
                    playerForceId={selectedForce.uniqid}
                    playerRoleId={selectedRoleId}
                    isUmpire={!!selectedForce.umpire}
                    turnPresentation={turnPresentation}
                    hideForcesInChannel={false}
                    onRead={onRead}
                    onUnread={onUnread}
                    onMarkAllAsRead={onReadAll}
                    channel={channel}
                    templates={templates}
                    customiseTemplate={customiseTemplate}
                    selectedOrders={selectedOrders}
                    setSelectedOrders={setSelectedOrders}
                  />
                  <NewMessage
                    orderableChannel={true}
                    privateMessage={!!selectedForce.umpire}
                    templates={templates}
                    selectedRole={selectedRoleId}
                    selectedForce={selectedForce}
                    selectedRoleName={selectedRoleName}
                    confirmCancel={false}
                    onCancel={cancelNewOrders}
                    channel={channel}
                    currentTurn={currentTurn}
                    gameDate={gameDate}
                    postBack={postBack}
                    customiseTemplate={customiseTemplate}
                    draftMessage={draftMessage}
                  />
                </div>
              }
            </TabPanel>

            <TabPanel className={styles['tab-panel']} value={TABS[2]} active={activeTab === TABS[2]} >
              {activeTab === TABS[2] &&
                <PlanningAssets
                  forceColors={forceCols}
                  platformStyles={platIcons}
                  assets={allOppAssets}
                  forces={allForces}
                  playerForce={selectedForce}
                  render={onRender}
                  opFor={true}
                  onSelectionChange={setSelectedOpAssets}
                  onVisibleRowsChange={(data): void => onVisibleRowsChange(true, data)}
                />
              }
            </TabPanel>
            <TabPanel className={styles['tab-panel']} value={TABS[3]} active={activeTab === TABS[3]} >
              {activeTab === TABS[3] &&
                <div className={styles['order-group']}>
                  <TurnFilter label='Show interactions for turn:' currentTurn={currentTurn} value={turnFilter} onChange={onTurnFilterChange} />
                  <AdjudicationMessagesList
                    messages={filteredMessages}
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
                    customiseTemplate={customiseTemplate}
                    selectedOrders={selectedOrders}
                    setSelectedOrders={setSelectedOrders}
                  />
                </div>
              }
            </TabPanel>
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
    filteredMessages,
    selectedRoleId,
    turnFilter
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
