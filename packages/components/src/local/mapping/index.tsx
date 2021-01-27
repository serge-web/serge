import L from 'leaflet'
import React, { createContext, useState, useEffect } from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import { Phase, ADJUDICATION_PHASE, UMPIRE_FORCE, PlanningStates, LaydownPhases } from '@serge/config'
import MapBar from '../map-bar'
import MapControl from '../map-control'
import { cloneDeep, isEqual } from 'lodash'

/* helper functions */
import groupMoveToRoot from './helpers/group-move-to-root'
import groupCreateNewGroup from './helpers/group-create-new-group'
import groupHostPlatform from './helpers/group-host-platform'
// TODO: verify we still handle planned routes properly
// import storePlannedRoute from './helpers/store-planned-route'
import createGrid from './helpers/create-grid'
import boundsFor from './helpers/bounds-for'
import {
  roundToNearest,
  routeCreateStore,
  routeDeclutter,
  routeAddSteps,
  routeSetCurrent,
  routeGetLatestPosition,
  routeClearFromStep,
  findPlatformTypeFor,
  findAsset,
  routeSetLaydown
} from '@serge/helpers'

/* Import Types */
import PropTypes from './types/props'
import {
  SergeHex,
  SergeGrid,
  MappingContext,
  NewTurnValues,
  PlanMobileAsset,
  SelectedAsset,
  RouteStore,
  Route,
  RouteTurn,
  PlanTurnFormValues,
  ForceData,
  Asset
} from '@serge/custom-types'

import ContextInterface from './types/context'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'

// Create a context which will be provided to any child of Map
export const MapContext = createContext<ContextInterface>({ props: null })

const defaultProps: PropTypes = {
  mapBar: true,
  bounds: {
    imageTop: 0,
    imageLeft: 0,
    imageRight: 0,
    imageBottom: 0
  },
  tileDiameterMins: 5,
  forces: [],
  platforms: [],
  playerForce: 'Blue',
  canSubmitOrders: true,
  phase: Phase.Planning,
  turnNumber: 6,
  tileLayer: {
    url: '',
    attribution: ''
  },
  minZoom: 8,
  maxZoom: 12,
  touchZoom: true,
  zoom: 10,
  zoomDelta: 0.25,
  zoomSnap: 0.25,
  attributionControl: false,
  zoomAnimation: false,
  planningConstraintsProp: undefined
}

