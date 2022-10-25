import { Card, CardContent } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import React from 'react'
import PropTypes from './types/props'

export const OrderDetail: React.FC<PropTypes> = ({
  plan, forces, platformTypes, activities, onEdit
}) => {
  const tidyAssList = (title: string, assIds: string[] | undefined): React.ReactElement => {
    return <Card key={title}>
      <CardContent>Own</CardContent>
      <CardContent>
        {assIds && assIds.length > 0 && <ul>
          {assIds.map((id: string) => {
            const asset = findAsset(forces, id)
            if (asset) {
              const pType = platformTypes.find((plat: PlatformTypeData) => plat.uniqid === asset.platformTypeId)
              return <li key={id}>{asset.name} - {pType && pType.name}</li>
            } else {
              return <span>Not Found</span>
            }
          })
          }
        </ul>
        }
      </CardContent>
    </Card>
  }
  const details: PlanningMessageStructure = plan.message
  const theActivity = activities.find((planning: PlanningActivity) => planning.uniqid === details.activity)
  return (
    <div>
      <div><b>{details.reference} - </b>{details.title} - <b>{theActivity && theActivity.name}</b></div>
      {tidyAssList('Own', details.ownAssets)}
      {tidyAssList('Other', details.otherAssets)}
      <Card key='activity'>
        <CardContent>Location</CardContent>
        <CardContent>
          {details.location && details.location.length > 0 &&
            <ul> {
              details.location.map((geom: PlannedActivityGeometry) => {
                const activity = details.activity
                if (activity) {
                  const theAct: PlanningActivity | undefined = activities.find((act: PlanningActivity) => {
                    return act.geometries && act.geometries.find((plan: PlanningActivityGeometry) => plan.uniqid === geom.uniqid)
                  })
                  if (theAct && theAct.geometries) {
                    const theGeom = theAct.geometries.find((plan: PlanningActivityGeometry) => plan.uniqid === geom.uniqid)
                    if (theGeom) {
                      return <li key={theGeom.uniqid}>{theGeom.name}</li>
                    }
                  }
                }
                return <></>
              })}
            </ul>
          }
        </CardContent>
      </Card>
      <div> <Button
        variant="contained"
        color="default"
        onClick={() => onEdit(details.reference)}
      >
        Edit
      </Button></div>
    </div>
  )
}

export default OrderDetail
