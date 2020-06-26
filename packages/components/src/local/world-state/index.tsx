import React, { useEffect, useState } from 'react'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Button from '../form-elements/button'
import cx from 'classnames'
import { getIconClassname } from '../asset-icon'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Route, RouteChild } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'

interface PlannedRoute {
  name: string
  uniqid: string
  numPlanned: number
  underControl: boolean
  forceName: string
  platformType: string
  selected: boolean
  hosting: Array<RouteChild>
  comprising: Array<RouteChild>
}

export const WorldState: React.FC<PropTypes> = ({
  name, store, phase, isUmpire, setSelectedAsset,
  submitTitle, submitForm, showOtherPlatforms
}: PropTypes) => {
  const [routes, setRoutes] = useState<Array<PlannedRoute>>([])

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */
  useEffect(() => {
    const tmpRoutes: PlannedRoute[] = []
    store.routes.forEach((route: Route) => {
      const pRoute: PlannedRoute = {
        name: route.name,
        uniqid: route.uniqid,
        numPlanned: route.planned.length,
        underControl: route.underControl,
        forceName: route.perceivedForceName,
        platformType: route.platformType,
        selected: route.selected,
        hosting: route.hosting,
        comprising: route.comprising
      }
      tmpRoutes.push(pRoute)
    })
    setRoutes(tmpRoutes)
  }, [store, phase])

  // an asset has been clicked on
  const clickEvent = (id: string): void => {
    if (setSelectedAsset) {
      setSelectedAsset(id)
    }
  }

  const submitCallback = (): any => {
    if (submitForm) {
      submitForm()
    }
  }

  /**
   *
   * @param {PlannedRoute} pRoute this planned route
   * @param {string} forceName name of the force, it's not available lower down the tree
   * @param {boolean} topLevel if this is at the top level of the tree - used to control the level of detail supplied
   * @returns  JSX for this route, plus children if applicable
   */
  const renderItem = (pRoute: PlannedRoute, forceName: string, topLevel: boolean): JSX.Element => {
    const descriptionText = (isUmpire || pRoute.underControl) && topLevel
      ? `${pRoute.numPlanned} turns planned` : ''

    const hostItems: Array<PlannedRoute> = []
    if (pRoute.hosting && pRoute.hosting.length) {
      pRoute.hosting.forEach((route: RouteChild) => {
        const newItem: PlannedRoute = {
          name: route.name,
          comprising: route.asset ? route.asset.comprising : [],
          forceName: route.force,
          hosting: route.asset ? route.asset.hosting : [],
          numPlanned: 0,
          platformType: route.platformType,
          selected: false,
          underControl: true,
          uniqid: route.uniqid
        }
        hostItems.push(newItem)
      })
    }

    const compriseItems: Array<PlannedRoute> = []
    if (pRoute.comprising && pRoute.comprising.length) {
      pRoute.comprising.forEach((route: RouteChild) => {
        const newItem: PlannedRoute = {
          name: route.name,
          comprising: route.asset.comprising,
          forceName: route.force,
          hosting: route.asset.hosting,
          numPlanned: 0,
          platformType: route.platformType,
          selected: false,
          underControl: true,
          uniqid: route.uniqid
        }
        compriseItems.push(newItem)
      })
    }

    const checkStatus: boolean = pRoute.numPlanned > 0

    // if we don't know the force name, just use the one from the parent
    const forceNameToUse = pRoute.forceName || forceName

    const icClassName = getIconClassname(forceNameToUse.toLowerCase(), pRoute.platformType.toLowerCase(), pRoute.selected)

    /** local click handler, to decide whether to select asset */
    const assetClick = (id: string) => {
      // only select target if we're in "other platforms"
      // TODO: we need to stop the event propagating back up the tree
      if (showOtherPlatforms) {
        clickEvent(id)
      }
    }

    return (
      <>
        <div className={styles.item}>
          <div className={cx(icClassName, styles['item-icon'])}/>
          <div className={styles['item-content']}>
            <div>
              <p>{pRoute.name}</p>
              <p>{descriptionText}</p>
            </div>

          </div>
          {!showOtherPlatforms && topLevel && <div className={styles['item-check']}>
            {checkStatus === true && <CheckCircleIcon style={{ color: '#007219' }} />}
            {checkStatus === false && <CheckCircleIcon style={{ color: '#B1B1B1' }} />}
          </div>}
        </div>
        {hostItems && hostItems.length > 0 && <div>Hosting:<ol>
          {hostItems.map((child: PlannedRoute) => (
            <li key={'item-' + child.uniqid} onClick={(): any => assetClick(child.uniqid)}>{renderItem(child, forceNameToUse, false)}</li>
          ))}</ol></div>}
        {compriseItems && compriseItems.length > 0 && <div>Comprising:<ol>
          {compriseItems.map((child: PlannedRoute) => (
            <li key={'item-' + child.uniqid} onClick={(): any => assetClick(child.uniqid)}>{renderItem(child, forceNameToUse, false)}</li>
          ))}</ol></div>}
      </>
    )
  }

  // sort out which title to use on orders panel
  const customTitle = showOtherPlatforms ? 'Other Visible Platforms' : name

  // find out if this is a non-umpire, and we're in the adjudication phase
  const playerInAdjudication: boolean = !isUmpire && phase === ADJUDICATION_PHASE

  return <>
    <div className={styles['world-state']}>
      <h2 className={styles.title}>{customTitle}</h2>
      <ul>
        {routes
          .filter((pRoute: PlannedRoute) => pRoute.underControl === !showOtherPlatforms)
          .map((pRoute: PlannedRoute): any => (
            <li
              key={'r_li_' + pRoute.uniqid}
              onClick={(): any => clickEvent(pRoute.uniqid)}
            >
              {renderItem(pRoute, pRoute.forceName, true)}
            </li>
          ))
        }
      </ul>
      {submitTitle && !showOtherPlatforms && !playerInAdjudication &&
        <div className={styles.submit}>
          <Button size='m' onClick={submitCallback}>{submitTitle}</Button>
        </div>
      }
    </div>
  </>
}

export default WorldState
