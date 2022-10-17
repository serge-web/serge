import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import L from 'leaflet'
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet-v4'

type PlanningActitivityMenuProps = {
  /**
   * the tree of activities for this force
   */
  planningActivities: PerForcePlanningActivitySet | undefined
  /**
   * handler for new orders being selected
   */
  handler: {(groupName: GroupedActivitySet['category'], activity: PlanningActivity['uniqid']): void}
}

const PlanningActitivityMenu: React.FC<PlanningActitivityMenuProps> = ({ planningActivities, handler }) => {
  const map = useMap()

  const separator = '////'

  const handleClick = (value: string): void => {
    const parts = value.split(separator)
    const group = parts[0]
    const activity = parts[1]
    handler && handler(group, activity)
  }

  useEffect(() => {
    if (planningActivities) {
      const items = planningActivities.groupedActivities.map((group: GroupedActivitySet) => {
        const realItems = group.activities.filter((act: string | PlanningActivity) => typeof act !== 'string')
        const children = realItems.map((item: string | PlanningActivity) => {
          const theAct = item as PlanningActivity
          return {
            label: theAct.name,
            value: group.category + separator + theAct.uniqid
          }
        })
        return {
          label: group.category,
          value: group.category,
          items: children
        }
      })
      L.control.select({
        position: 'topleft',
        items: items,
        onSelect: (item: any) => {
          handleClick(item)
        }
      }).addTo(map)
    }
  }, [planningActivities])

  return <></>
}

export default PlanningActitivityMenu
