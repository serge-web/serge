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
  /**
   * once the line is created, this callback is called, so the parent
   * class can store the laer, and to choose when to delete it.
   */
  storeRef?: {(polyline: L.Layer): void}
}

const PolylineDecorator: React.FC<PolylineDecoratorProps> = ({ latlngs, layer, message, color, storeRef }) => {
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
    const pathOpts: L.PolylineOptions = {}
    const newArrow = { ...ArrowHeadPattern }
    if (color) {
      pathOpts.color = color
      const arrowHead = newArrow.symbol as L.Symbol.ArrowHead
      arrowHead.initialize({ pathOptions: { color: color } })
    }
    const polyline = L.polyline(latlngs, pathOpts).addTo(map)
    if (message) {
      polyline.setText(message, LeafletTextOption)
    }
    const polylineDecorator = L.polylineDecorator(polyline, {
      patterns: [newArrow]
    })
    // we need to be able to detach this object from the outside. So, tell parent
    // code about the created object
    storeRef && storeRef(polyline)
    storeRef && storeRef(polylineDecorator)
    polylineDecorator.addTo(map)
  }, [latlngs])

  return <></>
}

export default PolylineDecorator
