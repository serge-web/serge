import { Card, CardContent } from '@material-ui/core'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import React from 'react'
import PropTypes from './types/props'

export const OrderDetail: React.FC<PropTypes> = ({
  plan, forces, platformTypes, activities
}) => {
  const tidyAssList = (assIds: string[] | undefined): React.ReactElement => {
    if (assIds && assIds.length > 0) {
      return <ul>
        {assIds.map((id: string) => {
          const asset = findAsset(forces, id)
          if (asset) {
            const pType = platformTypes.find((plat: PlatformTypeData) => plat.uniqid === asset.platformTypeId)
            return <li>{asset.name} - {pType && pType.name}</li>
          } else {
            return <span>Not Found</span>
          }
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
      <Card key='own'>
        <CardContent>Own</CardContent>
        <CardContent>
          {tidyAssList(details.ownAssets)}
        </CardContent>
      </Card>
      <Card key='other'>
        <CardContent>Other</CardContent>
        <CardContent>
          {tidyAssList(details.otherAssets)}
        </CardContent>
      </Card>
      <Card key='activity'>
        <CardContent>Location</CardContent>
        <CardContent>
          {details.location && details.location.length > 0 &&
            details.location.map((geom: PlannedActivityGeometry) => {
              const activity = details.activity
              if (activity) {
                const theAct: PlanningActivity | undefined = activities.find((act: PlanningActivity) => act.uniqid === activity)
                if (theAct) {
                  const geom3 = theAct.geometries && theAct.geometries.find((pGeom: PlanningActivityGeometry) => pGeom.uniqid === geom.uniqid)
                  if (geom3) {
                    return geom3.name
                  }
                }
              }
              return geom.uniqid + ', '
            })
          }
        </CardContent>
      </Card>
      <div>[Edit]</div>
    </div>
  )
}

export default OrderDetail
