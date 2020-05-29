import React, { useEffect, useState } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Route } from '@serge/custom-types'

interface PlannedRoute {
  name: string
  numPlanned: number
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
          name: route.uniqid,
          numPlanned: route.planned.length
        }
        tmpRoutes.push(pRoute)
      })
      setRoutes(tmpRoutes)
    }
  }, [store])

  return <>
    <div className={styles['world-state']}>
      This is an example component 2, It will eventually become {name}
      {routes.map((pRoute: PlannedRoute) => {
        return <li>{pRoute.name} - {pRoute.numPlanned}</li>
    })}
    </div>
  </>
}

export default WorldState
