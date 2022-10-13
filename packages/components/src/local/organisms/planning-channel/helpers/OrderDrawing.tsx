import { GeometryType } from '@serge/config'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import cx from 'classnames'
import { Geometry } from 'geojson'
import { LatLng, Layer, PM } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import Item from '../../../map-control/helpers/item'

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
        case 'Point': {
          const pt2 = layerAsAny._latlngs
          const longLats = [pt2.lng, pt2.lat]
          res = {
            type: 'Point',
            coordinates: longLats
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
        drawCircle: false,
        drawMarker: false,
        drawPolygon: false,
        drawPolyline: false,
        drawCircleMarker: false,
        drawRectangle: false,
        drawText: false,
        removalMode: false
      }
      // now just switch on the control we want
      switch (current.aType) {
        case GeometryType.point: {
          toolbarOpts.drawMarker = true
          break
        }
        case GeometryType.polyline: {
          toolbarOpts.drawPolyline = true
          break
        }
        case GeometryType.polygon: {
          toolbarOpts.drawPolygon = true
          break
        }
      }
      setDrawOptions(toolbarOpts)
      setGlobalOptions(globalOpts)
    }
  }, [currentGeometry])

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
    cancelled()
  }

  const onCreate = (e: { shape: string, layer: Layer }): void => {
    setPendingGeometry(e)
  }

  return (
    <> {activity &&
      <>
        <div className={cx('leaflet-control')}>
          <Item onClick={cancelDrawing}>Cancel</Item>
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
