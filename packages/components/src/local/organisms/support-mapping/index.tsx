import React, { useEffect, useState } from 'react'
import { LayerGroup, Map, ScaleControl, TileLayer } from 'react-leaflet'
import PlanningForces from '../planning-force'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { Map as LMap } from 'leaflet'
import MapControl from '../../map-control'

export const SupportMapping: React.FC<PropTypes> = ({ position, bounds, zoom, opForces, ownForces, filterApplied, setFilterApplied }) => {
  const TileLayerProps = MapConstants.TileLayer

  const [leafletElement, setLeafletElement] = useState<LMap | undefined>(undefined)

  useEffect(() => {
    console.log('=> [SupportMapping] ownForces update: ', ownForces && ownForces.length, 'items')
  }, [ownForces])

  useEffect(() => {
    console.log('=> [SupportMapping]: opForces update: ', opForces && opForces.length, 'items')
  }, [opForces])

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: LMap = ref.leafletElement
      if (leafletElement === undefined) {
        setLeafletElement(map)
      }
      // const map: L.Map = ref.leafletElement
      // map.zoomControl.setPosition('bottomright')
    }
  }

  return (
    <Map
      className={styles.map}
      center={bounds ? undefined : position}
      bounds={bounds}
      zoom={bounds ? undefined : zoom}
      ref={handleEvents}
      zoomControl={false}
    >
      <MapControl
        map={leafletElement}
        home={bounds?.getCenter()}
        bounds={bounds}
        filterApplied={filterApplied}
        setFilterApplied={setFilterApplied} />
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'own-forces'}>
        <PlanningForces assets={ownForces} />
      </LayerGroup>
      <LayerGroup key={'opp-forces'}>
        <PlanningForces assets={opForces} />
      </LayerGroup>
    </Map>
  )
}

export default SupportMapping
