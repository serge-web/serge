import L from 'leaflet'
import { RouteStore, Route, RouteTurn, MapAnnotations, MapAnnotation } from '@serge/custom-types'
import { cloneDeep } from 'lodash'
import { h3ToGeo } from 'h3-js'

interface ClusterSetter {
  (newLoc: L.LatLng): void
}

interface Cluster {
  hex: string
  center: L.LatLng
  setters: Array<ClusterSetter>
}

interface Cluster2 {
  hex: string
  setters: Array<ClusterSetter>
}

const storeInCluster2 = (store: Array<Cluster2>, setter: ClusterSetter, position: string): void => {
  let cluster: Cluster2 | undefined = store.find(cluster => cluster.hex === position)
  if (cluster === undefined) {
    cluster = {
      hex: position,
      setters: []
    }
    store.push(cluster)
  }
  cluster.setters.push(setter)
}
const storeInCluster = (store: Array<Cluster>, setter: ClusterSetter, position: string, location: L.LatLng): void => {
  let cluster: Cluster | undefined = store.find(cluster => cluster.hex === position)
  if (cluster === undefined) {
    cluster = {
      hex: position,
      center: location,
      setters: []
    }
    store.push(cluster)
  }
  cluster.setters.push(setter)
}

const findLocations2 = (routes: RouteStore, markers: MapAnnotations, selected: string | undefined): Array<Cluster2> => {
  const res: Array<Cluster2> = []
  // loop through store
  routes.routes.forEach((route: Route) => {
    // start with location
    if (route.currentPosition) {
      const updateAssetLocation: ClusterSetter = (newLoc: L.LatLng): void => {
        route.currentLocation2 = newLoc
      }
      storeInCluster2(res, updateAssetLocation, route.currentPosition)
    }

    // now planned routes
    const numSteps: number = route.planned.length
    for (let stepCtr = 0; stepCtr < numSteps; stepCtr++) {
      const step: RouteTurn = route.planned[stepCtr]
      if (step.locations && step.route) {
        const len = step.locations.length
        for (let ctr = 0; ctr < len; ctr++) {
          const thisPos: string = step.route[ctr]
          const updateThisStep: ClusterSetter = (newLoc: L.LatLng): void => {
            if (step.locations) {
              step.locations[ctr] = newLoc
            }
          }
          if (route.uniqid === selected && stepCtr === numSteps - 1 && ctr === len - 1) {
            // this is the selected track, and we're on the last step of the last turn
            // so don't declutter it
          } else {
            storeInCluster2(res, updateThisStep, thisPos)
          }
        }
      }
    }

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
          storeInCluster2(res, updateThisStep, thisPos)
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
    storeInCluster2(res, updateThisStep, thisPos)
  })

  return res
}

const findLocations = (store: RouteStore, selected: string | undefined): Array<Cluster> => {
  const res: Array<Cluster> = []
  // loop through store
  store.routes.forEach((route: Route) => {
    // start with location
    if (route.currentLocation2) {
      const updateAssetLocation: ClusterSetter = (newLoc: L.LatLng): void => {
        route.currentLocation2 = newLoc
      }
      storeInCluster(res, updateAssetLocation, route.currentPosition, route.currentLocation2)
    }

    // now planned routes
    const numSteps: number = route.planned.length
    for (let stepCtr = 0; stepCtr < numSteps; stepCtr++) {
      const step: RouteTurn = route.planned[stepCtr]
      if (step.locations && step.route) {
        const len = step.locations.length
        for (let ctr = 0; ctr < len; ctr++) {
          const thisPos: string = step.route[ctr]
          const updateThisStep: ClusterSetter = (newLoc: L.LatLng): void => {
            if (step.locations) {
              step.locations[ctr] = newLoc
            }
          }
          if (route.uniqid === selected && stepCtr === numSteps - 1 && ctr === len - 1) {
            // this is the selected track, and we're on the last step of the last turn
            // so don't declutter it
          } else {
            storeInCluster(res, updateThisStep, thisPos, step.locations[ctr])
          }
        }
      }
    }

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
          storeInCluster(res, updateThisStep, thisPos, step.locations[ctr])
        }
      }
    })
  })
  return res
}

