import { faArrowAltCircleLeft, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel, Theme, makeStyles } from '@material-ui/core'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { cloneDeep, debounce, uniq } from 'lodash'
import React, { ChangeEvent, useState } from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'
import CustomDialog from '../custom-dialog'
import IconRenderer from './helpers/icon-renderer'
import ResizeHandle from './helpers/resize-handler'
import styles from './styles.module.scss'

const useStyles = makeStyles((_: Theme) => ({
  removeIcon: {
    color: 'red'
  }
}))

type MappingPanelProps = {
  onClose: () => void
  features?: FeatureCollection<Geometry, GeoJsonProperties>
}

const modalStyle = { content: { width: '450px', zIndex: 1111 } }
const bodyStyle = { padding: '5px' }

export const MappingPanel: React.FC<MappingPanelProps> = ({ onClose, features }): React.ReactElement => {
  const classes = useStyles()
  const [filterredFeatures, setFilterredFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [openAddFilter, setOpenAddFilter] = useState<boolean>(false)
  const [propertyFilters, setPropertyFilters] = useState<string[]>([])
  
  const filterProperties = features?.features.reduce((result, f) => uniq([...result, ...Object.keys(f.properties || [])]), [] as string[])

  const debounceFilter = debounce((term: string) => {
    if (!features) {
      return
    }
    const cloneFeature = cloneDeep(features)
    cloneFeature.features = cloneFeature?.features.filter(f => f.properties?.label.toLowerCase().includes(term))
    setFilterredFeatures(cloneFeature)
  }, 500)

  const onInputFilterChange = (e: ChangeEvent<HTMLInputElement>) => debounceFilter(e.target.value)
  
  const onAddNewFilter = () => setOpenAddFilter(true)

  const handleCheck = (filter: string, checked: boolean) => {
    const cloneFilters = cloneDeep(propertyFilters)
    if (checked) {
      cloneFilters.push(filter)
      setPropertyFilters(cloneFilters)
    } else {
      setPropertyFilters(cloneFilters.filter(f => f !== filter))
    }
  }

  const applyFilter = () => {
    // what should we do next with these filter properties
    console.log('Selected Filter: ', propertyFilters)
  }

  return (
    <PanelGroup className={styles.panelGroup} direction="vertical">
      <CustomDialog
        modalStyle={modalStyle}
        bodyStyle={bodyStyle}
        isOpen={openAddFilter}
        header={'Add new Filter'}
        cancelBtnText='Cancel'
        saveBtnText='OK'
        onClose={() => setOpenAddFilter(false)}
        onSave={applyFilter}
      >
        <div className={styles.filterList}>
          {filterProperties?.map((filter, idx) => (
            <div key={idx}>
              <FormControlLabel
                key={idx}
                title={filter}
                control={
                  <Checkbox
                    name={filter}
                    value={filter}
                    checked={propertyFilters.includes(filter)}
                    onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) => handleCheck(filter, checked)}
                    size="small"
                  />
                }
                label={filter}
                value={filter}
              />
            </div>
          ))}
        </div>
      </CustomDialog>
      <Panel
        collapsible={true}
        defaultSizePixels={150}
        minSizePixels={150}
        order={1}
        className={styles.filterPanel}
        id='filter-panel'
      >
        <div className={styles.header}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={onClose} />
          <p>Filters</p>
        </div>
        <div className={styles.itemsBox}>
          <p>Name:</p>
          <div>
            <input onChange={onInputFilterChange} placeholder='Headquarters' />
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
          <button onClick={onAddNewFilter}>Add</button>
        </div>
      </Panel>
      <ResizeHandle />
      
      <Panel collapsible={true} order={2} className={styles.itemsPanel}>
        <div className={styles.header}>
          Items
        </div>
        <div style={{ overflow: 'auto', height: 'calc(100% - 20px)' }}>
          {filterredFeatures?.features.map((feature, idx) => {
            return <IconRenderer key={idx} feature={feature} />
          })}
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
            <input placeholder='Headquarters' />
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
