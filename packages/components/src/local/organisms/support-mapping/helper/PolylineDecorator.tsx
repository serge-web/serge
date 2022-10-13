import L, { LatLng, Layer } from 'leaflet'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet-v4'
import { ArrowHeadPattern } from './MapConstants'

type PolylineDecoratorProps = {
  latlngs: LatLng[]
  layer?: Layer
}

const PolylineDecorator: React.FC<PolylineDecoratorProps> = ({ latlngs, layer }) => {
  const map = useMap()

  useEffect(() => {
    if (layer) {
      if (map) {
        // remove layer which drawed by leaflet-geoman, we only need the set of latlngs to decorate the polyline
        map.removeLayer(layer)
      } else {
        console.warn('Warning - polyline decorator doesn\'t have map reference')
      }
    }
  }, [layer])

  useEffect(() => {
    for (let i = 0; i < latlngs.length - 1; i++) {
      const polyline = L.polyline([latlngs[i], latlngs[i + 1]]).addTo(map)
      L.polylineDecorator(polyline, {
        patterns: [ArrowHeadPattern]
      }).addTo(map)
    }
  }, [latlngs])

  return <></>
}

export default PolylineDecorator
