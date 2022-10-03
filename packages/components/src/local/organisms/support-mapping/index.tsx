
import 'leaflet/dist/leaflet.css'
import { ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import React, { useEffect } from 'react'
import PropTypes from './types/props'
import MapControl from '../../map-control'
import { MapConstants } from './helper/MapConstants'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  actionItems, actionCallback, toolbarChildren, maxWidth, children
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

  return (
    <>
      <MapControl
        bounds={bounds}
        zoomStepSize={1}
        actionItems={actionItems}
        mapVer='v4'
        actionCallback={actionCallback}>
        <>
          {toolbarChildren}
        </>
      </MapControl>
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      {children}
    </>
  )
}

export default SupportMapping
