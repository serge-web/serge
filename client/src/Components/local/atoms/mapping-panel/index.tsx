import React from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'
import ResizeHandle from './helpers/ResizeHandle'
import styles from './styles.module.scss'

export const MappingPanel = (): React.ReactElement => {
  return (
    <PanelGroup className={styles.panelGroup} direction="vertical">
      
      <Panel
        collapsible={true}
        defaultSizePercentage={20}
        order={1}
        className={styles.filterPanel}
      >
        <div>Filters</div>
      </Panel>
      <ResizeHandle />
      
      <Panel collapsible={true} order={2} className={styles.itemsPanel}>
        <div>Items</div>
      </Panel>
      <ResizeHandle />
      
      <Panel
        collapsible={true}
        defaultSizePercentage={20}
        order={3}
        className={styles.propertiesPanel}
      >
        <div>bottom</div>
      </Panel>
      
    </PanelGroup>
  )
}

export default MappingPanel
