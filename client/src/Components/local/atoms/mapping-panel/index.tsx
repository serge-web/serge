import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { cloneDeep, get, set, uniq } from 'lodash'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'
import { CoreProperties } from 'src/custom-types'
import CustomDialog from '../custom-dialog'
import IconRenderer from './helpers/icon-renderer'
import PropertiesPanel from './helpers/properties-panel'
import ResizeHandle from './helpers/resize-handler'
import styles from './styles.module.scss'
import { SelectedProps } from './types/props'

type MappingPanelProps = {
  onClose: () => void
  features?: FeatureCollection<Geometry, GeoJsonProperties>
}

const modalStyle = { content: { width: '450px' } }
const bodyStyle = { padding: '5px' }

export const MappingPanel: React.FC<MappingPanelProps> = ({ onClose, features }): React.ReactElement => {
  const [filterredFeatures, setFilterredFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [openAddFilter, setOpenAddFilter] = useState<boolean>(false)
  const [propertyFiltersListPanel, setPropertyFiltersListPanel] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry, GeoJsonProperties>[]>([])
  const [selectedProps, setSelectedProps] = useState<SelectedProps[]>([])
  const [selectedFiltersProps, setSelectedFiltersProps] = useState<SelectedProps>({})
  
  const filterProperties = features?.features.reduce((result, f) => uniq([...result, ...Object.keys(f.properties || []).filter(p => !p.startsWith('_'))]), [] as string[])

  useEffect(() => {
    setFilterredFeatures(features)
  }, [features])

  useEffect(() => {
    if (selectedFeatures.length) {
      const properties = selectedFeatures[0].properties as CoreProperties
      if (!properties) {
        return
      }
      const propsList = Object.keys(properties).reduce((result, propKey) => {
        if (propKey.startsWith('_')) {
          return result
        }
        result[propKey] = properties[propKey] as any
        return result
      }, {})
      setSelectedProps([propsList])
    }
  }, [selectedFeatures])

  // const debounceFilter = debounce((term: string) => {
  //   if (!features) {
  //     return
  //   }
  //   const cloneFeature = cloneDeep(features)
  //   cloneFeature.features = cloneFeature?.features.filter(f => f.properties?.label.toLowerCase().includes(term))
  //   setFilterredFeatures(cloneFeature)
  // }, 500)

  // const onInputFilterChange = (e: ChangeEvent<HTMLInputElement>) => debounceFilter(e.target.value)
  
  const onAddNewFilter = () => setOpenAddFilter(true)

  const handleCheck = (filter: string, checked: boolean) => {
    const cloneFilters = cloneDeep(propertyFiltersListPanel)
    if (checked) {
      cloneFilters.push(filter)
      setPropertyFiltersListPanel(cloneFilters)
    } else {
      setPropertyFiltersListPanel(cloneFilters.filter(f => f !== filter))
    }
  }

  const closeApplyFilterModal = useCallback(() => setOpenAddFilter(false), [])
  
  const applyFilter = useCallback(() => {
    const selectedFilterOpts = propertyFiltersListPanel.reduce((res, key): SelectedProps => {
      const options = features?.features.reduce((result, f) => {
        const opt = get(f.properties, key, '')
        if (opt && !result.includes(opt)) {
          result.push(opt)
        }
        return result
      }, [] as string[]) || []
      res[key] = options
      return res
    }, {})
    setSelectedFiltersProps(selectedFilterOpts)
    closeApplyFilterModal()
  }, [])

  const onRemoveFilter = (key: string) => {
    delete selectedFiltersProps[key]
    setSelectedFiltersProps(cloneDeep(selectedFiltersProps))
    handleCheck(key, false)
  }

  const selectItem = (id: string, checked: boolean) => {
    const featrure = features?.features.filter(f => f.properties?.id === id) || []
    setSelectedFeatures(checked ? featrure : [])
  }

  const onPropertiesChange = (key: string, value: any) => {
    set(selectedProps, `0.${key}`, value)
    setSelectedProps(cloneDeep(selectedProps))
  }

  const onFilterPropertiesChange = (key: string, value: string) => {
    set(selectedFiltersProps, key, value)
    console.log('Filter Items By: ', selectedFiltersProps)
    // update list item in Items panel
  }

  useEffect(() => {
    console.log('Changed Properties: ', selectedProps)
    // Save latest properties of the selected item
  }, [selectedProps])

  return (
    <PanelGroup className={styles.panelGroup} direction="vertical">
      <CustomDialog
        modalStyle={modalStyle}
        bodyStyle={bodyStyle}
        isOpen={openAddFilter}
        header={'Add new Filter'}
        cancelBtnText='Cancel'
        saveBtnText='OK'
        onClose={closeApplyFilterModal}
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
                    checked={propertyFiltersListPanel.includes(filter)}
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
        <div className={styles.propertiesResponsive}>
          <PropertiesPanel selectedProp={selectedFiltersProps} onPropertiesChange={onFilterPropertiesChange} onRemoveFilter={onRemoveFilter} />
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
        <div className={styles.itemsResponsive}>
          {filterredFeatures?.features.map((feature, idx) => {
            return <IconRenderer key={idx} feature={feature} checked={get(selectedFeatures, '0.properties.id', '') === feature.properties?.id} onClick={selectItem} />
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
        <div className={styles.propertiesResponsive}>
          {selectedProps.map((selectedProp, idx) => {
            return <PropertiesPanel key={idx} selectedProp={selectedProp} onPropertiesChange={onPropertiesChange}/>
          })}
        </div>
        <div className={styles.button}>
          <button onClick={onClose}>Cancel</button>
          <button>Save</button>
        </div>
      </Panel>
      
    </PanelGroup>
  )
}

export default MappingPanel
