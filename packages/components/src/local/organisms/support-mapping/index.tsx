
import 'leaflet-polylinedecorator'
import 'leaflet/dist/leaflet.css'
import React, { useEffect } from 'react'
import { ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import MapControl from '../../map-control'
import MapCoordinates from './helper/Coordinates'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds, toolbarChildren, mapWidth, children, tileLayer, maxZoom
}) => {
  if (!tileLayer) {
    console.warn('warning, using fallback tile layer')
  }
  const TileLayerProps = tileLayer
  const map = useMap()

  useEffect(() => {
    if (map) {
      map.invalidateSize()
    }
  }, [mapWidth])

  useEffect(() => {
    if (bounds && map) {
      map.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position && map) {
      // note: fly-to zoom is left as undefined,
      // this prevents zooming in too far
      map.flyTo(position, undefined, { duration: 0.6 })
    }
  }, [position])

  return (
    <>
      <MapControl
        bounds={bounds}
        zoomStepSize={1}
        mapVer='v4'
      >
        {toolbarChildren}
      </MapControl>
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <MapCoordinates />
      {children}
    </>
  )
}

export default SupportMapping