const spreadClusters = (clusters: Array<Cluster>, tileDiameterMins: number): void => {
  clusters.forEach((cluster: Cluster) => {
    if (cluster.setters.length > 1) {
      const gridDelta = tileDiameterMins / 60 / 4
      // ok, go for it
      const len = cluster.setters.length
      // note: we start at 1, since we let the first one stay in the middle
      for (let ctr = 0; ctr < len; ctr++) {
        const thisAngleDegs = ctr * (360.0 / (len))
        const thisAngleRads = (thisAngleDegs) / 180 * Math.PI
        const centre = cluster.center
        const newLat = centre.lat + gridDelta * Math.sin(thisAngleRads)
        const newLng = centre.lng + gridDelta * Math.cos(thisAngleRads)
        const newLoc = L.latLng(newLat, newLng)
        cluster.setters[ctr](newLoc)
      }
    }
  })
}

/** don't spread the clusters, just put them in the centre */
const dummySpreadClusters2 = (clusters: Array<Cluster2>): void => {
  clusters.forEach((cluster: Cluster2) => {
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
const spreadClusters2 = (clusters: Array<Cluster2>, tileDiameterMins: number): void => {
  clusters.forEach((cluster: Cluster2) => {
    if (cluster.setters.length > 1) {
      const centreArr = h3ToGeo(cluster.hex)
      const centre = L.latLng(centreArr[0], centreArr[1])
      const gridDelta = tileDiameterMins / 60 / 4
      // ok, go for it
      const len = cluster.setters.length
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

/** declutter assets & turn markers
 * @param {RouteStore} store wargame data object
 * @param {number} tileDiameterMins hex cell diameter
 * @returns {RouteStore} decluttered route store
 */
const routeDeclutter = (store: RouteStore, tileDiameterMins: number): RouteStore => {
  // take deep copy
  const modified: RouteStore = cloneDeep(store)

  // get the id of the selected asset
  const selected: string | undefined = store.selected && store.selected.uniqid

  // find all clusters
  const clusters: Array<Cluster> = findLocations(modified, selected)

  // now spread out the clusters (note: we're already working with a clone)
  spreadClusters(clusters, tileDiameterMins)

  return modified
}

/** convenient way of passing data in/out of declutter algorithm */
export interface DeclutterData {
  routes: RouteStore
  markers: MapAnnotations
}

/** don't declutter the data, just put the markers at the centre of the cell */
export const dummyDeclutter2 = (data: DeclutterData): DeclutterData => {
  // take deep copy
  const routes: RouteStore = cloneDeep(data.routes)
  const markers: MapAnnotations = cloneDeep(data.markers)

  // get the id of the selected asset
  const selected: string | undefined = routes.selected && routes.selected.uniqid

  // find all clusters
  const clusters: Array<Cluster2> = findLocations2(routes, markers, selected)

  // now spread out the clusters (note: we're already working with a clone)
  dummySpreadClusters2(clusters)

  return { routes: routes, markers: markers }
}

/** declutter these map objects */
export const routeDeclutter2 = (data: DeclutterData, tileDiameterMins: number): DeclutterData => {
  // take deep copy
  const routes: RouteStore = cloneDeep(data.routes)
  const markers: MapAnnotations = cloneDeep(data.markers)

  // get the id of the selected asset
  const selected: string | undefined = routes.selected && routes.selected.uniqid

  // find all clusters
  const clusters: Array<Cluster2> = findLocations2(routes, markers, selected)

  // now spread out the clusters (note: we're already working with a clone)
  spreadClusters2(clusters, tileDiameterMins)

  return { routes: routes, markers: markers }
}

export default routeDeclutter
