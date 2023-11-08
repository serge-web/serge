
import 'leaflet-polylinedecorator'
import 'leaflet/dist/leaflet.css'
import React, { useEffect } from 'react'
import { ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import MapControl from '../../local/map-control'
import MapCoordinates from './helper/Coordinates'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds, toolbarChildren, mapWidth, children, tileLayer
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
      try {
        map.flyToBounds(bounds, { duration: 0.6 })
      } catch (err) {
        console.log('Problem with flyToBounds in SupportMapping')
        console.error(err)
      }
    }
  }, [bounds])

  useEffect(() => {
    if (position && map) {
      try {
        // note: fly-to zoom is left as undefined,
        // this prevents zooming in too far
        map.flyTo(position, undefined, { duration: 0.6 })
      } catch (err) {
        console.log('Problem with flyTo in SupportMapping')
        console.error(err)
      }
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
