import React, { useEffect, useState } from 'react'
import { Map, ScaleControl, TileLayer } from 'react-leaflet'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { Map as LMap } from 'leaflet'
import MapControl from '../../map-control'
import ViewAs from '../view-as'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  filterApplied, setFilterApplied, forces,
  viewAsCallback, viewAsForce, actionItems, actionCallback, children
}) => {
  const TileLayerProps = MapConstants.TileLayer

  const [leafletElement, setLeafletElement] = useState<LMap | undefined>(undefined)

  useEffect(() => {
    if ((bounds !== undefined) && leafletElement) {
      leafletElement.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position !== undefined) {
      const defaultZoom = 10
      leafletElement && leafletElement.flyTo(position, defaultZoom, { duration: 0.6 })
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
        zoomStepSize={1}
        actionItems={actionItems}
        actionCallback={actionCallback}
        setFilterApplied={setFilterApplied}>
        <ViewAs forces={forces} viewAsCallback={viewAsCallback} viewAsForce={viewAsForce} />
      </MapControl>
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      {children}
    </Map>
  )
}

export default SupportMapping
