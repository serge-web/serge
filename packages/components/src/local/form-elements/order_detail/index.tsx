import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Grid, Link } from '@material-ui/core'
import { PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry, PlatformTypeData } from '@serge/custom-types'
import { PlanningMessageStructureCore } from '@serge/custom-types/message'
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

  const tidyAssList = (title: string, assIds: undefined | Array<{asset: string, number?: number}>, reference: string, onEdit: { (reference: string): void }): React.ReactElement => {
    let assetStrings: string[] = []
    if (assIds && assIds.length) {
      assetStrings = assIds.map((id: string | {asset: string, number?: number}): string => {
        let assetId
        let res = ''
        if (typeof (id) === 'string') {
          assetId = id
        } else {
          assetId = id.asset
          if (id.number) {
            res = ' (' + id.number + ')'
          }
        }
        const asset = findAsset(forces, assetId)
        if (asset) {
          const pType = platformTypes.find((plat: PlatformTypeData) => plat.uniqid === asset.platformTypeId)
          res = asset.name + ' - ' + (pType && pType.name) + res
        } else {
          res = 'Not found'
        }
        return res
      })
    }
    return <Card key={title}>
      <CardContent>{title} <Link className={styles.link} onClick={() => onEdit(reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
      <CardContent>
        {assetStrings.length > 0 && <ul>
          {assetStrings.map((str: string, index: number) => {
            return <li key={index}>{str}</li>
          })
          }
        </ul>
        }
      </CardContent>
    </Card>
  }
  const message: PlanningMessageStructureCore = plan.message
  const theActivity = activities.find((planning: PlanningActivity) => planning.uniqid === message.activity)
  return (
    <div>
      <div><b>{message.Reference} - </b>{message.title} - <b>{theActivity && theActivity.name}</b></div>
      <Grid container spacing={3}>
        <Grid item>
          {tidyAssList('Own', message.ownAssets, message.Reference, onEditOwnAssets)}
        </Grid>
        <Grid item>
          {tidyAssList('Other', message.otherAssets, message.Reference, onEditOppAssets)}
        </Grid>
        <Grid item>
          <Card key='activity'>
            <CardContent>Location<Link className={styles.link} onClick={() => onEditGeometry(message.Reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
            <CardContent>
              {message.location && message.location.length > 0
                ? <ul> {
                  message.location.map((geom: PlannedActivityGeometry, index: number) => {
                    const activity = message.activity
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
            <CardContent>Template Props<Link className={styles.link} onClick={() => onEditMessage(message.Reference)}><FontAwesomeIcon size={'lg'} icon={faEdit} /></Link></CardContent>
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
