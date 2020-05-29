import React, { useEffect, useState } from 'react'

/* Import Types */
import PropTypes from './types/props'

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
}

export const WorldState: React.FC<PropTypes> = ({ name, store }: PropTypes) => {
  const [routes, setRoutes] = useState<Array<PlannedRoute>>([])

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */
  useEffect(() => {
    if (store) {
      const tmpRoutes: PlannedRoute[] = []
      store.routes.forEach((route: Route) => {
        const pRoute: PlannedRoute = {
          name: route.name,
          uniqid: route.uniqid,
          numPlanned: route.planned.length,
          underControl: route.underControl,
          forceName: route.forceName,
          platformType: route.platformType
        }
        tmpRoutes.push(pRoute)
      })
      setRoutes(tmpRoutes)
    }
  }, [store])

  return <>
    <div className={styles['world-state']}>
      This is an example component 2, It will eventually become {name}
      <h5>My control</h5>
      <ul>
      { 
        routes.filter((pRoute: PlannedRoute) => pRoute.underControl)
                .map((pRoute: PlannedRoute) => {
                  return <li>{pRoute.name}/{pRoute.platformType} - {pRoute.numPlanned}</li>
                })
      
      }</ul>
      <h5>Not under control</h5>
      <ul>
      { 
        routes.filter((pRoute: PlannedRoute) => !pRoute.underControl)
                .map((pRoute: PlannedRoute) => {
                  return <li>{pRoute.name}/{pRoute.platformType} - {pRoute.numPlanned}</li>
                })
      
      }</ul>
    </div>
  </>
}

export default WorldState
