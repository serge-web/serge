import Slide from '@material-ui/core/Slide'
import MoreVert from '@material-ui/icons/MoreVert'
import cx from 'classnames'
import React, { ElementRef, useRef, useState } from 'react'
import { ResizableDelta, Rnd } from 'react-rnd'
import PlanningAssets from '../planning-assets'
import PlanningMessagesList from '../planning-messages-list'
import { DEFAULT_SIZE, MAX_PANEL_HEIGHT, MAX_PANEL_WIDTH, MIN_PANEL_HEIGHT, MIN_PANEL_WIDTH, PANEL_STYLES, TABS } from './constants'
import styles from './styles.module.scss'
import PropTypes, { PanelActionTabsProps, TabPanelProps } from './types/props'

export const SupportPanel: React.FC<PropTypes> = ({
  forceIcons,
  forceColors,
  forceNames,
  hideForcesInChannel,
  messages,
  selectedForce,
  turnPresentation,
  onRead,
  onUnread,
  onReadAll
}) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0])
  const [initialWidth, setInitialWidth] = useState<number>(MIN_PANEL_WIDTH)
  const [isShowPanel, setShowPanel] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const onTabChange = (tab: string): void => {
    setShowPanel(activeTab !== tab || !isShowPanel)
    setActiveTab(tab)
  }

  const onResize = (_: MouseEvent | TouchEvent, __: string, ___: ElementRef<any>, delta: ResizableDelta): void => {
    if (contentRef.current) {
      const width = initialWidth + delta.width + 30
      contentRef.current.style.width = `${width}px`
      setInitialWidth(width)
    }
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
      <div className={cx(styles.actionTab, className)}>
        <p onClick={(): void => onChange(TABS[0])} className={cx({ [styles.active]: activeTab === TABS[0] })}>My Force</p>
        <p onClick={(): void => onChange(TABS[1])} className={cx({ [styles.active]: activeTab === TABS[1] })}>My Orders</p>
        <p onClick={(): void => onChange(TABS[2])} className={cx({ [styles.active]: activeTab === TABS[2] })}>OPFOR</p>
      </div>
    )
  }

  const onRender = (): void => {
    console.log('=> render')
  }

  return (
    <div className={styles.root}>
      <Slide direction="right" in={isShowPanel}>
        <div className={styles.panel}>
          <Rnd
            disableDragging
            style={PANEL_STYLES}
            default={DEFAULT_SIZE}
            onResize={onResize}
            minWidth={MIN_PANEL_WIDTH}
            maxWidth={MAX_PANEL_WIDTH}
            minHeight={MIN_PANEL_HEIGHT}
            maxHeight={MAX_PANEL_HEIGHT}
          >
            <div className={styles.content} ref={contentRef}>
              <TabPanel className={styles['tab-panel']} value={TABS[0]} active={activeTab === TABS[0]}>
                <PlanningAssets forces={[selectedForce]} playerForce={selectedForce} isUmpire={true} render={onRender} />
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={TABS[1]} active={activeTab === TABS[1]} >
                <PlanningMessagesList
                  messages={messages}
                  playerForceId={selectedForce.name}
                  isUmpire={true}
                  icons={forceIcons}
                  colors={forceColors}
                  names={forceNames}
                  turnPresentation={turnPresentation}
                  hideForcesInChannel={!!hideForcesInChannel}
                  onRead={onRead}
                  onUnread={onUnread}
                  onMarkAllAsRead={onReadAll}
                />
              </TabPanel>
              <TabPanel className={styles['tab-panel']} value={TABS[2]} active={activeTab === TABS[2]} >
                OPFOR
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
      <TabPanelActions onChange={onTabChange} className={styles.secondaryActionTab} />
    </div>
  )
}

export default SupportPanel
