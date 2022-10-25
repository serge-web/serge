import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Grid, Link } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import React, { useEffect, useState } from 'react'
import PropTypes from './types/props'

export const OrderDetail: React.FC<PropTypes> = ({
  plan, forces, platformTypes, activities, onEditMessage, onEditGeometry, onEditOwnAssets, onEditOppAssets
}) => {
  const [props, setProps] = useState<string[]>([])

  useEffect(() => {
    // sort out the properties that aren't formal ("special") elements of planning-message
    const ignore = ['ownAssets', 'otherAssets', 'activity', 'location', 'reference', 'title']
    const res: string[] = []
    for (const property in plan.message) {
      if (!ignore.includes(property)) {
        res.push(property + ': ' + plan.message[property])
      }
    }
    setProps(res)
  }, [plan])

  const tidyAssList = (title: string, assIds: string[] | undefined, reference: string, onEdit: { (reference: string): void }): React.ReactElement => {
    return <Card key={title}>
      <CardContent>{title} <Link onClick={() => onEdit(reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
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
      <Grid container spacing={3}>
        <Grid item>
          {tidyAssList('Own', details.ownAssets, details.reference, onEditOwnAssets)}
        </Grid>
        <Grid item>
          {tidyAssList('Other', details.otherAssets, details.reference, onEditOppAssets)}
        </Grid>
        <Grid item>
          <Card key='activity'>
            <CardContent>Location<Link onClick={() => onEditGeometry(details.reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
            <CardContent>
              {details.location && details.location.length > 0
                ? <ul> {
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
                : <span>N/A</span>}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card key='props'>
        <CardContent>Template Props</CardContent>
        <CardContent>
          {props.map((val: string) => {
            return <li>{val}</li>
          })
          }
        </CardContent>
      </Card>
      <div> <Button
        variant="contained"
        color="default"
        onClick={() => onEditMessage(details.reference)}
      >
        Edit
      </Button></div>
    </div>
  )
}

export default OrderDetail
