import { Phase } from '@serge/config'
import { ForceData, GroupedActivitySet, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Item from '../../../map-control/helpers/item'

interface NewOrderActionProps {
  playerForce: ForceData['uniqid']
  actions: PerForcePlanningActivitySet[]
  newActionHandler: { (category: string, planId: string): void }
  isUmpire: boolean
  phase: Phase
}

/* Render component */
export const NewOrderActions: React.FC<NewOrderActionProps> = ({ playerForce, isUmpire, phase, actions, newActionHandler }) => {
  // maintain local list of actions, ready to be rendered
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
      { actionItems && <div className={ cx('leaflet-control') }>
        { actionItems.groupedActivities.map((group: GroupedActivitySet, index: number) => {
          return <Item key={'g_' + index} title={ group.category }>
            {group.activities.map((plan: string | PlanningActivity, index2: number) => {
              return (typeof plan === 'object') &&
                <Item key={index + '_' + index2} title={ plan.name } onClick={() => newActionHandler(group.category, plan.uniqid) } />
            })}
          </Item>
        })
        }</div>
      }
    </>
  )
}

export default NewOrderActions
