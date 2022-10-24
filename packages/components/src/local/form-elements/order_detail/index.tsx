import { Card, CardContent } from '@material-ui/core'
import { PlannedActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
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
      <Card>
        <CardContent>Location</CardContent>
        <CardContent>
          {details.location && details.location.length > 0 &&
            details.location.map((geom: PlannedActivityGeometry) => {
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
