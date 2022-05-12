import L from 'leaflet'
import { RouteStore, Route, RouteTurn, MapAnnotations, MapAnnotation } from '@serge/custom-types'
import { cloneDeep } from 'lodash'
import { h3ToGeo } from 'h3-js'

/** signature of method to update location */
interface ClusterSetter {
  (newLoc: L.LatLng): void
}

interface Cluster {
  /** the cell we're refering to */
  hex: string
  /** methods to update subject items */
  setters: Array<ClusterSetter>
  /** indexes of features.  We need this because of
   * special processing for planned turns. We both have a
   * full plannedTurns and a plannedTurnsTrimmed, but
   * will only ever display one of them. This makes
   * it look like there are twice as many turns as we expect,
   * which confuses the spacing algorithm
   */
  ids: Array<string>
}

const storeInCluster = (store: Array<Cluster>, setter: ClusterSetter, position: string, id: string): void => {
  let cluster: Cluster | undefined = store.find(cluster => cluster.hex === position)
  if (cluster === undefined) {
    cluster = {
      hex: position,
      setters: [],
      ids: []
    }
    store.push(cluster)
  }
  cluster.setters.push(setter)
  // only add the id if it isn't present
  if (!cluster.ids.includes(id)) {
    cluster.ids.push(id)
  }
}

const findLocations = (routes: RouteStore, markers: MapAnnotations, selected: string | undefined): Array<Cluster> => {
  const res: Array<Cluster> = []
  // loop through store
  routes.routes.forEach((route: Route) => {
    // start with location
    if (route.currentPosition) {
      const updateAssetLocation: ClusterSetter = (newLoc: L.LatLng): void => {
        route.currentLocation2 = newLoc
      }
      storeInCluster(res, updateAssetLocation, route.currentPosition, route.name + '_pos')
    }

    // we apply the same processing to planned and plannedTrimmed, so wrap
    // it in a function
    const tidyList = (turns: RouteTurn[], uniqid: string) => {
      const numSteps: number = turns.length
      for (let stepCtr = 0; stepCtr < numSteps; stepCtr++) {
        const step: RouteTurn = turns[stepCtr]
        if (step.locations && step.route) {
          const len = step.locations.length
          for (let ctr = 0; ctr < len; ctr++) {
            const thisPos: string = step.route[ctr]
            const updateThisStep: ClusterSetter = (newLoc: L.LatLng): void => {
              if (step.locations) {
                step.locations[ctr] = newLoc
              }
            }
            if (uniqid === selected && stepCtr === numSteps - 1 && ctr === len - 1) {
              // this is the selected track, and we're on the last step of the last turn
              // so don't declutter it
            } else {
              storeInCluster(res, updateThisStep, thisPos, route.name + '_p_' + stepCtr)
            }
          }
        }
      }
    }
    // process the two lists
    tidyList(route.planned, route.uniqid)
    tidyList(route.plannedTrimmed, route.uniqid)

    // now planned routes

    // and historic tracks
    route.history.forEach((step: RouteTurn) => {
      if (step.locations && step.route) {
        const len = step.locations.length
        for (let ctr = 0; ctr < len; ctr++) {
          const thisPos: string = step.route[ctr]
          const updateThisStep: ClusterSetter = (newLoc: L.LatLng): void => {
            if (step.locations) {
              step.locations[ctr] = newLoc
            }
          }
          storeInCluster(res, updateThisStep, thisPos, route.name + '_h_' + ctr)
        }
      }
    })
  })

  // and the markers
  markers.forEach((marker: MapAnnotation) => {
    const thisPos: string = marker.location
    const updateThisStep: ClusterSetter = (newLoc: L.LatLng): void => {
      marker.position = newLoc
    }
    storeInCluster(res, updateThisStep, thisPos, marker.uniqid)
  })

  return res
}

/** don't spread the clusters, just put them in the centre */
const dummySpreadClusters = (clusters: Array<Cluster>): void => {
  clusters.forEach((cluster: Cluster) => {
    if (cluster.setters.length > 1) {
      const centreArr = h3ToGeo(cluster.hex)
      const centre = L.latLng(centreArr[0], centreArr[1])
      // ok, go for it
      const len = cluster.setters.length
      // note: we start at 1, since we let the first one stay in the middle
      for (let ctr = 0; ctr < len; ctr++) {
        cluster.setters[ctr](centre)
      }
    }
  })
}
const spreadClusters = (clusters: Array<Cluster>, tileDiameterMins: number): void => {
  clusters.forEach((cluster: Cluster) => {
    const len = cluster.ids.length
    if (len > 1) {
      const centreArr = h3ToGeo(cluster.hex)
      const centre = L.latLng(centreArr[0], centreArr[1])
      const gridDelta = tileDiameterMins / 60 / 4
      // note: we start at 1, since we let the first one stay in the middle
      for (let ctr = 0; ctr < len; ctr++) {
        const thisAngleDegs = ctr * (360.0 / (len))
        const thisAngleRads = (thisAngleDegs) / 180 * Math.PI
        const newLat = centre.lat + gridDelta * Math.sin(thisAngleRads)
        const newLng = centre.lng + gridDelta * Math.cos(thisAngleRads)
        const newLoc = L.latLng(newLat, newLng)
        cluster.setters[ctr](newLoc)
      }
    }
  })
}

/** convenient way of passing data in/out of declutter algorithm */
export interface DeclutterData {
  routes: RouteStore
  markers: MapAnnotations
}

const doDeclutter = (data: DeclutterData, dummy: boolean, tileDiameterMins?: number): DeclutterData => {
  // take deep copy
  const routes: RouteStore = cloneDeep(data.routes)
  const markers: MapAnnotations = cloneDeep(data.markers)

  // get the id of the selected asset
  const selected: string | undefined = routes.selected && routes.selected.uniqid

  // find all clusters
  const clusters: Array<Cluster> = findLocations(routes, markers, selected)

  // now spread out the clusters (note: we're already working with a clone)
  if (dummy) {
    dummySpreadClusters(clusters)
  } else {
    tileDiameterMins && spreadClusters(clusters, tileDiameterMins)
  }

  return { routes: routes, markers: markers }
}

/** don't declutter the data, just put the markers at the centre of the cell */
export const dummyDeclutter = (data: DeclutterData): DeclutterData => {
  return doDeclutter(data, true)
}

/** declutter these map objects */
export const routeDeclutter = (data: DeclutterData, tileDiameterMins: number): DeclutterData => {
  return doDeclutter(data, false, tileDiameterMins)
}
