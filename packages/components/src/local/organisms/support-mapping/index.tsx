import 'leaflet/dist/leaflet.css'
import React, { useEffect, useMemo } from 'react'
import { ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import MapControl from '../../map-control'
import { MapConstants } from './helper/MapConstants'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  actionItems, actionCallback, children, toolbarChildren, maxWidth
}) => {
  const TileLayerProps = MapConstants.TileLayer

  const map = useMap()

  useEffect(() => {
    if (map) {
      map.invalidateSize()
    }
  }, [maxWidth])

  useEffect(() => {
    if (bounds && map) {
      map.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position && map) {
      const defaultZoom = 10
      map.flyTo(position, defaultZoom, { duration: 0.6 })
    }
  }, [position])

  /**
   * prevent it re-renders on suport panel resizing
   */
  const MapContent = useMemo(() => {
    return <>
      <MapControl
        bounds={bounds}
        zoomStepSize={1}
        actionItems={actionItems}
        actionCallback={actionCallback}
        mapVer='v4'
      >
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

  return (<>
    {MapContent}
  </>
  )
}

export default SupportMapping
