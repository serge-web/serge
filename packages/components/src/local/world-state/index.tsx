import React, { useEffect, useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { Button } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Route } from '@serge/custom-types'

interface PlannedRoute {
  name: string
  uniqid: string
  numPlanned: number
  underControl: boolean
  forceName: string
  platformType: string
  selected: boolean
}

export const WorldState: React.FC<PropTypes> = ({ name, store, phase, setSelectedAsset, submitTitle, submitForm }: PropTypes) => {
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
        forceName: route.forceName,
        platformType: route.platformType,
        selected: route.selected
      }
      tmpRoutes.push(pRoute)
    })
    setRoutes(tmpRoutes)
  }, [store, phase])

  // Toggles the map bar on and off
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

  return <>
    <div className={styles['world-state']}>
      <h2>{name}</h2>
      <ul>
        <li>== [Under my control] ==</li>
        {
          routes.filter((pRoute: PlannedRoute) => pRoute.underControl)
            .map((pRoute: PlannedRoute): any => {
              return <li key={'r_li_' + pRoute.uniqid} onClick={():any => clickEvent(pRoute.uniqid)} >{pRoute.name}/{pRoute.platformType}/{pRoute.forceName} - {pRoute.numPlanned} planned {pRoute.selected ? '[*]' : ''}</li>
            })
        }
        <li>== [Not under my control] ==</li>
        {
          routes.filter((pRoute: PlannedRoute) => !pRoute.underControl)
            .map((pRoute: PlannedRoute): any => {
              return <li key={'r_li_' + pRoute.uniqid} onClick={():any => clickEvent(pRoute.uniqid)} >{pRoute.name}/{pRoute.platformType}/{pRoute.forceName} {pRoute.selected ? '[*]' : ''}</li>
            })

        }</ul>
      {
        submitTitle && <Button onClick={submitCallback}>{submitTitle}</Button>
      }

    </div>
  </>
}

export default WorldState
