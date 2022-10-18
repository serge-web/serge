import { GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Select, SelectItem } from '../typings'

type PlanningActitivityMenuProps = {
  /**
   * the tree of activities for this force
   */
  planningActivities: PerForcePlanningActivitySet | undefined
  /**
   * handler for new orders being selected
   */
  handler: { (groupName: GroupedActivitySet['category'], activity: PlanningActivity['uniqid']): void }
  /**
   * flag for whether to show select menu.
   * Note: because we add the control to the map ourself, we we're adding ourselves each time this control
   * Note: was included/remove from the map. To prevent repeatedly being added, we have `showControl` prop.
   * Note: which means the component only gets generated once, and we add/remove a single instance of the
   * Note: control from the map
   * */
  showControl: boolean
}

const PlanningActitivityMenu: React.FC<PlanningActitivityMenuProps> = ({ planningActivities, handler, showControl }) => {
  const map = useMap()

  const [controlButton, setControlButton] = useState<Select | undefined>(undefined)

  const separator = '////'

  const handleClick = (value: string): void => {
    const parts = value.split(separator)
    const group = parts[0]
    const activity = parts[1]
    handler && handler(group, activity)
  }

  /** generate the tree of activities */
  const getItems = (activities: PerForcePlanningActivitySet): SelectItem[] => {
    return activities.groupedActivities.map((group: GroupedActivitySet) => {
      const realItems = group.activities.filter((act: string | PlanningActivity) => typeof act !== 'string')
      return {
        label: group.category,
        value: group.category,
        items: realItems.map((item: string | PlanningActivity) => {
          const theAct = item as PlanningActivity
          return {
            label: theAct.name,
            value: group.category + separator + theAct.uniqid
          }
        })
      }
    })
  }

  useEffect(() => {
    if (planningActivities) {
      if (showControl) {
        if (!controlButton) {
          const items = getItems(planningActivities)
          const selectControl = L.control.select({
            position: 'topleft',
            iconMain: '📝',
            iconGroupChecked: '⊳',
            iconGroupUnchecked: '⊳',
            items: items,
            onSelect: (item: any) => {
              handleClick(item)
            }
          })
          setControlButton(selectControl)
        }
        if (controlButton) {
          controlButton.addTo(map)
        }
      } else {
        // control not visible. Remove it, if we have to
        if (controlButton) {
          controlButton.remove()
        }
      }
    }
  }, [planningActivities, showControl, controlButton])

  return <></>
}

export default PlanningActitivityMenu