import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import cx from 'classnames'
import { Layer } from 'leaflet'
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
  const [plannedGeometries, setPlannedGeometries] = useState<PlannedActivityGeometry[]>([])
  const [currentGeometry, setCurrentGeometry] = useState<number>(-1)
  const [planningGeometries, setPlanningGeometries] = useState<PlanningActivityGeometry[]>([])

  useEffect(() => {
    if (activity && activity.geometries) {
      setPlanningGeometries(activity.geometries)
      setCurrentGeometry(0)
    } else {
      setCurrentGeometry(-1)
    }
  }, [activity])

  useEffect(() => {
    // configure the drawing tool
    const current = planningGeometries[currentGeometry]
    console.log('config for', current)
  }, [currentGeometry])

  useEffect(() => {
    if (currentGeometry > planningGeometries.length) {
      // we've generated all geometries
      planned(plannedGeometries)
    } else {
      // move forward one
      setCurrentGeometry(currentGeometry + 1)
    }
  }, [plannedGeometries])

  const onCreate = (e: { shape: string, layer: Layer }): void => {
    // store planned geometry
    console.log('create completed', e)
    const newGeom: PlannedActivityGeometry = {
      uniqid: planningGeometries[currentGeometry].uniqid,
      geometry: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [[-22, 144], [-18, 130], [-16, 123]]
        }
      }
    }
    const newGeoms = plannedGeometries.concat(newGeom)
    setPlannedGeometries(newGeoms)
  }

  console.log('order drawing', activity)
  return (
    <> {activity &&
      <>
        <div className={cx('leaflet-control')}>
          <Item onClick={cancelled}>Cancel</Item>
        </div>
        <GeomanControls
          options={{
            position: 'bottomright'
          }}
          globalOptions={{
            continueDrawing: true,
            editable: false
          }}
          onCreate={onCreate}
        />
      </>
    }
    </>
  )
}

export default OrderDrawing
