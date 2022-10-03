
import 'leaflet/dist/leaflet.css'
import { useMap } from 'react-leaflet-v4'
import React, { useEffect } from 'react'
import PropTypes from './types/props'
import MapControl from '../../map-control'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds,
  actionItems, actionCallback, toolbarChildren, maxWidth
}) => {
  const map = useMap()

  useEffect(() => {
    if (map) {
      map.invalidateSize()
    }
  }, [maxWidth])

  useEffect(() => {
    if ((bounds !== undefined) && map) {
      map.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position) {
      const defaultZoom = 10
      map.flyTo(position, defaultZoom, { duration: 0.6 })
    }
  }, [position])

  return (
    <MapControl
      bounds={bounds}
      zoomStepSize={1}
      actionItems={actionItems}
      mapVer='v4'
      actionCallback={actionCallback}>
      <>
        {toolbarChildren &&
          toolbarChildren
        }
      </>
    </MapControl>
  )
}

export default SupportMapping
