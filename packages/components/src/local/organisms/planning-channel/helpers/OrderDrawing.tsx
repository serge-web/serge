import { GeometryType } from '@serge/config'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import cx from 'classnames'
import { Geometry } from 'geojson'
import { Layer, PM } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import Item from '../../../map-control/helpers/item'

interface OrderDrawingProps {
  activity: PlanningActivity | undefined
  cancelled: { (): void }
  planned: { (geometries: PlannedActivityGeometry[]): void }
}

/* Render component */
export const OrderDrawing: React.FC<OrderDrawingProps> = ({ activity, planned, cancelled }) => {
  const [plannedGeometries, setPlannedGeometries] = useState<Geometry[]>([])
  const [currentGeometry, setCurrentGeometry] = useState<number>(-1)
  const [planningGeometries, setPlanningGeometries] = useState<PlanningActivityGeometry[]>([])
  const [pendingGeometry, setPendingGeometry] = useState<Geometry | undefined>(undefined)
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
      const newGeoms = plannedGeometries.concat(pendingGeometry)
      setPlannedGeometries(newGeoms)
      setPendingGeometry(undefined)
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
      const toolbarOpts: PM.ToolbarOptions = {
        position: 'bottomright',
        drawCircle: false,
        drawMarker: false,
        drawPolygon: false,
        drawPolyline: false,
        drawCircleMarker: false,
        drawRectangle: false,
        drawText: false
        //        editControls: false
      }
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
      console.log('config for', currentGeometry, current)
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
    } else if (plannedGeometries.length > 0) {
      // move forward one
      setCurrentGeometry(currentGeometry + 1)
    }
  }, [plannedGeometries])

  const cancelDrawing = (): void => {
    cancelled()
  }

  const onCreate = (e: { shape: string, layer: Layer }): void => {
    const newGeom: Geometry = {
      type: 'LineString',
      coordinates: [[-22, 144], [-18, 130], [-16, 123]]
    }
    setPendingGeometry(newGeom)
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
