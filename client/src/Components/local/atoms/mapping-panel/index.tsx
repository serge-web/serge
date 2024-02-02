import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { cloneDeep, get, set, uniq } from 'lodash'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Panel, PanelGroup } from 'react-resizable-panels'
import { CoreProperties, PropertyTypes } from 'src/custom-types'
import CustomDialog from '../custom-dialog'
import IconRenderer from './helpers/icon-renderer'
import PropertiesPanel from './helpers/properties-panel'
import ResizeHandle from './helpers/resize-handler'
import styles from './styles.module.scss'
import { SelectedProps } from './types/props'

type MappingPanelProps = {
  onClose: () => void
  features?: FeatureCollection<Geometry, GeoJsonProperties>
  extraFilterProps: PropertyTypes[]
  onSave: (features: FeatureCollection<Geometry, GeoJsonProperties>) => void
}

const modalStyle = { content: { width: '450px' } }
const bodyStyle = { padding: '5px' }

export const MappingPanel: React.FC<MappingPanelProps> = ({ onClose, features, extraFilterProps, onSave }): React.ReactElement => {
  const [filterredFeatures, setFilterredFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [pendingSaveFeatures, setPendingSaveFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [openAddFilter, setOpenAddFilter] = useState<boolean>(false)
  const [propertyFiltersListPanel, setPropertyFiltersListPanel] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry, GeoJsonProperties>[]>([])
  const [selectedProps, setSelectedProps] = useState<SelectedProps>({})
  const [selectedFiltersProps, setSelectedFiltersProps] = useState<SelectedProps>({})
  
  const filterProperties = features?.features.reduce((result, f) => uniq([...result, ...Object.keys(f.properties || []).filter(p => !p.startsWith('_'))]), [] as string[])

  // add custom search field with wildcard support
  filterProperties?.push('Wildcard')

  useEffect(() => {
    setFilterredFeatures(features)
    setPendingSaveFeatures(features)
  }, [features])

  useEffect(() => {
    if (selectedFeatures.length) {
      const properties = selectedFeatures[0].properties as CoreProperties
      const geometry = selectedFeatures[0].geometry

      if (!properties || !geometry) {
        return
      }
      const propsList = Object.keys(properties).reduce((result, propKey) => {
        if (propKey.startsWith('_')) {
          return result
        }
        if (geometry.type === 'Point') {
          // inject lat/lng
          result['lat'] = {
            value: geometry.coordinates[1],
            choices: []
          }
          result['lng'] = {
            value: geometry.coordinates[0],
            choices: []
          }
        }
        const extraProps = extraFilterProps.find(prop => prop.id === propKey)
        result[propKey] = {
          value: properties[propKey] as any,
          choices: get(extraProps, 'choices', [])
        }
        return result
      }, {})
      setSelectedProps(propsList)
    }
  }, [selectedFeatures])
  
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
      const extraProps = extraFilterProps.find(prop => prop.id === key)
      res[key] = {
        value: '',
        choices: get(extraProps, 'choices', [])
      }
      return res
    }, {})
    setSelectedFiltersProps(selectedFilterOpts)
    closeApplyFilterModal()
  }, [features, propertyFiltersListPanel])

  const onRemoveFilter = (key: string) => {
    delete selectedFiltersProps[key]
    setSelectedFiltersProps(cloneDeep(selectedFiltersProps))
    handleCheck(key, false)
  }

  const selectItem = (id: string, checked: boolean) => {
    const featrure = features?.features.filter(f => f.properties?.id === id) || []
    setSelectedFeatures(checked ? featrure : [])
  }

  const updatePendingSave = (key: string, value: any) => {
    if (!pendingSaveFeatures) {
      return
    }
    const clonePendingSaveFeatures = cloneDeep(pendingSaveFeatures)
    let features = clonePendingSaveFeatures.features
    if (!features) {
      return
    }
    features = features.map(f => {
      if (get(f, 'properties.id', '') === get(selectedFeatures, '0.properties.id', '') && f.properties) {
        if (key === 'lat') {
          set(f, 'geometry.coordinates.1', +selectedProps.lat.value)
        } else if (key === 'lng') {
          set(f, 'geometry.coordinates.0', +selectedProps.lng.value)
        } else {
          f.properties[key] = value
        }
      }
      return f
    })
    clonePendingSaveFeatures.features = features
    setPendingSaveFeatures(clonePendingSaveFeatures)
  }

  const onPropertiesChange = (key: string, value: any) => {
    const prevValue = get(selectedProps, key)
    set(prevValue, 'value', value)
    setSelectedProps(cloneDeep(selectedProps))
    updatePendingSave(key, value)
  }

  const onFilterPropertiesChange = (key: string, value: string) => {
    const prevValue = get(selectedFiltersProps, key)
    set(prevValue, 'value', value)
    setSelectedFiltersProps(cloneDeep(selectedFiltersProps))
  }

  useEffect(() => {
    if (!features) {
      return
    }
    const cloneFeature = cloneDeep(features)
    cloneFeature.features = cloneFeature.features.filter((f) => {
      let found = true
      Object.keys(selectedFiltersProps).forEach((filterKey) => {
        const propertyValue = get(f.properties, filterKey, '').toString().toLowerCase()
        const searchKey = selectedFiltersProps[filterKey].value.toLowerCase()
        if (filterKey === 'Wildcard' && searchKey) {
          // search wildcard by label
          const label = get(f.properties, 'label', '').toString().toLowerCase()
          try {
            const rgex = new RegExp(searchKey)
            found = rgex.test(label)
          } catch (e) {
            found = false
          }
        } else if (!propertyValue.includes(searchKey)) {
          found = false
        }
      })
      return found
    })
    setFilterredFeatures(cloneFeature)
  }, [features, selectedFiltersProps])

  const onLocalSave = () => {
    if (pendingSaveFeatures) {
      onSave(pendingSaveFeatures)
    }
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
          <PropertiesPanel selectedProp={selectedProps} onPropertiesChange={onPropertiesChange}/>
        </div>
        <div className={styles.button}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onLocalSave}>Save</button>
        </div>
      </Panel>
      
    </PanelGroup>
  )
}

export default MappingPanel
