import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import PropTypes from './types/props'
import Item from '../../map-control/helpers/item'
import { PlannedActivityGeometry, PlanningActivityGeometry } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'

export const MapDrawActivity: React.FC<PropTypes> = ({
  planningActivity,
  storeFeature,
  cancelFeature
}) => {
  const [planningGeometries, setPlanningGeometries] = useState<PlanningActivityGeometry[]>([])
  const [geometries, setGeometries] = useState<PlannedActivityGeometry[]>([])
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (planningActivity && planningActivity.geometries) {
      setPlanningGeometries(planningActivity.geometries)
    } else {
      console.warn('This activity doesn\'t have geometries', planningActivity && planningActivity.name)
    }
    setIndex(0)
  }, [planningActivity])

  useEffect(() => {
    if (planningGeometries.length) {
      console.log('config UI for', planningGeometries[index].name, !!cancelFeature)
    }
  }, [index, planningGeometries])

  const onClick = (): void => {
    const newGeom: PlannedActivityGeometry = {
      uniqid: planningGeometries[index].uniqid,
      geometry: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[126.386718, -23.885837], [126.210937, -28.149503]]]
        }
      }
    }
    const newGeometries: PlannedActivityGeometry[] = deepCopy(geometries)
    newGeometries.push(newGeom)
    if (newGeometries.length === planningGeometries.length) {
      storeFeature(newGeometries)
      setGeometries([])
      setPlanningGeometries([])
      setIndex(0)
    } else {
      setGeometries(newGeometries)
      setIndex(index + 1)
    }
  }

  return <>
    {planningActivity && <div className={cx('leaflet-control')}>
      <Item
        key={'k_draw_featres'}
        onClick={onClick}
        title={'View As'}>
          Next
      </Item>
      <Item
        key={'k_cancel_featres'}
        onClick={cancelFeature}
        title={'Cancel'}>
          Cancel
      </Item>
    </div>
    }
  </>
}

export default MapDrawActivity
