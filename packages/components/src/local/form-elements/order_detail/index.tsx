import { Card } from '@material-ui/core'
import { PlannedActivityGeometry } from '@serge/custom-types'
import { PlanningMessageStructure } from '@serge/custom-types/message'
import React from 'react'
import PropTypes from './types/props'


export const OrderDetail: React.FC<PropTypes> = ({
  plan
}) => {
  const tidyAssList = (assIds: string[] | undefined): React.ReactElement => {
    if (assIds && assIds.length > 0) {
      return <ul>
        {assIds.map((value: string) => {
          <li>{value}</li>
        })
        }
      </ul>
    }
    return <span>n/a</span>
  }
  const details: PlanningMessageStructure = plan.message
  return (
    <div>
       <div><b>Title: </b>{details.title}</div>
       <Card>
        {tidyAssList(details.ownAssets)}
       </Card>
       <Card>
        {tidyAssList(details.otherAssets)}
       </Card>
        {details.location && details.location.length > 0 &&
          <Card>
            { details.location.map((geom: PlannedActivityGeometry) => {
                return geom.uniqid + ', '
              })}
          </Card>
        }
        <div>[Edit]</div>
    </div>    
  )
}

export default OrderDetail