/* Render component */
export const Mapping: React.FC<PropTypes> = ({
  mapBar,
  bounds,
  tileDiameterMins,
  forces,
  playerForce,
  canSubmitOrders,
  platforms,
  phase,
  turnNumber,
  tileLayer,
  minZoom,
  maxZoom,
  touchZoom,
  zoom,
  zoomDelta,
  zoomSnap,
  attributionControl,
  zoomAnimation,
  planningConstraintsProp,
  planningRangeProp,
  channelID,
  mapPostBack,
  children
}) => {
  /* Initialise states */
  const [forcesState, setForcesState] = useState<ForceData[]>(forces)
  const [showMapBar, setShowMapBar] = useState<boolean>(true)
  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset | undefined >(undefined)
  const [zoomLevel, setZoomLevel] = useState<number>(zoom || 0)
  const [mapBounds, setMapBounds] = useState<{
    imageTop: number
    imageLeft: number
    imageRight: number
    imageBottom: number
  } | undefined>(undefined)
  const [latLngBounds, setLatLngBounds] = useState<L.LatLngBounds | undefined>(undefined)
  const [gridCells, setGridCells] = useState<SergeGrid<SergeHex<{}>> | undefined>(undefined)
  const [newLeg, setNewLeg] = useState<NewTurnValues | undefined>(undefined)
  const [planningConstraints, setPlanningConstraints] = useState<PlanMobileAsset | undefined>(planningConstraintsProp)
  const [mapCentre, setMapCentre] = useState<L.LatLng | undefined>(undefined)
  const [planningRange, setPlanningRange] = useState<number | undefined>(planningRangeProp)
  const [routeStore, setRouteStore] = useState<RouteStore>({ routes: [] })
  const [viewAsRouteStore, setViewAsRouteStore] = useState<RouteStore>({ routes: [] })
  const [leafletElement, setLeafletElement] = useState(undefined)
  const [viewAsForce, setViewAsForce] = useState<string>(UMPIRE_FORCE)
  const [hidePlanningForm, setHidePlanningForm] = useState<boolean>(false)
  const [filterPlannedRoutes, setFilterPlannedRoutes] = useState<boolean>(true)
  const [filterHistoryRoutes, setFilterHistoryRoutes] = useState<boolean>(true)
  const [plansSubmitted, setPlansSubmitted] = useState<boolean>(false)
  const [currentPhase, setCurrentPhase] = useState<Phase>(Phase.Adjudication)

  // only update bounds if they're different to the current one
  if (bounds && bounds !== mapBounds) {
    setMapBounds(bounds)
  }

  // highlight the route for the selected asset
  useEffect(() => {
    // if we were planning a mobile route, clear that
    if (planningConstraints && selectedAsset) {
      setPlanningConstraints(undefined)
    }

    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    const id: string = selectedAsset ? selectedAsset.uniqid : ''
    const store: RouteStore = routeSetCurrent(id, routeStore)
    setRouteStore(store)

    // if we are in turn 0 adjudication phase, we have special processing, since
    // the player may be doing force laydown
    if (store.selected && turnNumber === 0 && phase === Phase.Adjudication) {
      const layPhase = store.selected.laydownPhase
      if (layPhase && canSubmitOrders) {
        if (layPhase === LaydownPhases.Moved || layPhase === LaydownPhases.Unmoved) {
          const asset: Asset = findAsset(forces, store.selected.uniqid)
          const pType = findPlatformTypeFor(platforms, asset.platformType)
          const moves: PlanMobileAsset = {
            origin: store.selected.currentPosition,
            travelMode: pType.travelMode,
            status: 'LAYDOWN'
          }
          setPlanningConstraints(moves)
        }
      }
    }
  }, [selectedAsset])

  /**
   * if the player force changes, clear the selected assets (for StoryBook debugging)
   */
  useEffect(() => {
    // clear the selected assets
    setSelectedAsset(undefined)
  }, [playerForce])

  /**
   * reflect external changes in planning range prop (mostly
   * just in Storybook testing)
   */
  useEffect(() => {
    setPlanningRange(planningRangeProp)
  }, [planningRangeProp])

  /**
   * reflect external changes in planning constraints prop (mostly
   * just in Storybook testing)
   */
  useEffect(() => {
    // test to see if constraints have actually changed
    const oldVal = JSON.stringify(planningConstraints)
    const newVal = JSON.stringify(planningConstraintsProp)
    if (oldVal !== newVal) {
      setPlanningConstraints(planningConstraintsProp)
    }
  }, [planningConstraintsProp])

  /** the forces from props has changed */
  useEffect(() => {
    // is it different to current force state?
    const forceStateEmptyOrChanged = !forcesState || !isEqual(forcesState, forces)
    if (forceStateEmptyOrChanged) {
      console.log('mapping - creating', forceStateEmptyOrChanged)
      setForcesState(forces)
    }
  }, [forces])

  /**
   * generate the set of routes visible to this player, for display
   * in the Force Overview panel
   */
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forcesState && gridCells) {
      const selectedId: string | undefined = selectedAsset && selectedAsset.uniqid
      const store: RouteStore = routeCreateStore(selectedId, turnNumber, currentPhase, forcesState, playerForce,
        platforms, gridCells, filterHistoryRoutes, filterPlannedRoutes, routeStore)
      console.log('mapping - update route store', store)
      setRouteStore(store)
    }
  }, [forcesState, playerForce, currentPhase, gridCells, filterHistoryRoutes, filterPlannedRoutes, selectedAsset])

  /**
   * generate the set of routes visible to this player, for display
   * in the Force Overview panel
   */
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forcesState && gridCells && routeStore.routes.length) {
      // if this is umpire and we have view as
      if (playerForce === 'umpire' && viewAsForce !== UMPIRE_FORCE) {
        // ok, produce customised version
        const selectedId: string | undefined = selectedAsset && selectedAsset.uniqid
        const vStore: RouteStore = routeCreateStore(selectedId, turnNumber, currentPhase, forcesState, viewAsForce, platforms,
          gridCells, filterHistoryRoutes, filterPlannedRoutes, routeStore)
        declutterRouteStore(vStore)
      } else {
        // just use normal route store
        declutterRouteStore(routeStore)
      }
    }
  }, [routeStore, viewAsForce])

  const declutterRouteStore = (store: RouteStore): void => {
    const declutteredStore = routeDeclutter(store, tileDiameterMins)
    setViewAsRouteStore(declutteredStore)
  }

  /**
   * on a new phase, we have to allow plans to be submitted. Wrap `phase` into `currentPhase` so that
   * we can confidently wipe any old planning steps from the last phase, and not risk
   * pulling them into the new routes object
   */
  useEffect(() => {
    setPlansSubmitted(false)

    // wipe the route store, to ensure any routes that were being planned get forgotten
    setRouteStore({ routes: [] })

    // now update the phase
    setCurrentPhase(phase)

    // clear the selected asset - this has the effect of removing the planning/adjducation form
    setSelectedAsset(undefined)
  }, [phase])

  useEffect(() => {
    if (mapBounds) {
      setLatLngBounds(boundsFor(mapBounds))
    }
  }, [mapBounds])

  useEffect(() => {
    if (latLngBounds) {
      setMapCentre(latLngBounds.getCenter())
    }
  }, [latLngBounds])

  useEffect(() => {
    if (latLngBounds && tileDiameterMins) {
      // note: the list of cells should be re-calculated if `tileDiameterMins` changes
      const newGrid: SergeGrid<SergeHex<{}>> = createGrid(latLngBounds, tileDiameterMins)
      setGridCells(newGrid)
    }
    //    console.clear() // TODO: remove this, it's just a shortcut to ensuring each "session" starts with clear console.ß
  }, [tileDiameterMins, latLngBounds])

  const handleForceLaydown = (turn: NewTurnValues): void => {
    if (routeStore.selected) {
      if (turn.route.length !== 1) {
        console.error('Force Laydown - failed to receive single step route')
      } else {
        const newStore: RouteStore = routeSetLaydown(routeStore, turn.route[0].name, gridCells)
        const newStore2: RouteStore = routeSetCurrent('', newStore)
        setRouteStore(newStore2)
      }
    }
  }

  useEffect(() => {
    if (newLeg) {
      if (currentPhase === ADJUDICATION_PHASE && turnNumber === 0) {
        handleForceLaydown(newLeg)
        return
      }

      const inAdjudicate: boolean = currentPhase === ADJUDICATION_PHASE
      const selRoute = routeStore.selected
      if (selRoute) {
        const turnStart = selRoute.planned && selRoute.planned.length
          ? selRoute.planned[selRoute.planned.length - 1].turn
          : turnNumber

        // increment turn number, if we have any turns planned, else start with `1`
        const coords: Array<string> = newLeg.route.map((cell: SergeHex<{}>) => {
          return cell.name
        })
        const locations: Array<L.LatLng> = newLeg.route.map((cell: SergeHex<{}>) => {
          return cell.centreLatLng
        })
        if (selRoute) {
          const newStep: RouteTurn = {
            turn: turnStart + 1,
            status: { state: newLeg.state, speedKts: newLeg.speed },
            route: coords,
            locations: locations
          }

          // if we're in adjudicate phase, we have to wipe the planned steps, since umpire
          // only plans next step
          const readyToAdd: RouteStore = inAdjudicate ? routeClearFromStep(routeStore, selRoute.uniqid, turnNumber) : routeStore
          const newStore: RouteStore = routeAddSteps(readyToAdd, selRoute.uniqid, [newStep])

          // if we know our planning constraints, we can plan the next leg, as long as we're not
          // in adjudication phase. In that phase, only one step is created
          if (planningConstraints && !inAdjudicate) {
            // get the last planned cell, to act as the first new planned cell
            const lastCell: SergeHex<{}> = newLeg.route[newLeg.route.length - 1]
            // create new planning contraints
            const newP: PlanMobileAsset = {
              origin: lastCell.name,
              travelMode: planningConstraints.travelMode,
              status: newLeg.state,
              speed: newLeg.speed
            }
            setPlanningConstraints(newP)
          } else {
            // we're in adjudicate mode, cancel the planning
            setPlanningConstraints(undefined)

            // create a new route store
            // tell the current route it's been planned
            const selected: Route | undefined = newStore.selected
            if (selected) {
              selected.adjudicationState = PlanningStates.Planned
            }
          }
          setRouteStore(newStore)
        }
      }
    }
  }, [newLeg])

  const clearFromTurn = (turn: number): void => {
    const current: Route | undefined = routeStore.selected
    if (current) {
      const newStore = routeClearFromStep(routeStore, current.uniqid, turn + 1)
      setRouteStore(newStore)
      // now move the planning marker back to the last valid location
      const newCurrent: Route | undefined = newStore.selected
      if (newCurrent) {
        // do we have current planning constraints?
        if (planningConstraints) {
          // trigger route planning
          const origin: string = routeGetLatestPosition(newCurrent.currentPosition, newCurrent.planned)

          // take deep copy
          const newConstraints: PlanMobileAsset = cloneDeep(planningConstraints)

          // modify the origin
          newConstraints.origin = origin

          // trigger UI updatea
          setPlanningConstraints(newConstraints)
        }
      }
    }
  }

  const cancelRoutePlanning = (): void => {
    setPlanningConstraints(undefined)
  }

  const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
    const current: Route | undefined = routeStore.selected
    if (current) {
      // is it a mobile turn
      const status = plannedTurn.statusVal
      if (status.mobile) {
        // trigger route planning
        const inAdjudicate: boolean = currentPhase === ADJUDICATION_PHASE
        const origin: string = inAdjudicate ? current.currentPosition : routeGetLatestPosition(current.currentPosition, current.planned)

        // sort out platform type for this asset
        const pType = findPlatformTypeFor(platforms, current.platformType)

        // package up planning constraints, sensitive to if there is a speed or not
        const constraints: PlanMobileAsset = plannedTurn.speedVal ? {
          origin: origin,
          travelMode: pType.travelMode,
          status: plannedTurn.statusVal.name,
          speed: plannedTurn.speedVal
        } : {
          origin: origin,
          travelMode: pType.travelMode,
          status: plannedTurn.statusVal.name
        }

        // special handling, a mobile status may not have a speedVal,
        // which represents unlimited travel
        if (plannedTurn.speedVal) {
          const speedKts = plannedTurn.speedVal
          // TODO: turn time should come from game definition
          const stepSize = 30
          const stepsPerHour = (60 / stepSize)
          const roughRange = speedKts / tileDiameterMins / stepsPerHour // work out how many NM in 30 minutes

          // check range is in 10s
          const range = roundToNearest(roughRange, 1)

          setPlanningRange(range)
          setPlanningConstraints(constraints)
        } else {
          setPlanningRange(undefined)
          setPlanningConstraints(constraints)
        }
      } else {
        // if we were planning a mobile route, clear that
        setPlanningConstraints(undefined)

        // ok, store the new leg
        // how many turns?
        let turnStart: number = turnNumber
        if (current.planned && current.planned.length > 0) {
          turnStart = current.planned[current.planned.length - 1].turn
        }
        let store: RouteStore = routeStore
        const steps: Array<RouteTurn> = []
        for (let ctr = 0; ctr < plannedTurn.turnsVal; ctr++) {
          const step: RouteTurn = { turn: ++turnStart, status: { state: status.name } }
          steps.push(step)
        }
        // store this step
        if (selectedAsset) {
          store = routeAddSteps(store, selectedAsset.uniqid, steps)
        }
        setRouteStore(store)
      }
    }
  }

  const viewAsCallback = (force: string): void => {
    setViewAsForce(force)
  }

  const groupMoveToRootLocal = (uniqid: string): void => {
    const newForces = groupMoveToRoot(uniqid, forcesState)
    setForcesState(newForces)
  }

  const groupCreateNewGroupLocal = (dragged: string, target: string): void => {
    const newForces = groupCreateNewGroup(dragged, target, forcesState)
    setForcesState(newForces)
  }

  const groupHostPlatformLocal = (dragged: string, target: string): void => {
    const newForces = groupHostPlatform(dragged, target, forcesState)
    setForcesState(newForces)
  }

  const setSelectedAssetLocal = (asset: SelectedAsset | undefined): void => {
    // do we have a previous asset, does it have planned routes?

    // NO, don't store the object in the forces object. Keep them in the route store
    // TODO: verify we're still handling planned routes
    // if (selectedAsset && routeStore && routeStore.selected &&
    //     routeStore.selected.planned && routeStore.selected.planned.length > 0) {
    //   const route: RouteTurn[] = routeStore.selected.planned

    //   // create an updated forces object, with the new planned routes
    //   const newForces = storePlannedRoute(selectedAsset.uniqid, route, forcesState)
    //   setForcesState(newForces)
    // }
    setSelectedAsset(asset)
  }

  // Anything you put in here will be available to any child component of Map via a context consumer
  const contextProps: MappingContext = {
    gridCells,
    forces: forcesState,
    platforms,
    playerForce,
    canSubmitOrders,
    phase,
    turnNumber,
    planningConstraints,
    planningRange,
    showMapBar,
    selectedAsset,
    zoomLevel,
    channelID,
    routeStore,
    setRouteStore,
    viewAsRouteStore,
    setNewLeg,
    setShowMapBar,
    setSelectedAsset: setSelectedAssetLocal,
    setZoomLevel,
    turnPlanned,
    clearFromTurn,
    cancelRoutePlanning,
    mapPostBack: mapPostBack,
    hidePlanningForm,
    setHidePlanningForm,
    groupMoveToRoot: groupMoveToRootLocal,
    groupCreateNewGroup: groupCreateNewGroupLocal,
    groupHostPlatform: groupHostPlatformLocal,
    plansSubmitted,
    setPlansSubmitted
  }

  // any events for leafletjs you can get from leafletElement
  // https://leafletjs.com/reference-1.6.0.html#map-event
  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      // save map element
      setLeafletElement(ref.leafletElement)
      ref.leafletElement.on('zoomend', () => {
        setZoomLevel(ref.leafletElement.getZoom())
      })
    }
  }

  /**
   * this callback is called when the user clicks on a blank part of the map.
   * When that happens, clear the selection
   */
  const mapClick = (): void => {
    setSelectedAssetLocal(undefined)
  }

  return (
    <MapContext.Provider value={{ props: contextProps }}>
      <section className={styles['map-container']}>
        {mapBar && <MapBar />}
        <Map
          className={styles.map}
          center={mapCentre}
          bounds={latLngBounds}
          maxBounds={latLngBounds}
          zoom={zoom}
          zoomDelta={zoomDelta}
          zoomSnap={zoomSnap}
          minZoom={minZoom}
          zoomControl={false}
          maxZoom={maxZoom}
          onClick={mapClick}
          ref={handleEvents}
          touchZoom={touchZoom}
          zoomAnimation={zoomAnimation}
          attributionControl={attributionControl}
        >
          <MapControl
            map = {leafletElement}
            home = {mapCentre}
            forces = {playerForce === UMPIRE_FORCE ? forcesState : undefined}
            viewAsCallback = {viewAsCallback}
            viewAsForce = {viewAsForce}
            filterPlannedRoutes = {filterPlannedRoutes}
            setFilterPlannedRoutes = {setFilterPlannedRoutes}
            filterHistoryRoutes = {filterHistoryRoutes}
            setFilterHistoryRoutes = {setFilterHistoryRoutes}
          />
          <TileLayer
            url={tileLayer.url}
            attribution={tileLayer.attribution}
            bounds={latLngBounds}
          />
          <ScaleControl position='bottomright' />
          {children}
        </Map>
      </section>
    </MapContext.Provider>
  )
}

Mapping.defaultProps = defaultProps

export default Mapping
