import { faArrowAltCircleLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme, makeStyles } from '@material-ui/core'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import React, { ChangeEvent } from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'
import ResizeHandle from './helpers/resize-handler'
import styles from './styles.module.scss'
import IconRenderer from './helpers/icon-renderer'

const useStyles = makeStyles((_: Theme) => ({
  removeIcon: {
    color: 'red'
  }
  
}))

type MappingPanelProps = {
  onClose: () => void
  features?: FeatureCollection<Geometry, GeoJsonProperties>
}

export const MappingPanel: React.FC<MappingPanelProps> = ({ onClose, features }): React.ReactElement => {
  const classes = useStyles()
  
  const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('filter: ', e.target.value)
  }

  return (
    <PanelGroup className={styles.panelGroup} direction="vertical">
      
      <Panel
        collapsible={true}
        defaultSizePixels={150}
        minSizePixels={150}
        order={1}
        className={styles.filterPanel}
      >
        <div className={styles.header}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={onClose} />
          <p>Filters</p>
        </div>
        <div className={styles.itemsBox}>
          <p>Name:</p>
          <div>
            <input onChange={onFilter} placeholder='Headquarters' />
          </div>
          <FontAwesomeIcon icon={faMinusCircle} className={classes.removeIcon} />
        </div>
        <div className={styles.itemsBox}>
          <p>Important:</p>
          <div>
            <select>
              <option value='opt1'>Option 1</option>
              <option value='opt2'>Option 2</option>
            </select>
          </div>
          <FontAwesomeIcon icon={faMinusCircle} className={classes.removeIcon} />
        </div>
        <div className={styles.button}>
          <button>Add</button>
        </div>
      </Panel>
      <ResizeHandle />
      
      <Panel collapsible={true} order={2} className={styles.itemsPanel}>
        <div className={styles.header}>
          Items
        </div>
        <div style={{ overflow: 'auto', height: 'calc(100% - 20px)' }}>
          <div>
            {features?.features.map((feature, idx) => {
              return <IconRenderer key={idx} feature={feature} />
            })}
          </div>
        </div>
      </Panel>
      <ResizeHandle />
      
      <Panel
        collapsible={true}
        defaultSizePixels={190}
        minSizePixels={190}
        order={3}
        className={styles.propertiesPanel}
      >
        <div className={styles.header}>Properties</div>
        <div className={styles.itemsBox}>
          <p>Name:</p>
          <div>
            <input onChange={onFilter} placeholder='Headquarters' />
          </div>
        </div>
        <div className={styles.itemsBox}>
          <p>Important:</p>
          <div>
            <select>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
        </div>
        <div className={styles.itemsBox}>
          <p>Size:</p>
          <div>
            <select>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </div>
        </div>
        <div className={styles.button}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </Panel>
      
    </PanelGroup>
  )
}

export default MappingPanel
