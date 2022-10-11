import { ForceData, GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Item from '../../../map-control/helpers/item'

interface NewOrderActionProps {
  playerForce: ForceData['uniqid']
  actions: PerForcePlanningActivitySet[]
  newActionHandler: { (planId: string): void }
}

/* Render component */
export const NewOrderActions: React.FC<NewOrderActionProps> = ({ playerForce, actions, newActionHandler }) => {
  // maintain local list of cell label styles
  const [actionItems, setActionItems] = useState<PerForcePlanningActivitySet | undefined>(undefined)

  useEffect(() => {
    // collate list of action items
    setActionItems(actions.find((perForce: PerForcePlanningActivitySet) => perForce.force === playerForce))
  }, [actions, playerForce])

  return (
    <>
      {actionItems && <div className={cx('leaflet-control')}>
        { actionItems.groupedActivities.map((group: GroupedActivitySet) => { 
          return <Item title={group.category}>
            { group.activities.map((plan: string | PlanningActivity) => {
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
