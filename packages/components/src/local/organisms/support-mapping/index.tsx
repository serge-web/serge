import React, { useEffect, useMemo, useState } from 'react'
import { Map, ScaleControl, TileLayer } from 'react-leaflet'
import { MapConstants } from './helper/MapConstants'
import PropTypes from './types/props'
import { Map as LMap } from 'leaflet'
import MapControl from '../../map-control'
import styles from './styles.module.scss'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  actionItems, actionCallback, children, toolbarChildren, maxWidth
}) => {
  const TileLayerProps = MapConstants.TileLayer

  const [leafletElement, setLeafletElement] = useState<LMap | undefined>(undefined)

  useEffect(() => {
    if (leafletElement) {
      leafletElement.invalidateSize()
    }
  }, [maxWidth])

  useEffect(() => {
    if ((bounds !== undefined) && leafletElement) {
      leafletElement.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position !== undefined && leafletElement) {
      const defaultZoom = 10
      leafletElement.flyTo(position, defaultZoom, { duration: 0.6 })
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

  /**
   * prevent it re-renders on suport panel resizing
   */
  const MapContent = useMemo(() => {
    return <>
      <MapControl
        map={leafletElement}
        bounds={bounds}
        zoomStepSize={1}
        actionItems={actionItems}
        actionCallback={actionCallback}>
        <>
          {toolbarChildren &&
            toolbarChildren
          }
        </>
      </MapControl>
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      {children}
    </>
  }, [children, toolbarChildren])

  return (
    <div className={styles['map-container']}>
      <Map
        className={styles.map}
        ref={handleEvents}
        zoomControl={false}
        style={{ width: maxWidth }}
      >
        {MapContent}
      </Map>
    </div>
  )
}

export default SupportMapping
