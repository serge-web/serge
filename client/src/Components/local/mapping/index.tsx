import HistoryIcon from '@material-ui/icons/History'
import InfoIcon from '@material-ui/icons/Info'
import PlannedIcon from '@material-ui/icons/Update'
import { ADJUDICATION_PHASE, CellLabelStyle, CHANNEL_MAPPING, CLONE_MARKER, CREATE_TASK_GROUP, DELETE_MARKER, FLAG_MARKER, HOST_PLATFORM, LaydownPhases, LEAVE_TASK_GROUP, Phase, PlanningStates, serverPath, UMPIRE_FORCE, UPDATE_MARKER } from 'src/config'
import cx from 'classnames'
import * as h3 from 'h3-js'
import L from 'leaflet'
import { cloneDeep, isEqual } from 'lodash'
import React, { createContext, useEffect, useState } from 'react'
import { Map, ScaleControl, TileLayer } from 'react-leaflet'
import { fetch as whatFetch } from 'whatwg-fetch'
import MapBar from '../map-bar'
import MapControl from '../map-control'

/* helper functions */
import { createGridH3 } from './helpers/h3-helpers'

import {
  DeclutterData,
  deepCopy, enumFromString, findPlatformTypeFor, roundToNearest, routeAddSteps, routeClearFromStep, routeCreateStore, routeDeclutter2, routeGetLatestPosition, routeSetCurrent, routeSetLaydown, turnTimeAsMillis
} from 'src/Helpers'

/* Import Types */
import {
  Asset, ForceData, MapAnnotation,
  MapAnnotations, MappingConstraints, MappingContext, MessageCloneMarker, MessageCreateTaskGroup, MessageDeleteMarker, MessageHostPlatform, MessageLeaveTaskGroup, MessageMap, MessageUpdateMarker, NewTurnValues,
  PlanMobileAsset, PlanTurnFormValues, Route, RouteStore, RouteTurn, SelectedAsset, SergeGrid3, SergeHex3, Status, TurningDetails
} from 'src/custom-types'
import PropTypes from './types/props'

import ContextInterface from './types/context'

/* Import Stylesheet */
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import uniqid from 'uniqid'
import lastStepOrientationFor from '../assets/helpers/last-step-orientation-for'
import Item from '../map-control/helpers/item'
import ViewAs from '../organisms/view-as'
import CellLabelStyleSelector from './helpers/CellLabelStyleSelector'
import generateTestData from './helpers/gen-test-mapping-data'
import './leaflet.css'
import styles from './styles.module.scss'

// Create a context which will be provided to any child of Map
export const MapContext = createContext<ContextInterface>({ props: undefined })

