import React, { useEffect, useState } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { Route } from '@serge/custom-types'

interface PlannedRoute {
  name: string    
}

export const WorldState: React.FC<PropTypes> = ({ name, store }: PropTypes) =>
{
  const [routes, setRoutes] = useState<Array<PlannedRoute>>([])

  /** filter the list of cells allowable for this platform
   * depending on requested cell type
   */
  useEffect(() => {
    if(store) {
      const tmpRoutes: PlannedRoute[] = []
      store.routes.forEach((route: Route) => {
        const pRoute: PlannedRoute = {name: route.uniqid}
        tmpRoutes.push(pRoute)
      })
      setRoutes(tmpRoutes)
      console.log('routes', routes)
    }
    // {routes.map((pRoute: PlannedRoute) => {
    //   pRoute.name
    // })}
    
  }, [store])

  return <>
    <div className={styles['world-state']}>
      This is an example component 2, It will eventually become {name}
    </div>
  </>
}

export default WorldState
