import { faPlaneSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GeometryType } from '@serge/config'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import cx from 'classnames'
import { Geometry } from 'geojson'
import { LatLng, Layer, PM } from 'leaflet'
import 'leaflet-notifications'
import React, { useEffect, useState } from 'react'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import Item from '../../../map-control/helpers/item'
import { CustomTranslation, CustomTranslationType } from './CustomTranslation'

declare const L: any // needed because control.notifications is not in TS type defs

interface OrderDrawingProps {
  activity: PlanningActivity | undefined
  cancelled: { (): void }
  planned: { (geometries: PlannedActivityGeometry[]): void }
}

interface PendingItem {
  shape: PM.SUPPORTED_SHAPES
  layer: Layer
}

/* Render component */
export const OrderDrawing: React.FC<OrderDrawingProps> = ({ activity, planned, cancelled }) => {
  const [plannedGeometries, setPlannedGeometries] = useState<Geometry[]>([])
  const [geoLayers, setGeoLayers] = useState<Layer[]>([])
  const [currentGeometry, setCurrentGeometry] = useState<number>(-1)
  const [planningGeometries, setPlanningGeometries] = useState<PlanningActivityGeometry[]>([])
  const [pendingGeometry, setPendingGeometry] = useState<PendingItem | undefined>(undefined)
  const [drawOptions, setDrawOptions] = useState<PM.ToolbarOptions>({})
  const [globalOptions, setGlobalOptions] = useState<PM.GlobalOptions>({})
  const [translations] = useState<CustomTranslationType>(CustomTranslation)

  const map = useMap()

  useEffect(() => {
    setPlannedGeometries([])
    setPlanningGeometries([])
    setCurrentGeometry(-1)
    if (activity && activity.geometries) {
      setPlanningGeometries(activity.geometries)
      setCurrentGeometry(0)
    }
  }, [activity])

  useEffect(() => {
    if (pendingGeometry) {
      const layerAsAny = pendingGeometry.layer as any
      let res: Geometry | undefined
      switch (pendingGeometry.shape) {
        case 'Line': {
          const longLats = layerAsAny._latlngs.map((pt: LatLng): number[] => {
            return [pt.lng, pt.lat]
          })
          res = {
            type: 'LineString',
            coordinates: longLats
          }
          break
        }
        case 'Polygon': {
          const longLats = layerAsAny._latlngs.map((pt: LatLng[]): number[][] => {
            return pt.map((pt2: LatLng): number[] => {
              return [pt2.lng, pt2.lat]
            })
          })
          res = {
            type: 'Polygon',
            coordinates: longLats
          }
          break
        }
        case 'Marker': {
          const pt2 = layerAsAny._latlng
          const longLat = [pt2.lng, pt2.lat]
          res = {
            type: 'Point',
            coordinates: longLat
          }
          break
        }
      }
      // append the layer to our private list
      const newLayers = geoLayers.concat(pendingGeometry.layer)
      setGeoLayers(newLayers)

      if (res) {
        const newGeoms = plannedGeometries.concat(res)
        setPlannedGeometries(newGeoms)
        setPendingGeometry(undefined)
      }
    }
  }, [pendingGeometry])

  useEffect(() => {
    if (currentGeometry >= 0) {
      // configure the drawing tool
      const current = planningGeometries[currentGeometry]
      const globalOpts: PM.GlobalOptions = {
        continueDrawing: false,
        editable: false,
        allowCutting: false,
        allowRemoval: false,
        allowRotation: false
      }

      // switch off all controls
      const toolbarOpts: PM.ToolbarOptions = {
        position: 'bottomright',
        drawControls: false,
        editControls: false
      }

      map.pm.disableDraw()

      // now just switch on the control we want
      switch (current.aType) {
        case GeometryType.point: {
          console.log('marker', current)
          translations.tooltips.placeMarker = 'Click map to specify point location for <b>[' + current.name + ']</b>'
          map.pm.enableDraw('Marker')
          break
        }
        case GeometryType.polyline: {
          console.log('line', current)
          translations.tooltips.firstVertex = 'Click map to start route for <b>[' + current.name + ']</b>'
          translations.tooltips.continueLine = 'Click map to continue <b>[' + current.name + ']</b>'
          translations.tooltips.finishLine = 'Click existing route point to complete <b>[' + current.name + ']</b>'
          map.pm.enableDraw('Line')
          break
        }
        case GeometryType.polygon: {
          console.log('poly', current)
          translations.tooltips.firstVertex = 'Click map to start area for <b>[' + current.name + ']</b>'
          translations.tooltips.continueLine = 'Click map to continue <b>[' + current.name + ']</b>'
          translations.tooltips.finishPoly = 'Click existing marker to complete <b>[' + current.name + ']</b>'
          map.pm.enableDraw('Polygon')
          break
        }
      }
      map.pm.setLang('en', translations, 'en')

      setDrawOptions(toolbarOpts)
      setGlobalOptions(globalOpts)
    }
  }, [currentGeometry])

  useEffect(() => {
    map.pm.setLang('en', translations, 'en')
    console.log('trans', translations.tooltips)
  }, [globalOptions, drawOptions])

  useEffect(() => {
    if (plannedGeometries.length === planningGeometries.length && plannedGeometries.length > 0) {
      // we've generated all geometries
      const plannedGeoms = plannedGeometries.map((geom: Geometry, index: number) => {
        const planned: PlannedActivityGeometry = {
          uniqid: planningGeometries[index].uniqid,
          geometry: {
            type: 'Feature',
            properties: {},
            geometry: geom
          }
        }
        return planned
      })
      planned(plannedGeoms)

      // now delete the GeoMan layer
      geoLayers.forEach((layer: Layer) => layer.remove())
      setGeoLayers([])
    } else if (plannedGeometries.length > 0) {
      // move forward one
      setCurrentGeometry(currentGeometry + 1)
    }
  }, [plannedGeometries])

  const cancelDrawing = (): void => {
    if (map) {
      map.pm.disableDraw()
      // also ditch the lines
      const layers = map.pm.getGeomanDrawLayers()
      if (layers.length) {
        layers.forEach((layer: Layer) => layer.remove())
      }
    }
    cancelled()
  }

  const onCreate = (e: { shape: string, layer: Layer }): void => {
    setPendingGeometry(e)
  }

  return (
    <> {activity &&
      <>
        <div className={cx('leaflet-control')}>
          <Item onClick={cancelDrawing}><FontAwesomeIcon size={'lg'} icon={faPlaneSlash} /></Item>
        </div>
        <GeomanControls
          options={drawOptions}
          globalOptions={globalOptions}
          onCreate={onCreate}
        />
      </>
    }
    </>
  )
}

export default OrderDrawing