/* Render component */
export const Mapping: React.FC<PropTypes> = ({
  mappingConstraints,
  mapBar,
  forces,
  playerForce,
  isGameControl,
  isUmpire,
  playerRole,
  platforms,
  infoMarkers,
  markerIcons,
  phase,
  turnNumber,
  wargameInitiated,
  initialViewport,
  gameTurnTime,
  touchZoom,
  zoom,
  zoomDelta,
  zoomSnap,
  attributionControl,
  zoomAnimation,
  planningConstraintsProp,
  channelID,
  channel,
  mapPostBack = (messageType: string, payload: MessageMap, channelID?: string | number | undefined): void => { console.log('mapPostBack', messageType, channelID, payload) },
  declutter,
  children,
  fetchOverride
}) => {
  /* Initialise states */
  const [forcesState, setForcesState] = useState<ForceData[]>(forces)
  const [infoMarkersState, setInfoMarkersState] = useState<MapAnnotations>(infoMarkers)
  const [visibleInfoMarkers, setVisibleInfoMarkers] = useState<MapAnnotations>([])
  const [showMapBar, setShowMapBar] = useState<boolean>(mapBar !== undefined ? mapBar : true)
  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset | undefined>(undefined)
  const [selectedMarker, setSelectedMarker] = useState<string | undefined>(undefined)
  const [zoomLevel, setZoomLevel] = useState<number>(zoom || 0)
  const [h3Resolution, setH3Resolution] = useState<number>(3)
  const [viewport, setViewport] = useState<L.LatLngBounds | undefined>(initialViewport)
  const [mapBounds, setMapBounds] = useState<L.LatLngBounds | undefined>(undefined)
  const [mapResized, setMapResized] = useState<boolean>(false)
  const [h3gridCells, setH3gridCells] = useState<SergeGrid3>([])
  const [newLeg, setNewLeg] = useState<NewTurnValues | undefined>(undefined)
  const [planningConstraints, setPlanningConstraints] = useState<PlanMobileAsset | undefined>(planningConstraintsProp)
  const [mapCentre] = useState<L.LatLng | undefined>(undefined)
  const [routeStore, setRouteStore] = useState<RouteStore>({ routes: [] })
  const [viewAsRouteStore, setViewAsRouteStore] = useState<RouteStore>({ routes: [] })
  const [leafletElement, setLeafletElement] = useState<L.Map | undefined>(undefined)
  const [viewAsForce, setViewAsForce] = useState<string>(UMPIRE_FORCE)
  const [hidePlanningForm, setHidePlanningForm] = useState<boolean>(false)
  const [filterPlannedRoutes, setFilterPlannedRoutes] = useState<boolean>(true)
  const [filterHistoryRoutes, setFilterHistoryRoutes] = useState<boolean>(true)
  const [plansSubmitted, setPlansSubmitted] = useState<boolean>(false)
  const [showAddInfo, setShowAddInfo] = useState<boolean>(false)
  const [currentPhase, setCurrentPhase] = useState<Phase>(Phase.Adjudication)
  const [atlanticCells, setAtlanticCells] = useState<FeatureCollection>()
  const [lastAtlanticCells, setLastAtlanticCells] = useState<FeatureCollection>()
  const [polygonAreas, setPolygonAreas] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(undefined)
  const [cellLabelStyle, setCellLabelStyle] = useState<CellLabelStyle>(CellLabelStyle.H3_LABELS)
  const [mappingConstraintState, setMappingConstraintState] = useState<MappingConstraints>(mappingConstraints)
  const [viewAsUmpire, setViewAsUmpire] = useState<boolean>(isUmpire)

  if (!channel) {
    // we don't have mapping channel for some unit tests, so don't throw warning when that happens
    const jestWorkerId = process.env.JEST_WORKER_ID
    const inProduction = !jestWorkerId
    inProduction && console.warn('Channel is missing from mapping component')
  }

  // only update bounds if they're different to the current one
  useEffect(() => {
    if (mappingConstraintState) {
      const conBounds = mappingConstraintState.bounds
      const ne = conBounds[0]
      const sw = conBounds[1]
      const newBounds = L.latLngBounds(ne, sw)
      const atlanticMissing = atlanticCells && !lastAtlanticCells
      const altanticChanged = atlanticCells && lastAtlanticCells && lastAtlanticCells.features.length !== atlanticCells.features.length
      const atlanticUpdate = atlanticMissing || altanticChanged
      const boundsChanged = mapBounds === undefined || !mapBounds.equals(newBounds)
      if (boundsChanged || atlanticUpdate) {
        setLastAtlanticCells(atlanticCells)
        // bounds has changed, or atlantic cells are present
        setMapBounds(newBounds)
        const resolution = mappingConstraintState.h3res || 3
        const cells = createGridH3(newBounds, resolution, atlanticCells)
        // check if we need to update, to reduce re-renders
        if ((cells.length !== h3gridCells.length || atlanticUpdate)) {
          setH3Resolution(resolution)
          setH3gridCells(cells)
        }
      }
    }
  }, [mappingConstraintState, atlanticCells])

  // only update bounds if they're different to the current one
  useEffect(() => {
    if (mappingConstraints) {
      if (mappingConstraints !== mappingConstraintState) {
        setMappingConstraintState(mappingConstraints)
      }
    }
  }, [mappingConstraints])

  // control whether to allow provide the "Add info marker" button
  useEffect(() => {
    setShowAddInfo((playerForce === UMPIRE_FORCE) && isGameControl)
  }, [playerForce, isGameControl])

  // if marker is selected, clear the asset
  useEffect(() => {
    // if a marker has been selected, then clear the selected asset
    if (selectedMarker) {
      setSelectedAsset(undefined)
    }
  }, [selectedMarker])

  // handle an updated set of info markers
  useEffect(() => {
    // check new state is different
    if (!isEqual(infoMarkersState, infoMarkers)) {
      setInfoMarkersState(infoMarkers)
    }
  }, [infoMarkers])

  // // convenience function, to help understand store contents
  // const doListing = (msg: string, store: RouteStore): void => {
  //   const laydown = store.routes.filter((route: Route) => route.name === 'NORT' || route.name === 'MERCH 1' || route.name === 'MERCH 2')
  //   const data = laydown.map((route: Route) => {
  //     return {
  //       name: route.name,
  //       phase: route.laydownPhase,
  //       origin: route.originalPosition,
  //       current: route.currentPosition,
  //       lat: route.currentLocation2 && route.currentLocation2.lat,
  //       lng: route.currentLocation2 && route.currentLocation2.lng
  //     }
  //   })
  //   console.log('---------------', msg, '-----------')
  //   console.table(data)
  // }

  // highlight the route for the selected asset
  useEffect(() => {
    // if an asset has been selected, then clear the selected marker
    if (selectedAsset) {
      setSelectedMarker(undefined)
    }

    // if we were planning a mobile route, clear that
    if (planningConstraints && selectedAsset) {
      setPlanningConstraints(undefined)
    }

    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    const id: string = selectedAsset ? selectedAsset.uniqid : ''
    const store: RouteStore = routeSetCurrent(id, routeStore)
    setRouteStore(store)
  }, [selectedAsset])

  /**
   * if the player force changes, clear the selected assets (for StoryBook debugging)
   */
  useEffect(() => {
    // clear the selected assets
    clearMapSelection()
  }, [playerForce])

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
      setForcesState(forces)
    }
  }, [forces])

  /** convenience function to filter info markers to those
   * visible for the player force (or view-as-force)
   */
  const filterMarkers = (markers: MapAnnotations, playerForce: string, viewAsForce: string): MapAnnotations => {
    const force = playerForce === UMPIRE_FORCE ? viewAsForce : playerForce
    if (viewAsForce === UMPIRE_FORCE) {
      return markers
    } else {
      return markers ? markers.filter((marker: MapAnnotation) => marker.visibleTo.includes(force)) : []
    }
  }

  /** control which markers are visible */
  useEffect(() => {
    const markers = filterMarkers(infoMarkersState, playerForce, viewAsForce)
    setVisibleInfoMarkers(markers)
  }, [infoMarkersState, viewAsForce, playerForce])

  /**
   * generate the set of routes visible to this player, for display
   * in the Force Overview panel
   */
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forcesState && h3gridCells && h3gridCells.length > 0) {
      const selectedId: string | undefined = selectedAsset && selectedAsset.uniqid
      const forceToUse = (playerForce === UMPIRE_FORCE && viewAsForce) ? viewAsForce : playerForce
      const store: RouteStore = routeCreateStore(selectedId, currentPhase, forcesState, forceToUse, playerRole || 'debug-missing', (playerForce === UMPIRE_FORCE) && isGameControl,
        platforms, filterHistoryRoutes, filterPlannedRoutes, wargameInitiated, routeStore, channel, turnNumber)
      setRouteStore(store)
    }
  }, [forcesState, playerForce, currentPhase, h3gridCells, filterHistoryRoutes, filterPlannedRoutes, viewAsForce, selectedAsset])

  /**
   * the route-store has changed for some reason. So, declutter it
   */
  useEffect(() => {
    if (routeStore.routes.length) {
      const clutterFunc = declutter || routeDeclutter2

      const data: DeclutterData = { routes: routeStore, markers: infoMarkersState }

      // sort out the cell diameter
      const cellRes = mappingConstraintState.h3res || 5
      const edgeLengthM = h3.edgeLength(cellRes, 'm')
      const diamMins = edgeLengthM / 1852.0 * 2
      const declutteredData: DeclutterData = clutterFunc(data, diamMins)

      setViewAsRouteStore(declutteredData.routes)
      setInfoMarkersState(declutteredData.markers)
    }
  }, [routeStore])

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
    clearMapSelection()
  }, [phase])

  useEffect(() => {
    if (mappingConstraintState && mappingConstraintState.gridCellsURL) {
      const fetchMethod = fetchOverride || whatFetch
      const url = serverPath + mappingConstraintState.gridCellsURL
      fetchMethod(url)
        .then((response: any) => response.json())
        .then((res: any) => {
          setAtlanticCells(res)
        }).catch((err: any) => {
          console.error(err)
        })
    }
  }, [mappingConstraintState])

  useEffect(() => {
    if (mappingConstraintState && mappingConstraintState.cellLabelsStyle) {
      const value = mappingConstraintState.cellLabelsStyle
      const style = enumFromString(CellLabelStyle, value)
      style && setCellLabelStyle(style)
    }
  }, [mappingConstraintState])

  useEffect(() => {
    if (mappingConstraintState && mappingConstraintState.polygonAreasURL && !polygonAreas) {
      const fetchMethod = fetchOverride || whatFetch
      const url = serverPath + mappingConstraintState.polygonAreasURL
      fetchMethod(url)
        .then((response: any) => response.json())
        .then((res: any) => {
          setPolygonAreas(res)
        }).catch((err: any) => {
          console.error(err)
        })
    }
  }, [mappingConstraintState])

  const handleForceLaydown = (turn: NewTurnValues): void => {
    if (routeStore.selected) {
      if (turn.route.length !== 1) {
        console.error('Force Laydown - failed to receive single step route')
      } else {
        const newStore: RouteStore = routeSetLaydown(routeStore, turn.route[0].index, h3gridCells)
        const newStore2: RouteStore = routeSetCurrent('', newStore)
        setRouteStore(newStore2)
        setSelectedAsset(undefined)
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

        const coords: Array<string> = newLeg.route.map((cell: SergeHex3) => {
          return cell.index
        })
        const locations: Array<L.LatLng> = newLeg.route.map((cell: SergeHex3) => {
          return cell.centreLatLng
        })
        // increment turn number, if we have any turns planned, else start with `1`
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
        if (planningConstraints && !inAdjudicate && newLeg.speed) {
          // get the last planned cell, to act as the first new planned cell
          const lastCell: SergeHex3 = newLeg.route[newLeg.route.length - 1]

          // calculate distance
          const distancePerTurnM = calcDistancePerTurnM(newLeg.speed)

          // calculate turning circle data
          let turningCircleData: TurningDetails | undefined
          if (planningConstraints.turningCircle) {
            const legAsRoute = newLeg.route.map((cell: SergeHex3): string => {
              return cell.index
            })
            if (legAsRoute.length < 2) {
              // push in the end of hte previous step
              const lastPos = routeGetLatestPosition(lastCell.index, selRoute.planned)
              legAsRoute.unshift(lastPos)
            }
            const route: RouteTurn = {
              route: legAsRoute,
              turn: turnNumber,
              status: {
                state: newLeg.state
              }
            }
            const heading = lastStepOrientationFor(lastCell.index, lastCell.index, [], [route])
            const existingCircle = planningConstraints.turningCircle
            turningCircleData = existingCircle
            if (heading !== undefined) {
              const newCircle: TurningDetails = { ...existingCircle, heading, distance: distancePerTurnM }
              turningCircleData = newCircle
            }
          }

          // create new planning contraints
          const newP: PlanMobileAsset = {
            origin: lastCell.index,
            travelMode: planningConstraints.travelMode,
            status: newLeg.state,
            speed: newLeg.speed,
            rangeCells: planningConstraints.rangeCells,
            turningCircle: turningCircleData
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
  }, [newLeg])

  const clearFromTurn = (turn: number): void => {
    const current: Route | undefined = routeStore.selected
    if (current) {
      const newStore = routeClearFromStep(routeStore, current.uniqid, turn)
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

  /** handler for asset being moved during laydown phase */
  const assetLaydown = (cell: string, _uniqid: Asset['uniqid']): void => {
    // mark the route as moved
    const theRoute = routeStore.selected
    if (theRoute) {
      theRoute.laydownPhase = LaydownPhases.Moved
      theRoute.currentPosition = cell
    }

    // we're going to re-create the routes. That code relies on position
    // being `pending` to determine if the asset has been moved.
    // so - check for assets that are un-moved, and clear their position
    // const withPos = routeStore.routes.filter((route: Route) => route.currentPosition)
    // withPos.forEach((route: Route) => {
    //   if (route.laydownPhase === LaydownPhases.Unmoved) {
    //     route.currentPosition = 'pending'
    //     route.currentLocation2 = undefined
    //   }
    // })

    // clear the selected flag
    setSelectedAsset(undefined)

    // and force update of routes. Note: I need to create `deepCopy` in order
    // for react to observe new state
    setForcesState(deepCopy(forcesState))
  }

  const calcDistanceBetweenCentresM = (): number => {
    if (!mappingConstraintState) {
      throw new Error('Cannot calculate distance without mapping constraints')
    }
    const tileRadiusM = h3.edgeLength(mappingConstraintState.h3res || 5, 'm')
    const tileDiameterM = tileRadiusM * 2
    return tileDiameterM * 0.75
  }

  const calcDistancePerTurnM = (speed: number): number => {
    const speedKts = speed
    const turnMillis = turnTimeAsMillis(gameTurnTime)
    const stepSizeHrs = turnMillis / 1000 / 60 / 60
    const distancePerTurnNM = stepSizeHrs * speedKts
    return distancePerTurnNM * 1852
  }

  const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
    const current: Route | undefined = routeStore.selected
    // only handle this if we know the current track, and we know what type it is.
    // we _Should_ know the platform type id, since it's our platform
    if (current && current.platformTypeId) {
      // is it a mobile turn
      const status: Status = plannedTurn.statusVal
      if (status.mobile) {
        // trigger route planning
        const inAdjudicate: boolean = currentPhase === ADJUDICATION_PHASE
        const origin: string = inAdjudicate ? current.currentPosition : routeGetLatestPosition(current.currentPosition, current.planned)

        // sort out platform type for this asset
        const pType = findPlatformTypeFor(platforms, '', current.platformTypeId)

        // special handling, a mobile status may not have a speedVal,
        // which represents unlimited travel
        if (plannedTurn.speedVal) {
          // special case. check turn time is non-zero
          if (!gameTurnTime) {
            console.error('Cannot plan route with zero game turn time')
            window.alert('Cannot plan route with zero game turn time')
          }

          const distanceBetweenTileCentresM = calcDistanceBetweenCentresM()
          const distancePerTurnM = calcDistancePerTurnM(plannedTurn.speedVal)
          const roughRangeCells = distancePerTurnM / distanceBetweenTileCentresM

          // check range is in 10s
          const range = roundToNearest(roughRangeCells, 1)

          // produce a heading value
          const heading = lastStepOrientationFor(origin, current.currentPosition, current.history, current.planned)
          const turnData: TurningDetails | undefined = pType.turningCircle ? {
            radius: pType.turningCircle,
            heading: heading,
            distance: distancePerTurnM
          } : undefined
          const mobileConstraints: PlanMobileAsset = {
            origin: origin,
            travelMode: pType.travelMode,
            status: status.name,
            speed: plannedTurn.speedVal,
            turningCircle: turnData,
            rangeCells: range
          }
          setPlanningConstraints(mobileConstraints)
        } else {
          const noSpeedConstraints = {
            origin: origin,
            travelMode: pType.travelMode,
            status: status.name
          }
          setPlanningConstraints(noSpeedConstraints)
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

  const updateMarker = (event: string, marker: MapAnnotation): void => {
    // we cache the lat-long inside the marker, but it sometimes persists,
    // and causes trouble. Just delete the bugger
    delete marker.position

    // NOTE: special handling. updateMarker may have been called from the annotation
    // form. If that's the case, the marker location may have separately been edited by
    // dragging on the map.  So, first check if there is a flag on the location
    if (marker.location.substring(0, 1) === FLAG_MARKER) {
      const old = infoMarkersState.find((item: MapAnnotation) => item.uniqid === marker.uniqid)
      if (old) {
        // use the existing location
        marker.location = old.location
      } else {
        // trim the new one, and use that
        marker.location = marker.location.substring(1)
      }
    }

    // utility function to clean the lat/lng from the marker
    type CleanAnno = Omit<MapAnnotation, 'position'>
    const cleanMarker = (ann: MapAnnotation): CleanAnno => {
      const res = deepCopy(ann)
      delete res.position
      return res
    }

    // do the external update, depending on which phase this is
    // check which phase we're in
    switch (phase) {
      case Phase.Adjudication: {
        // start off by updating the local data. We don't transmit the change,
        // since it will get caught up with sending new state of world
        switch (event) {
          case UPDATE_MARKER: {
            const others = infoMarkersState.filter((item: MapAnnotation) => item.uniqid !== marker.uniqid)
            others.push(marker)
            setInfoMarkersState(others)
            break
          }
          case CLONE_MARKER: {
            const clone: MapAnnotation = { ...marker, uniqid: uniqid('a') }
            infoMarkersState.push(clone)
            setInfoMarkersState(infoMarkersState)
            break
          }
          case DELETE_MARKER: {
            const others = infoMarkersState.filter((item: MapAnnotation) => item.uniqid !== marker.uniqid)
            setInfoMarkersState(others)
            break
          }
        }
        break
      }
      case Phase.Planning: {
        switch (event) {
          case UPDATE_MARKER: {
            // send the update out immediately
            const message: MessageUpdateMarker = {
              messageType: event,
              marker: cleanMarker(marker)
            }
            mapPostBack(event, message, CHANNEL_MAPPING)
            break
          }
          case DELETE_MARKER: {
            // send the update out immediately
            const message: MessageDeleteMarker = {
              messageType: DELETE_MARKER,
              marker: marker.uniqid
            }
            mapPostBack(event, message, CHANNEL_MAPPING)
            break
          }
          case CLONE_MARKER: {
            // send the update out immediately
            const message: MessageCloneMarker = {
              messageType: CLONE_MARKER,
              marker: marker
            }
            mapPostBack(event, message, CHANNEL_MAPPING)
            break
          }
        }
      }
    }
  }

  const localAddInfoMarker = (): void => {
    const runTest = false
    if (runTest) {
      generateTestData(mappingConstraintState, forces, platforms, setForcesState)
    } else {
      // get the centre of the map
      if (leafletElement) {
        const center: L.LatLng = leafletElement.getBounds().getCenter()
        const cell = h3.geoToH3(center.lat, center.lng, h3Resolution)
        // create new marker
        const marker: MapAnnotation = {
          uniqid: uniqid('a'),
          color: '#f00',
          iconId: 'unk',
          label: 'pending label',
          description: 'pending description',
          visibleTo: [],
          location: cell
        }

        // just add new marker to current set of annotations
        infoMarkersState.push(marker)
        setInfoMarkersState(infoMarkersState)

        // finally, select the new marker
        setSelectedMarker(marker.uniqid)

        // now the marker is selected, its form
        // should be displayed.
        // the new marker will get "stored"
        // when the user clicks on "Save"
      }
    }
  }

  const viewAsCallback = (force: ForceData['uniqid']): void => {
    setViewAsForce(force)
    // see if this is player viewing as an umpire force
    const theForce = forcesState.find((forceD: ForceData) => forceD.uniqid === force)
    setViewAsUmpire(!!(theForce && theForce.umpire))
  }

  const groupMoveToRootLocal = (uniqid: string): void => {
    if (mapPostBack !== undefined) {
      const payload: MessageLeaveTaskGroup = {
        messageType: LEAVE_TASK_GROUP,
        dragged: uniqid
      }
      mapPostBack(LEAVE_TASK_GROUP, payload, channelID)
    }
  }

  const groupCreateNewGroupLocal = (dragged: string, target: string): void => {
    if (mapPostBack !== undefined) {
      const payload: MessageCreateTaskGroup = {
        messageType: CREATE_TASK_GROUP,
        dragged: dragged,
        target: target
      }
      mapPostBack(CREATE_TASK_GROUP, payload, channelID)
    }
  }

  const groupHostPlatformLocal = (dragged: string, target: string): void => {
    if (mapPostBack !== undefined) {
      const payload: MessageHostPlatform = {
        messageType: HOST_PLATFORM,
        dragged: dragged,
        target: target
      }
      mapPostBack(HOST_PLATFORM, payload, channelID)
    }
  }

  /** clear the selected icons */
  const clearMapSelection = (): void => {
    setSelectedAsset(undefined)
    setSelectedMarker(undefined)
  }

  /** pan to the centre of the specified cell */
  const panTo = (cellRef: string): void => {
    if (h3gridCells) {
      const hex = h3gridCells.find((cell: SergeHex3) => cell.index === cellRef)
      if (hex) {
        leafletElement && leafletElement.panTo(hex.centreLatLng, { duration: 1, easeLinearity: 0.6 })
      }
    }
  }

  // Anything you put in here will be available to any child component of Map via a context consumer
  const contextProps: MappingContext = {
    h3gridCells,
    h3Resolution,
    forces: forcesState,
    infoMarkers: visibleInfoMarkers,
    markerIcons: markerIcons,
    platforms,
    playerForce,
    isGameControl,
    viewAsUmpire,
    phase,
    turnNumber,
    planningConstraints,
    showMapBar,
    selectedAsset,
    selectedMarker,
    setSelectedMarker,
    setSelectedAsset,
    updateMarker,
    assetLaydown,
    clearMapSelection,
    viewport,
    zoomLevel,
    channelID,
    routeStore,
    setRouteStore,
    viewAsRouteStore,
    setNewLeg,
    setShowMapBar,
    setZoomLevel,
    turnPlanned,
    clearFromTurn,
    cancelRoutePlanning,
    mapPostBack,
    hidePlanningForm,
    setHidePlanningForm,
    groupMoveToRoot: groupMoveToRootLocal,
    groupCreateNewGroup: groupCreateNewGroupLocal,
    groupHostPlatform: groupHostPlatformLocal,
    plansSubmitted,
    setPlansSubmitted,
    polygonAreas,
    panTo,
    cellLabelStyle,
    map: leafletElement,
    mapBounds: mapBounds
  }

  // any events for leafletjs you can get from leafletElement
  // https://leafletjs.com/reference-1.6.0.html#map-event
  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      // save map element
      const map: L.Map = ref.leafletElement
      if (leafletElement === undefined) {
        setLeafletElement(map)
        map.on('zoomend', () => {
          setZoomLevel(map.getZoom())
        })
        map.on('moveend', () => {
          setViewport(map.getBounds())
        })
        // this handler is to overcome the issue where the
        // mapping component doesn't load tiles if it isn't
        // visible on application start. This code triggers
        // a resize, which loads the correct tiles as soon
        // as the mouse moves of the map once it is visible
        map.on('mousemove', () => {
          // do we need to invalidate map?
          if (!mapResized) {
            setMapResized(true)
            map.invalidateSize()
          }
        })
      }
    }
  }

  /* utilty method for whether we're filtering planned routes  */
  const isFilterAsPlannedRoutes = (): 'light' | 'dark' => {
    return filterPlannedRoutes ? 'dark' : 'light'
  }

  /* utilty method for whether we're filtering planned routes  */
  const isFilterAsHistoryRoutes = (): 'light' | 'dark' => {
    return filterHistoryRoutes ? 'dark' : 'light'
  }

  /**
   * this callback is called when the user clicks on a blank part of the map.
   * When that happens, clear the selection
   */
  const mapClick = (): void => {
    clearMapSelection()
  }

  return (
    <MapContext.Provider value={{ props: contextProps }}>
      <section className={styles['map-container']}>
        <MapBar />
        <Map
          className={styles.map}
          center={mapCentre}
          bounds={mapBounds}
          zoom={zoom}
          zoomDelta={zoomDelta}
          zoomSnap={zoomSnap}
          minZoom={mappingConstraintState ? mappingConstraintState.minZoom : 2}
          zoomControl={false}
          maxZoom={mappingConstraintState ? mappingConstraintState.maxZoom : 12}
          onClick={mapClick}
          ref={handleEvents}
          touchZoom={touchZoom}
          zoomAnimation={zoomAnimation}
          attributionControl={attributionControl}
        >
          <MapControl
            map={leafletElement}
            home={mapCentre}
            bounds={mapBounds}
          >
            <>
              <div className={cx('leaflet-control')} data-tour="counter-clockwise">
                <Item title="View full history" onClick={(): void => { setFilterHistoryRoutes(!filterHistoryRoutes) }}
                  contentTheme={isFilterAsHistoryRoutes()} >
                  <HistoryIcon />
                </Item>
                <Item title="View all planned steps" onClick={(): void => { setFilterPlannedRoutes(!filterPlannedRoutes) }}
                  contentTheme={isFilterAsPlannedRoutes()} >
                  <PlannedIcon />
                </Item>
              </div>
              { showAddInfo && <div className={cx('leaflet-control')}>
                <Item title='Add information marker' onClick={(): void => { localAddInfoMarker() }}
                  contentTheme={'dark'} >
                  <InfoIcon />
                </Item>
              </div>}
              <CellLabelStyleSelector cellLabelStyle={cellLabelStyle} setCellLabelStyle={setCellLabelStyle} />
              <ViewAs isUmpire={isUmpire} viewAsForce={viewAsForce} viewAsCallback={viewAsCallback} forces={playerForce === UMPIRE_FORCE ? forcesState : []} />
            </>
          </MapControl>
          {mappingConstraintState && mappingConstraintState.tileLayer &&
            <TileLayer
              url={mappingConstraintState.tileLayer.url}
              attribution={mappingConstraintState.tileLayer.attribution}
              maxNativeZoom={mappingConstraintState.tileLayer.maxNativeZoom}
              bounds={mapBounds}
            />
          }
          <ScaleControl position='topright' />
          {children}
        </Map>
      </section>
    </MapContext.Provider>
  )
}
// Mapping.defaultProps = defaultProps
export default Mapping
