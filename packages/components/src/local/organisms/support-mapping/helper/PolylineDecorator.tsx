import L, { LatLng, Layer } from 'leaflet'
import 'leaflet-textpath'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet-v4'
import { ArrowHeadPattern, LeafletTextOption } from './MapConstants'

type PolylineDecoratorProps = {
  latlngs: LatLng[]
  layer?: Layer
  color?: string
  message?: string
}

const PolylineDecorator: React.FC<PolylineDecoratorProps> = ({ latlngs, layer, message, color }) => {
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
      const pathOpts: L.PolylineOptions = {}
      const newArrow = { ...ArrowHeadPattern }
      if (color) {
        pathOpts.color = color
        const arrowHead = newArrow.symbol as L.Symbol.ArrowHead
        arrowHead.initialize({ pathOptions: { color: color } })
      }
      const polyline = L.polyline([latlngs[i], latlngs[i + 1]], pathOpts).addTo(map)
      if (message) {
        polyline.setText(message, LeafletTextOption)
      }
      L.polylineDecorator(polyline, {
        patterns: [newArrow]
      }).addTo(map)
    }
  }, [latlngs])

  return <></>
}

export default PolylineDecorator
