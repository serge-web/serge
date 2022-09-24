import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { MESSAGE_SENT_INTERACTION } from '@serge/config'
import { MessageDetails, MessageSentInteraction } from '@serge/custom-types'
import { forceColors, ForceStyle, platformIcons, PlatformStyle } from '@serge/helpers'
import cx from 'classnames'
import { isEqual } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { Rnd } from 'react-rnd'
import NewMessage from '../../form-elements/new-message'
import AdjudicationMessagesList from '../adjudication-messages-list'
import PlanningAssets from '../planning-assets'
import { AssetRow } from '../planning-assets/types/props'
import PlanningMessagesList from '../planning-messages-list'
import { DEFAULT_SIZE, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TABS } from './constants'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, TabPanelProps } from './types/props'

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
  setSelectedItem,
  setOpForcesForParent,
  setOwnForcesForParent
}) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[3])
  const [isShowPanel, setShowPanel] = useState<boolean>(true)
  const [forceCols] = useState<ForceStyle[]>(forceColors(allForces))
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  const [opForces, setOpForces] = useState<AssetRow[]>([])
  const [ownForces, setOwnForces] = useState<AssetRow[]>([])

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
  }

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
    const oldOwnAssets = schema.properties?.Assets?.items?.properties?.FEName?.enum
    if (oldOwnAssets) {
      schema.properties.Assets.items.properties.FEName.enum = ownForces.map((asset: AssetRow) => asset.name)
    }
    const oldOwnTargets = schema.properties?.Targets?.items?.properties?.FEName?.enum
    if (oldOwnTargets) {
      schema.properties.Targets.items.properties.FEName.enum = opForces.map((asset: AssetRow) => asset.name)
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

  const onSelectionChange = (opFor: boolean, data: AssetRow[]): void => {
    console.log('new selection', opFor, data.length)
    if (data.length > 0) {
      setSelectedItem(data[0].id)
      // setSelectedItemParent(data[0].id)
    } else {
      setSelectedItem(undefined)
      // setSelectedItemParent(undefined)
    }
  }

  const onVisibleRowsChange = (opFor: boolean, data: AssetRow[]): void => {
    console.log('rows change', opFor, data.length)
    if (opFor) {
      setOpForces(data)
      setOpForcesForParent(data)
    } else {
      setOwnForces(data)
      setOwnForcesForParent(data)
    }
  }

  const postBack = (details: MessageDetails, message: any): void => {
    const activity: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }
    saveNewActivityTimeMessage(selectedRoleId, activity, currentWargame)
    saveMessage(currentWargame, details, message)
  }

  useEffect(() => {
    console.log('=> [SupportPanel]: ownForces update: ', ownForces && ownForces.length, 'items')
  }, [ownForces])

  useEffect(() => {
    console.log('=> [SupportPanel]: opForces update: ', opForces && opForces.length, 'items')
  }, [opForces])

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
        >
          <div className={styles.content}>
            <TabPanel className={styles['tab-panel']} value={TABS[0]} active={activeTab === TABS[0]}>
              {activeTab === TABS[0] &&
                <PlanningAssets forceColors={forceCols} platformStyles={platIcons} forces={allForces}
                  playerForce={selectedForce?.uniqid || ''} isUmpire={true} render={onRender} opFor={false}
                  onSelectionChange={(data): void => onSelectionChange(false, data)} onVisibleRowsChange={(data): void => onVisibleRowsChange(false, data)} />
              }
            </TabPanel>
            <TabPanel className={styles['tab-panel']} value={TABS[1]} active={activeTab === TABS[1]} >
              {activeTab === TABS[1] &&
                <div className={styles['order-group']}>
                  <PlanningMessagesList
                    messages={messages}
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
                  />
                  <NewMessage
                    orderableChannel={true}
                    privateMessage={!!selectedForce.umpire}
                    templates={templates}
                    selectedRole={selectedRoleId}
                    selectedForce={selectedForce}
                    selectedRoleName={selectedRoleName}
                    confirmCancel={false}
                    channel={channel}
                    currentTurn={currentTurn}
                    gameDate={gameDate}
                    postBack={postBack}
                    customiseTemplate={customiseTemplate}
                  />
                </div>
              }
            </TabPanel>

            <TabPanel className={styles['tab-panel']} value={TABS[2]} active={activeTab === TABS[2]} >
              {activeTab === TABS[2] &&
                <PlanningAssets forceColors={forceCols} platformStyles={platIcons} forces={allForces}
                  playerForce={selectedForce?.uniqid || ''} isUmpire={true} render={onRender} opFor={true}
                  onSelectionChange={(data): void => onSelectionChange(true, data)} onVisibleRowsChange={(data): void => onVisibleRowsChange(true, data)} />
              }
            </TabPanel>
            <TabPanel className={styles['tab-panel']} value={TABS[3]} active={activeTab === TABS[3]} >
              {activeTab === TABS[3] &&
                <div className={styles['order-group']}>
                  <AdjudicationMessagesList
                    messages={messages}
                    forces={allForces}
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
                    template={adjudicationTemplate}
                    customiseTemplate={customiseTemplate}
                    setSelectedItem={setSelectedItem}
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
    messages,
    selectedRoleId
  ]
  )

  return (
    <div className={styles.root}>
      {SlideComponent}
      <TabPanelActions onChange={onTabChange} className={styles['secondary-action-tab']} />
    </div>
  )
}

const areEqual = (prevProps: PropTypes, nextProps: PropTypes): boolean => !isEqual(prevProps, nextProps)

export default React.memo(SupportPanel, areEqual)
