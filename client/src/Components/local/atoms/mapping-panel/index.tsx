/* eslint-disable complexity */
import { faArrowAltCircleLeft, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { convertLetterSidc2NumberSidc } from '@orbat-mapper/convert-symbology'
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { capitalize, cloneDeep, get, isEqual, merge, set, uniq } from 'lodash'
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { ImperativePanelHandle, Panel, PanelGroup } from 'react-resizable-panels'
import { ForceStyle, isValidSymbol } from '../../../../Helpers'
import { CoreProperties, MappingPermissions, MilSymProperties, ParticipantMapping, PropertyType } from '../../../../custom-types'
import { getAllFeatureIds } from '../core-mapping/helper/feature-collection-helper'
import { useMappingState } from '../core-mapping/helper/mapping-provider'
import { colorFor } from '../core-mapping/renderers/core-renderer'
import CustomDialog from '../custom-dialog'
import { canEditProps, canOnlyEditOwnProps, canSeeProps, hasMappingPermission } from './helpers/has-mapping-permission'
import IconRenderer from './helpers/icon-renderer'
import PropertiesPanel from './helpers/properties-panel'
import ResizeHandle from './helpers/resize-handler'
import styles from './styles.module.scss'
import { SelectedProps } from './types/props'

type MappingPanelProps = {
  onClose: () => void
  features?: FeatureCollection<Geometry, GeoJsonProperties>
  rendererProps: PropertyType[] // property definitions for the renderer for this feature
  selected: string[]
  onSelect: (id: string[]) => void
  onSave: (features: FeatureCollection<Geometry, GeoJsonProperties>) => void
  forceStyles: ForceStyle[]
  permissions: ParticipantMapping[]
}
type PanelState = {
  state: boolean
  // extra props
}
type PanelGroupState = {
  filterPanelState: PanelState
  itemPanelState: PanelState
  propertyPanelState: PanelState
} 

const modalStyle = { content: { width: '450px' } }
const bodyStyle = { padding: '5px' }
const initPanelState: PanelGroupState = {
  filterPanelState: {
    state: true
  },
  itemPanelState: {
    state: true
  },
  propertyPanelState: {
    state: true
  }
}

export const MappingPanel: React.FC<MappingPanelProps> = ({ onClose, features, rendererProps, selected, onSelect, onSave, forceStyles, permissions }): React.ReactElement => {
  const [filteredFeatures, setFilteredFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [pendingSaveFeatures, setPendingSaveFeatures] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(features)
  const [openAddFilter, setOpenAddFilter] = useState<boolean>(false)
  const [propertyFiltersListPanel, setPropertyFiltersListPanel] = useState<string[]>([])
  const [selectedFeature, setSelectedFeature] = useState<Feature<Geometry, GeoJsonProperties> | undefined>(undefined)
  const [propsEditable, setPropsEditable] = useState<boolean>(false)
  const [selectedProps, setSelectedProps] = useState<SelectedProps>({})
  const [selectedFiltersProps, setSelectedFiltersProps] = useState<SelectedProps>({})
  const [disableSave, setDisableSave] = useState<boolean>(true)
  const [panelState, setPanelState] = useState<PanelGroupState>(initPanelState)
  const [checkSidc, setCheckSidc] = useState<boolean>(true)
  const filterPanel = useRef<ImperativePanelHandle | null>(null)
  const itemPanel = useRef<ImperativePanelHandle | null>(null)
  const propertyPanel = useRef<ImperativePanelHandle | null>(null)
  
  const { setFilterFeatureIds, deselecteFeature, setPanTo } = useMappingState()

  const filterProperties = features?.features.reduce((result, f) => uniq([...result, ...Object.keys(f.properties || []).filter(p => !p.startsWith('_'))]), [] as string[])

  const wildcardLabel = 'id/label (*)'
  const shapeTypeLabel = 'shapeType'

  // add custom search field with wildcard support
  filterProperties?.unshift(wildcardLabel, shapeTypeLabel)

  const knowsItExists = (feature: Feature<Geometry, any>): boolean => {
    const knowsPos = hasMappingPermission(feature, MappingPermissions.ViewSpatial, permissions)
    if (!knowsPos) {
      // though the player doesn't know location of subject, see if it knows it exists
      return hasMappingPermission(feature, MappingPermissions.Exists, permissions)
    } else {
      return true
    }
  }

  useEffect(() => {
    if (features) {
      const cloneFeatures = cloneDeep(features)
      const visibleFeatures = cloneFeatures.features.filter(f => knowsItExists(f))
      cloneFeatures.features = visibleFeatures
      setFilteredFeatures(cloneFeatures)
      setPendingSaveFeatures(cloneFeatures)  
    } else {
      setFilteredFeatures(features)
      setPendingSaveFeatures(features)      
    }
  }, [features])

  useEffect(() => {
    if (selectedFeature) {
      const properties = selectedFeature.properties as MilSymProperties | CoreProperties
      const geometry = selectedFeature.geometry

      if (!properties || !geometry) {
        return
      }
      const propsList = Object.keys(properties).reduce((result, propKey) => {
        if (propKey.startsWith('_')) {
          return result
        }

        const safeResult = result as any

        if (geometry.type === 'Point') {
          // inject lat/lng
          safeResult['lat'] = {
            value: geometry.coordinates[1],
            choices: []
          }
          safeResult['lng'] = {
            value: geometry.coordinates[0],
            choices: []
          }
        }
        const onlyEditOwnProps = canOnlyEditOwnProps(selectedFeature, permissions)
        const extraProps = rendererProps.find(prop => prop.id === propKey && prop.renderer === getSelectedRenderer())
        safeResult[propKey] = {
          value: properties[propKey] as any,
          choices: get(extraProps, 'choices', []),
          disabled: onlyEditOwnProps && !extraProps?.playerEditable
        }
        return result
      }, {})
      // sort the props in alpha order
      const sort = <T extends Record<string, unknown>>(obj: T): T => Object.keys(obj).sort().reduce((acc, c) => { 
        const safeAcc = acc as any
        safeAcc[c] = obj[c]
        return acc 
      }, {}) as T
      const sortedProps: SelectedProps = sort(propsList)
      if (sortedProps.sidc) {
        const { success, sidc } = handleSidcValue(sortedProps.sidc.value)
        setCheckSidc(success)
        setSelectedProps({ ...sortedProps, sidc: { ...sortedProps.sidc, value: sidc } })
      } else {
        setSelectedProps(sortedProps)  
      }
      // and if the form is editable
      setPropsEditable(canEditProps(selectedFeature, permissions))
    }
  }, [selectedFeature])

  useEffect(() => {
    selectItem(selected, true)
  }, [selected])

  useEffect(() => {
    if (selected.length) {
      clearSelectedFeature()
    }
  }, [deselecteFeature])
  
  const onAddNewFilter = () => setOpenAddFilter(true)

  const handleSidcValue = (sidcValue: string): { success: boolean, sidc: string } => {
    let value = sidcValue
    const isValid = !isNaN(Number(value))
    if (!isValid) {
      const { sidc } = convertLetterSidc2NumberSidc(value)
      value = sidc
      console.log(`${value} is not a valid number.`)
    }
    const originValue = value
    const success = isValidSymbol(originValue)
    return { success: success, sidc: originValue }
  }

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
      const extraProps = rendererProps.find(prop => prop.id === key)
      const choices: string[] = get(extraProps, 'choices', [])
      const value = get(choices, '0', '')
      const safeRes = res as any
      safeRes[key] = {
        value: choices.length ? [value] : '',
        choices
      }
      return res
    }, {})
    setSelectedFiltersProps(merge(selectedFilterOpts, selectedFiltersProps))
    closeApplyFilterModal()
  }, [features, propertyFiltersListPanel])

  const onRemoveFilter = (key: string) => {
    delete selectedFiltersProps[key]
    setSelectedFiltersProps(cloneDeep(selectedFiltersProps))
    handleCheck(key, false)
  }

  const selectItem = (id: string[], checked: boolean) => {
    const feature = features?.features.find(f => id.includes(f.properties?.id))
    if (feature && canSeeProps(feature, permissions)) {
      setSelectedFeature(checked ? feature : undefined)
      onSelect(checked ? id : [])
    }
    setPendingSaveFeatures(features)
  }

  const clearSelectedFeature = () => {
    setSelectedFeature(undefined)
    setSelectedProps({})
    onSelect([])
    setDisableSave(true)
    if (!isEqual(pendingSaveFeatures, features)) {
      setPendingSaveFeatures(features)
    }
  }

  const updatePendingSave = (key: string, value: any) => {
    if (!pendingSaveFeatures) {
      return
    }
    const clonePendingSaveFeatures = cloneDeep(pendingSaveFeatures)
    let localFeatures = clonePendingSaveFeatures.features
    if (!localFeatures) {
      return
    }
    localFeatures = localFeatures.map(f => {
      if (get(f, 'properties.id', '') === get(selectedFeature, 'properties.id', '') && f.properties) {
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
    clonePendingSaveFeatures.features = localFeatures
    setPendingSaveFeatures(clonePendingSaveFeatures)
    setDisableSave(isEqual(features?.features, localFeatures))
  }

  const centerFor = (geometry: Geometry): [number, number] => {
    if (geometry.type === 'Point') {
      return [geometry.coordinates[0], geometry.coordinates[1]]
    }
    if (geometry.type === 'Polygon') {
      const coords = geometry.coordinates[0]
      const x = coords.reduce((acc, c) => acc + c[0], 0) / coords.length
      const y = coords.reduce((acc, c) => acc + c[1], 0) / coords.length
      return [x, y]
    }
    return [0, 0]
  }

  const onPropertiesChange = (key: string, value: any) => {
    if (key === 'sidc') {
      const { success } = handleSidcValue(value)
      setCheckSidc(success)
    }
    const prevValue = get(selectedProps, key)
    // keep 1 selected item
    if (prevValue.value.length <= 1 && Array.isArray(value) && !value.length) {
      return
    }
    set(prevValue, 'value', value)
    setSelectedProps(cloneDeep(selectedProps))
    updatePendingSave(key, value)
  }

  const onFilterPropertiesChange = (key: string, value: any) => {
    const prevValue = get(selectedFiltersProps, key)
    // leep 1 selected item
    if (prevValue.value.length <= 1 && Array.isArray(value) && !value.length) {
      return
    }
    set(prevValue, 'value', value)
    setSelectedFiltersProps(cloneDeep(selectedFiltersProps))
  }

  useEffect(() => {
    if (!features) {
      return
    }
    const cloneFeature = cloneDeep(features)
    cloneFeature.features = cloneFeature.features.filter((f) => {
      const orFoundKey: {[x: string]: boolean} = {}
      Object.keys(selectedFiltersProps).forEach((filterKey) => {
        const value = selectedFiltersProps[filterKey].value
        if (filterKey === wildcardLabel) {
          // search wildcard by label & id
          const searchKey = value.toLowerCase()
          const label = get(f.properties, 'label', '').toString().toLowerCase()
          const id = get(f.properties, 'id', '').toString().toLowerCase()
          try {
            const rgex = new RegExp(searchKey)
            orFoundKey[filterKey] = rgex.test(label) || rgex.test(id)
          } catch (e) {
            orFoundKey[filterKey] = false
          }
        } else if (filterKey === shapeTypeLabel) {
          const selectedGeoType = value.join(',').toLowerCase()
          const geoType = f.geometry.type.valueOf().toLowerCase()
          try {
            orFoundKey[filterKey] = selectedGeoType.includes(geoType)
          } catch (e) {
            orFoundKey[filterKey] = false
          }
        } else {
          const propertyValue = get(f.properties, filterKey, '')
          let itemPropValue: any[] = [] // Explicitly type as an array of any[]
          let filteringValue: any[] = [] // Explicitly type as an array of any[]
          if (Array.isArray(propertyValue)) {
            itemPropValue = propertyValue
          } else if (filterKey === 'sidc') {
            const { success, sidc } = handleSidcValue(propertyValue)
            if (success) {
              itemPropValue.push(sidc)
            }
          } else {
            itemPropValue.push(propertyValue)
          }
          if (Array.isArray(value)) {
            filteringValue = value
          } else {
            filteringValue.push(value)
          }
          const filteringValueStr = filteringValue.sort().join(',').toLowerCase()
          const itemValueStr = itemPropValue.sort().join(',').toLowerCase()
          orFoundKey[filterKey] = (filteringValueStr.includes(itemValueStr) || itemValueStr.includes(filteringValueStr)) && !!itemValueStr
        }
      })
      
      return Object.values(orFoundKey).every(f => f)
    })
    const isSelectedFeatureFilterOut = cloneFeature.features.some(f => get(f, 'properties.id', '') === get(selectedFeature, 'properties.id', ''))
    if (!isSelectedFeatureFilterOut) {
      clearSelectedFeature()
    } 
    setFilterFeatureIds(getAllFeatureIds(cloneFeature))
    setFilteredFeatures(cloneFeature)
  }, [features, selectedFiltersProps])

  const onLocalSave = () => {
    if (pendingSaveFeatures) {
      onSave(pendingSaveFeatures)
      setDisableSave(true)
      const feature = pendingSaveFeatures.features.find(f => f.id === selectedFeature?.id)
      if (feature && !canSeeProps(feature, permissions)) {
        clearSelectedFeature()
      }
    }
  }

  const handlePanelState = (panelName: 'filterPanelState' | 'itemPanelState' | 'propertyPanelState', state: boolean) => {
    const clonePanelState = cloneDeep(panelState)
    set(clonePanelState, `${panelName}.state`, state)
    setPanelState(clonePanelState)

    if (panelName === 'filterPanelState') {
      if (state) {
        filterPanel.current?.expand()
      } else {
        filterPanel.current?.collapse()
        if (!panelState.itemPanelState.state) {
          propertyPanel.current?.resize({ sizePercentage: 99 })
        }
      }
    }
    if (panelName === 'itemPanelState') {
      if (state) {
        itemPanel.current?.expand()
        if (panelState.propertyPanelState.state) {
          propertyPanel.current?.resize({ sizePercentage: 25 })
        } else {
          itemPanel.current?.resize({ sizePercentage: 60 })
        }
      } else {
        itemPanel.current?.collapse()
      }
    }
    if (panelName === 'propertyPanelState') {
      if (state) {
        if (panelState.itemPanelState.state) {
          propertyPanel.current?.resize({ sizePercentage: 25 })
        } else {
          propertyPanel.current?.expand()
        }
      } else {
        propertyPanel.current?.collapse()
        if (!panelState.filterPanelState.state && !panelState.itemPanelState.state) {
          propertyPanel.current?.resize({ sizePercentage: 99 })
        }
      }
    }
  }

  const getSelectedRenderer = () => {
    if (selectedFeature?.properties?._type === 'CoreRenderer') {
      return 'core'
    }
    return 'milSym'
  }

  const getLabelFilter = (id: string) => {
    const renderProp = rendererProps.find(p => p.id === id)
    return renderProp ? renderProp.label : capitalize(id)
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
                label={getLabelFilter(filter)}
                value={filter}
              />
            </div>
          ))}
        </div>
      </CustomDialog>
      <Panel
        collapsible
        ref={filterPanel}
        order={1}
        className={styles.filterPanel}
        id='filter-panel'
      >
        <div className={styles.header}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={onClose} />
          <p>Filters</p>
          <FontAwesomeIcon icon={panelState.filterPanelState.state ? faWindowMaximize : faWindowMinimize} onClick={() => handlePanelState('filterPanelState', !panelState.filterPanelState.state)} />
        </div>
        {panelState.filterPanelState.state &&
          <>
            <div className={styles.propertiesResponsive}>
              <PropertiesPanel disableIdEdit={false} selectedProp={selectedFiltersProps} onPropertiesChange={onFilterPropertiesChange} onRemoveFilter={onRemoveFilter} selectedRenderer={getSelectedRenderer()} multipleSelect/>
            </div>
            <div className={styles.button}>
              <button onClick={onAddNewFilter}>Add</button>
            </div>
          </>}
      </Panel>
      <ResizeHandle />
      
      <Panel
        ref={itemPanel}
        collapsible
        order={2}
        className={styles.itemsPanel}
      >
        <div className={styles.header}>
          <div></div>
          Items
          <FontAwesomeIcon icon={panelState.itemPanelState.state ? faWindowMaximize : faWindowMinimize} onClick={() => handlePanelState('itemPanelState', !panelState.itemPanelState.state)} />
        </div>
        {panelState.itemPanelState.state &&
          <div className={styles.itemsResponsive}>
            {filteredFeatures?.features.map((feature, idx) => {
              const color = colorFor(feature.properties?.force, forceStyles)
              const center = centerFor(feature.geometry)
              const mapPanTo = () => {
                // pan to the center of the feature
                setPanTo({ lat: center[1], lng: center[0] })
              }
              return <IconRenderer onPan={mapPanTo} key={idx} feature={feature} checked={get(selectedFeature, 'properties.id', '') === feature.properties?.id} onClick={selectItem} color={color} disabled={!canSeeProps(feature, permissions)} />
            })}
          </div>
        }
      </Panel>
      <ResizeHandle />
      
      <Panel
        ref={propertyPanel}
        collapsible
        order={3}
        className={styles.propertiesPanel}
      >
        <div className={styles.header}>
          <div></div>
          Properties
          <FontAwesomeIcon icon={panelState.propertyPanelState.state ? faWindowMaximize : faWindowMinimize} onClick={() => handlePanelState('propertyPanelState', !panelState.propertyPanelState.state)} />
        </div>
        {panelState.propertyPanelState.state &&
          <>
            <div className={styles.propertiesResponsive}>
              <PropertiesPanel disableIdEdit={true} rendererProps={rendererProps} selectedProp={selectedProps} checkSidc={checkSidc} onPropertiesChange={onPropertiesChange} disabled={!propsEditable} selectedRenderer={getSelectedRenderer()}/>
            </div>
            <div className={styles.button}>
              <button disabled={!Object.keys(selectedProps).length} onClick={clearSelectedFeature}>Cancel</button>
              {propsEditable && <button disabled={disableSave || !checkSidc} onClick={onLocalSave}>Save</button>}
            </div>
          </>
        }
      </Panel>
      
    </PanelGroup>
  )
}

export default MappingPanel
