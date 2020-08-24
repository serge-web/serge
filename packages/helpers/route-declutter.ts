import L from 'leaflet'
import { RouteStore, Route, RouteStep } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

interface ClusterItem {
  name: string,
  setter: {(newLoc: L.LatLng): void}
}


interface Cluster {
  position: string,
  location: L.LatLng,
  items: Array<ClusterItem>
}

const storeInCluster = (store: Array<Cluster>, setter: {(newLoc: L.LatLng): void}, position: string, location: L.LatLng, name: string ): void => {
  let cluster: Cluster | undefined = store.find(cluster => cluster.position === position)
  if(cluster === undefined) {
    cluster = {
      position: position,
      location: location,
      items: []
    }
    store.push(cluster)
  }
  const item: ClusterItem = {
    name: name,
    setter: setter
  }
  cluster.items.push(item)
}

const findLocations = (store: RouteStore): Array<Cluster> => {
 //  const res: { [position: string]: Array<RouteLocation> } = {};
 // const res: Record<string, string >  = {}
 const res: Array<Cluster> = []

  // loop through store
  store.routes.forEach((route: Route) => {
    // start with location
    if(route.currentLocation) {
      const updateAssetLocation = (newLoc: L.LatLng): void => {
        route.currentLocation = newLoc
      }
      storeInCluster(res, updateAssetLocation, route.currentPosition, route.currentLocation, route.name)
    }

    // now planned routes
    route.planned.forEach((step: RouteStep) => {
      if(step.locations) {
        let ctr = 0;
        // todo - we only declutter the first & last point in a route
        // also, remember where the last point on the previous leg got
        // decluttered to, so we use it at the start of the next leg
        step.locations.forEach((loc: L.LatLng) => {
          if(step.coords) {
            const thisPos: string = step.coords[ctr]
            const updateThisStep = (newLoc: L.LatLng): void => {
              if(step.locations) {
                console.log('update step, was:', step.locations[ctr], newLoc)
                step.locations[ctr] = newLoc
              }
            }
            storeInCluster(res, updateThisStep, thisPos, loc, 'step-' + thisPos)
          }
        })
      }
    })
  }) 
  return res
}

const spreadClusters = (clusters: Array<Cluster>, tileDiameterMins: number): void => {
  clusters.forEach((cluster: Cluster) => {
    if(cluster.items && cluster.items.length > 1) {
      const gridDelta = tileDiameterMins / 60 / 4
      // ok, go for it
      const len = cluster.items.length
      console.log('decluttering ', cluster.position, cluster.items)
      // note: we start at 1, since we let the first one stay in the middle
      for (let ctr = 0; ctr < len; ctr++) {
        const thisAngleDegs = ctr * (360.0 / (len))
        const thisAngleRads = (90 + thisAngleDegs) / 180 * Math.PI
        const centre = cluster.location
        const newLat = centre.lat + gridDelta * Math.sin(thisAngleRads)
        const newLng = centre.lng + gridDelta * Math.cos(thisAngleRads)
        const newLoc = L.latLng(newLat, newLng)
        const item: ClusterItem = cluster.items[ctr]
        console.log('moving', item.name, cluster.position, cluster.location, newLoc)
        item.setter(newLoc)
      }
      console.log('decluttered ', cluster.position, cluster.items)
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

  // find all clusters
  const clusters: Array<Cluster> = findLocations(modified)

  // now spread out the clusters (note: we're already working with a clone)
  spreadClusters(clusters, tileDiameterMins)

  return modified
}

export default routeDeclutter
