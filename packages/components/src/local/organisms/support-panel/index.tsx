import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import { forceColors, ForceStyle, platformIcons, PlatformStyle } from '@serge/helpers'
import cx from 'classnames'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import PlanningAssets from '../planning-assets'
import { Row } from '../planning-assets/types/props'
import PlanningMessagesList from '../planning-messages-list'
import { DEFAULT_SIZE, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TABS } from './constants'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, TabPanelProps } from './types/props'

export const SupportPanel: React.FC<PropTypes> = ({
  forceIcons,
  forceNames,
  forces,
  platformTypes,
  hideForcesInChannel,
  messages,
  selectedForce,
  selectedRole,
  turnPresentation,
  gameDate,
  onRead,
  onUnread,
  onReadAll,
  channel,
  templates
}) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0])
  const [isShowPanel, setShowPanel] = useState<boolean>(false)
  const [forceCols] = useState<ForceStyle[]>(forceColors(forces))
  const [platIcons] = useState<PlatformStyle[]>(platformIcons(platformTypes))

  // handle selections from asset tables
  // const [selectedItem, setSelectedItem] = useState<Asset['uniqid'] | undefined>(undefined)
  // const [opForces, setOpForces] = useState<Row[]>([])
  // const [ownForces, setOwnForces] = useState<Row[]>([])

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

  const TabPanelActions = ({ onChange, className }: PanelActionTabsProps): React.ReactElement => {
    return (
      <div className={cx(styles['action-tab'], className)}>
        <p onClick={(): void => onChange(TABS[0])} className={cx({ [styles.active]: activeTab === TABS[0] })}>My Force</p>
        <p onClick={(): void => onChange(TABS[1])} className={cx({ [styles.active]: activeTab === TABS[1] })}>My Orders</p>
        <p onClick={(): void => onChange(TABS[2])} className={cx({ [styles.active]: activeTab === TABS[2] })}>OPFOR</p>
      </div>
    )
  }

  const onRender = (): void => {
    console.log('=> render')
  }

  const onSelectionChange = (opFor: boolean, data: Row[]): void => {
    console.log('new selection', opFor, data)
  }

  const onVisibleRowsChange = (opFor: boolean, data: Row[]): void => {
    console.log('rows change', opFor, data)
  }

  return (
    <div className={styles.root}>
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
                  <PlanningAssets forceColors={forceCols} platformStyles={platIcons} forces={forces}
                    playerForce={selectedForce} isUmpire={true} render={onRender} opFor={false}
                    onSelectionChange={(data): void => onSelectionChange(false, data)} onVisibleRowsChange={(data): void => onVisibleRowsChange(false, data)} />
                }
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={TABS[1]} active={activeTab === TABS[1]} >
                {activeTab === TABS[1] &&
                  <PlanningMessagesList
                    messages={messages}
                    gameDate={gameDate}
                    playerForceId={selectedForce}
                    playerRoleId={selectedRole}
                    isUmpire={true}
                    icons={forceIcons}
                    colors={forceCols.map((item: ForceStyle) => item.color)}
                    names={forceNames}
                    turnPresentation={turnPresentation}
                    hideForcesInChannel={!!hideForcesInChannel}
                    onRead={onRead}
                    onUnread={onUnread}
                    onMarkAllAsRead={onReadAll}
                    channel={channel}
                    templates={templates}
                  />
                }
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={TABS[2]} active={activeTab === TABS[2]} >
                {activeTab === TABS[2] &&
                  <PlanningAssets forceColors={forceCols} platformStyles={platIcons} forces={forces}
                    playerForce={selectedForce} isUmpire={true} render={onRender} opFor={true}
                    onSelectionChange={(data): void => onSelectionChange(true, data)} onVisibleRowsChange={(data): void => onVisibleRowsChange(true, data)} />
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
      <TabPanelActions onChange={onTabChange} className={styles['secondary-action-tab']} />
    </div>
  )
}

export default SupportPanel
