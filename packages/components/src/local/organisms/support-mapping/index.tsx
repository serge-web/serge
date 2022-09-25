import React, { useEffect, useState } from 'react'
import { LayerGroup, Map, ScaleControl, TileLayer } from 'react-leaflet'
import PlanningForces from '../planning-force'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { Map as LMap } from 'leaflet'
import MapControl from '../../map-control'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds, ownAssets,
  opAssets, filterApplied, setFilterApplied, selectedItem, forces,
  viewAsCallback, viewAsForce
}) => {
  const TileLayerProps = MapConstants.TileLayer

  const [leafletElement, setLeafletElement] = useState<LMap | undefined>(undefined)

  console.log('[SupportMapping] own assets:', ownAssets.length, 'filter', filterApplied)

  useEffect(() => {
    console.log('=> [SupportMapping] ownForces update: ', ownAssets && ownAssets.length, 'items')
  }, [ownAssets])

  useEffect(() => {
    console.log('=> [SupportMapping]: opForces update: ', opAssets && opAssets.length, 'items')
  }, [opAssets])

  useEffect(() => {
    if (position !== undefined) {
      const defaultZoom = 8
      leafletElement && leafletElement.flyTo(position, defaultZoom)
    }
  }, [position])

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: LMap = ref.leafletElement
      if (leafletElement === undefined) {
        setLeafletElement(map)
        bounds && map.fitBounds(bounds)
      }
    }
  }

  return (
    <Map
      className={styles.map}
      ref={handleEvents}
      zoomControl={false}
    >
      <MapControl
        map={leafletElement}
        bounds={bounds}
        filterApplied={filterApplied}
        forces={forces || undefined}
        viewAsCallback={viewAsCallback}
        viewAsForce={viewAsForce}
        zoomStepSize={1}
        setFilterApplied={setFilterApplied} />
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'own-forces'}>
        <PlanningForces opFor={false} assets={ownAssets} selectedItem={selectedItem} />
      </LayerGroup>
      <LayerGroup key={'opp-forces'}>
        <PlanningForces opFor={true} assets={opAssets} selectedItem={selectedItem} />
      </LayerGroup>
    </Map>
  )
}

export default SupportMapping
