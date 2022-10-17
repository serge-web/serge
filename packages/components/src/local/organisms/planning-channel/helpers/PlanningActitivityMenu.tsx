import { PlanningActivity } from '@serge/custom-types'
import L from 'leaflet'
import { uniqBy } from 'lodash'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet-v4'
import { PlanningActitivityMenuType } from '../types/props'

type PlanningActitivityMenuProps = {
  planningActivities: PlanningActivity[]
}

const PlanningActitivityMenu: React.FC<PlanningActitivityMenuProps> = ({ planningActivities }) => {
  const map = useMap()

  useEffect(() => {
    const items: PlanningActitivityMenuType[] = uniqBy(planningActivities, 'uniqid').map(activity => {
      const item: PlanningActitivityMenuType = {
        label: activity.name,
        value: activity.uniqid
      }
      if (activity.geometries) {
        item.items = activity.geometries.map(geo => ({
          label: geo.name,
          value: geo.uniqid
        }))
      }
      return item
    })
    L.control.select({
      position: 'topleft',
      items: items,
      onSelect: (item: any) => {
        console.log('select: ', item)
      }
    }).addTo(map)
  }, [planningActivities])

  return <></>
}

export default PlanningActitivityMenu
