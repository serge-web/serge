import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Grid, Link } from '@material-ui/core'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const OrderDetail: React.FC<PropTypes> = ({
  plan, forces, platformTypes, activities, onEditMessage, onEditGeometry, onEditOwnAssets, onEditOppAssets
}) => {
  const [props, setProps] = useState<string[]>([])

  useEffect(() => {
    // sort out the properties that aren't formal ("special") elements of planning-message
    const ignore = ['ownAssets', 'otherAssets', 'activity', 'location', 'Reference', 'title']
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
      <CardContent>{title} <Link className={styles.link} onClick={() => onEdit(reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
      <CardContent>
        {assIds && assIds.length > 0 && <ul>
          {assIds.map((id: string, index: number) => {
            const asset = findAsset(forces, id)
            if (asset) {
              const pType = platformTypes.find((plat: PlatformTypeData) => plat.uniqid === asset.platformTypeId)
              return <li key={index}>{asset.name} - {pType && pType.name}</li>
            } else {
              return <div key={index}>Not Found</div>
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
            <CardContent>Location<Link className={styles.link} onClick={() => onEditGeometry(details.reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
            <CardContent>
              {details.location && details.location.length > 0
                ? <ul> {
                  details.location.map((geom: PlannedActivityGeometry, index: number) => {
                    const activity = details.activity
                    if (activity) {
                      const theAct: PlanningActivity | undefined = activities.find((act: PlanningActivity) => {
                        return act.geometries && act.geometries.find((plan: PlanningActivityGeometry) => plan.uniqid === geom.uniqid)
                      })
                      if (theAct && theAct.geometries) {
                        const theGeom = theAct.geometries.find((plan: PlanningActivityGeometry) => plan.uniqid === geom.uniqid)
                        if (theGeom) {
                          return <li key={index}>{theGeom.name}</li>
                        }
                      }
                    }
                    return <span key={index}></span>
                  })}
                </ul>
                : <span key='na2'>N/A</span>}
            </CardContent>
          </Card>
        </Grid>
        <Grid>
          <Card key='props'>
            <CardContent>Template Props<Link className={styles.link} onClick={() => onEditMessage(details.reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
            <CardContent>
              {props.map((val: string, index: number) => {
                return <li key={index}>{val}</li>
              })
              }
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default OrderDetail
