
import L from 'leaflet'
import 'leaflet-polylinedecorator'
import 'leaflet/dist/leaflet.css'
import React, { useEffect } from 'react'
import { ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import MapControl from '../../map-control'
import MapCoordinates from './helper/Coordinates'
import { ArrowHeadPattern, MapConstants } from './helper/MapConstants'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  actionItems, actionCallback, toolbarChildren, mapWidth, children,
  setDrawingMode, polylineLatlgn = []
}) => {
  const TileLayerProps = MapConstants.TileLayer
  const map = useMap()

  useEffect(() => {
    const polyline = L.polyline(polylineLatlgn).addTo(map)
    L.polylineDecorator(polyline, {
      patterns: [ArrowHeadPattern]
    }).addTo(map);
  }, [polylineLatlgn])

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
        actionCallback={actionCallback}
        setDrawingMode={setDrawingMode}
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
