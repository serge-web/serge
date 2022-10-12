import { Phase } from '@serge/config'
import { ForceData, GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Item from '../../../map-control/helpers/item'

interface NewOrderActionProps {
  playerForce: ForceData['uniqid']
  actions: PerForcePlanningActivitySet[]
  newActionHandler: { (planId: string): void }
  isUmpire: boolean
  phase: Phase
}

/* Render component */
export const NewOrderActions: React.FC<NewOrderActionProps> = ({ playerForce, isUmpire, phase, actions, newActionHandler }) => {
  // maintain local list of cell label styles
  const [actionItems, setActionItems] = useState<PerForcePlanningActivitySet | undefined>(undefined)

  useEffect(() => {
    if (phase === Phase.Planning && !isUmpire) {
      // collate list of action items
      setActionItems(actions.find((perForce: PerForcePlanningActivitySet) => perForce.force === playerForce))
    } else {
      // collate list of action items
      setActionItems(undefined)
    }
  }, [actions, playerForce, isUmpire, phase])

  return (
    <>
      {actionItems && <div className={cx('leaflet-control')}>
        {actionItems.groupedActivities.map((group: GroupedActivitySet) => {
          return <Item title={group.category}>
            {group.activities.map((plan: string | PlanningActivity) => {
              return (typeof plan === 'object') &&
                <Item title={plan.name} onClick={newActionHandler(plan.uniqid)} />
            })}
          </Item>
        })
        }</div>
      }
    </>
  )
}

export default NewOrderActions
