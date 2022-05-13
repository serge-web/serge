import L from 'leaflet'
import React, { createContext, useState, useEffect } from 'react'
import { fetch as whatFetch } from 'whatwg-fetch'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import {
  CellLabelStyle, Phase, ADJUDICATION_PHASE, UMPIRE_FORCE, PlanningStates, LaydownPhases,
  LAYDOWN_TURN, Domain, serverPath, CREATE_TASK_GROUP, LEAVE_TASK_GROUP, HOST_PLATFORM, UPDATE_MARKER, CHANNEL_MAPPING
} from '@serge/config'
import MapBar from '../map-bar'
import MapControl from '../map-control'
import { cloneDeep, isEqual } from 'lodash'
import * as h3 from 'h3-js'

/* helper functions */
import { createGridH3 } from './helpers/h3-helpers'

import {
  roundToNearest,
  routeCreateStore,
  routeAddSteps,
  routeSetCurrent,
  routeGetLatestPosition,
  routeClearFromStep,
  findPlatformTypeFor,
  findAsset,
  routeSetLaydown,
  enumFromString,
  turnTimeAsMillis,
  routeDeclutter2,
  DeclutterData
} from '@serge/helpers'

/* Import Types */
import PropTypes from './types/props'
import {
  SergeGrid3,
  MappingContext,
  NewTurnValues,
  PlanMobileAsset,
  SelectedAsset,
  RouteStore,
  Route,
  RouteTurn,
  PlanTurnFormValues,
  ForceData,
  Asset,
  Status,
  MessageCreateTaskGroup,
  MessageLeaveTaskGroup,
  MessageHostPlatform,
  SergeHex3,
  TurningDetails,
  MappingConstraints,
  MessageMap,
  MapAnnotation,
  MapAnnotations,
  MessageUpdateMarker
} from '@serge/custom-types'

import ContextInterface from './types/context'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'
import lastStepOrientationFor from '../assets/helpers/last-step-orientation-for'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import uniqid from 'uniqid'

// Create a context which will be provided to any child of Map
export const MapContext = createContext<ContextInterface>({ props: undefined })

/* Render component */
export const Mapping: React.FC<PropTypes> = ({
  mappingConstraints,
  mapBar,
  forces,
  playerForce,
  canSubmitOrders,
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
  mapPostBack = (messageType: string, payload: MessageMap, channelID?: string | number | undefined): void => { console.log('mapPostBack', messageType, channelID, payload) },
  declutter,
  children,
  fetchOverride
}) => {
  /* Initialise states */
  const [forcesState, setForcesState] = useState<ForceData[]>(forces)
  const [infoMarkersState, setInfoMarkersState] = useState<MapAnnotations>(infoMarkers)
  const [showMapBar, setShowMapBar] = useState<boolean>(mapBar !== undefined ? mapBar : true)
  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset | undefined >(undefined)
  const [selectedMarker, setSelectedMarker] = useState<MapAnnotation['uniqid'] | undefined>(undefined)
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
  const [atlanticCells, setAtlanticCells] = useState<GeoJSON.FeatureCollection>()
  const [polygonAreas, setPolygonAreas] = useState<FeatureCollection<Geometry, GeoJsonProperties> | undefined>(undefined)
  const [cellLabelStyle, setCellLabelStyle] = useState<CellLabelStyle>(CellLabelStyle.H3_LABELS)
  const [mappingConstraintState] = useState<MappingConstraints>(mappingConstraints)

  const domain = (mappingConstraintState && enumFromString(Domain, mappingConstraintState.targetDataset)) || Domain.ATLANTIC

  // only update bounds if they're different to the current one
  useEffect(() => {
    if (mappingConstraintState) {
      const conBounds = mappingConstraintState.bounds
      const ne = conBounds[0]
      const sw = conBounds[1]
      const newBounds = L.latLngBounds(ne, sw)
      if (mapBounds !== undefined) {
        if (mapBounds.equals(newBounds)) {
          // no change - do nothing
        } else {
          setMapBounds(newBounds)
        }
      } else {
        setMapBounds(newBounds)
      }
    }
  }, [mappingConstraintState])

  // only update bounds if they're different to the current one
  useEffect(() => {
    // TODO: we should only be allowing this for the Game Control
    setShowAddInfo((playerForce === UMPIRE_FORCE) && canSubmitOrders)
  }, [phase, playerForce])

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

    // if we are in turn 0 adjudication phase, we have special processing, since
    // the player may be doing force laydown
    if (store.selected && turnNumber === 0 && phase === Phase.Adjudication) {
      const layPhase = store.selected.laydownPhase
      if (layPhase && canSubmitOrders) {
        if (layPhase === LaydownPhases.Moved || layPhase === LaydownPhases.Unmoved) {
          const asset: Asset = findAsset(forces, store.selected.uniqid)
          const pType = findPlatformTypeFor(platforms, '', asset.platformTypeId)
          const moves: PlanMobileAsset = {
            origin: store.selected.currentPosition,
            travelMode: pType.travelMode,
            status: LAYDOWN_TURN
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

  /**
   * generate the set of routes visible to this player, for display
   * in the Force Overview panel
   */
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forcesState && h3gridCells && h3gridCells.length > 0) {
      const selectedId: string | undefined = selectedAsset && selectedAsset.uniqid
      const store: RouteStore = routeCreateStore(selectedId, currentPhase, forcesState, playerForce,
        platforms, filterHistoryRoutes, filterPlannedRoutes, wargameInitiated, routeStore)
      setRouteStore(store)
    }
  }, [forcesState, playerForce, currentPhase, h3gridCells, filterHistoryRoutes, filterPlannedRoutes, selectedAsset])

  /**
   * generate the set of routes visible to this player, for display
   * in the Force Overview panel
   */
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forcesState && h3gridCells && routeStore.routes.length) {
      // if this is umpire and we have view as
      if (playerForce === 'umpire' && viewAsForce !== UMPIRE_FORCE) {
        // ok, produce customised version
        const selectedId: string | undefined = selectedAsset && selectedAsset.uniqid
        const vStore: RouteStore = routeCreateStore(selectedId, currentPhase, forcesState, viewAsForce, platforms,
          filterHistoryRoutes, filterPlannedRoutes, wargameInitiated, routeStore)
        declutterRouteStore(vStore)
      } else {
        // just use normal route store
        declutterRouteStore(routeStore)
      }
    }
  }, [routeStore, viewAsForce])

  const declutterRouteStore = (store: RouteStore): void => {
    if (mappingConstraintState) {
      const clutterFunc = declutter || routeDeclutter2
      const data: DeclutterData = { routes: store, markers: infoMarkersState }
      // sort out the cell diameter
      const cellRef = store.routes[0].currentPosition
      const cellRes = h3.h3GetResolution(cellRef)
      if (cellRes === -1) {
        console.warn('Unable to recognise resolution for cell', cellRef)
      }
      const edgeLengthM = h3.edgeLength(cellRes, 'm')
      const diamMins = edgeLengthM / 1852.0 * 2
      const declutteredData: DeclutterData = clutterFunc(data, diamMins)
      setViewAsRouteStore(declutteredData.routes)
      setInfoMarkersState(declutteredData.markers)
    }
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
    if (mappingConstraintState && mappingConstraintState.polygonAreasURL) {
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

  useEffect(() => {
    if (mapBounds && mappingConstraintState) {
      // now the h3 handler
      const resolution = mappingConstraintState.h3res || 3
      const cells = createGridH3(mapBounds, resolution, atlanticCells)
      setH3Resolution(resolution)
      setH3gridCells(cells)
    }
  }, [mappingConstraintState, mapBounds, atlanticCells])

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

  const calcDistanceBetweenCentresM = (): number => {
    if (!mappingConstraintState) {
      throw new Error('Cannot calculate distance without mapping constraints')
    }
    const minsToM = (mins: number): number => {
      return mins * 1862
    }
    const tileRadiusM = mappingConstraintState.h3res ? h3.edgeLength(mappingConstraintState.h3res, 'm') : minsToM(mappingConstraintState.tileDiameterMins)
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
          if (gameTurnTime === 0) {
            console.error('Cannot plan route with zero game turn time')
            window.alert('Cannot plan route with zero game turn time')
            // TODO: also display notification in UI
          }

          const distanceBetweenTileCentresM = calcDistanceBetweenCentresM()
          const distancePerTurnM = calcDistancePerTurnM(plannedTurn.speedVal)
          const roughRangeCells = distancePerTurnM / distanceBetweenTileCentresM

          // check range is in 10s
          const range = roundToNearest(roughRangeCells, 1)

          // produce a heading value
          const heading = lastStepOrientationFor(origin, current.currentPosition, current.history, current.planned)
          const turnData: TurningDetails | undefined = (heading !== undefined && pType.turningCircle) ? {
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

  const updateMarker = (marker: MapAnnotation): void => {
    const others = infoMarkersState.filter((item: MapAnnotation) => item.uniqid !== marker.uniqid)
    others.push(marker)
    setInfoMarkersState(others)
    // check which phase we're in
    switch (phase) {
      case Phase.Adjudication: {
        // no further action- it will get caught up in new world state
        break
      }
      case Phase.Planning: {
        // send the update out immediately
        const message: MessageUpdateMarker = {
          messageType: UPDATE_MARKER,
          marker: marker
        }
        mapPostBack(UPDATE_MARKER, message, CHANNEL_MAPPING)
        break
      }
    }
  }

  const localAddInfoMarker = (): void => {
    // get the centre of the map
    if (leafletElement) {
      const center: L.LatLng = leafletElement.getBounds().getCenter()
      const cell = h3.geoToH3(center.lat, center.lng, h3Resolution)
      // create new marker
      const marker: MapAnnotation = {
        uniqid: uniqid('a'),
        color: '#f00',
        icon: 'unknown.svg',
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

  const viewAsCallback = (force: string): void => {
    setViewAsForce(force)
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
    infoMarkers: infoMarkersState,
    markerIcons: markerIcons,
    platforms,
    playerForce,
    canSubmitOrders,
    phase,
    turnNumber,
    planningConstraints,
    showMapBar,
    selectedAsset,
    selectedMarker,
    setSelectedMarker,
    setSelectedAsset,
    updateMarker,
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
    mapPostBack: mapPostBack,
    hidePlanningForm,
    setHidePlanningForm,
    groupMoveToRoot: groupMoveToRootLocal,
    groupCreateNewGroup: groupCreateNewGroupLocal,
    groupHostPlatform: groupHostPlatformLocal,
    plansSubmitted,
    setPlansSubmitted,
    domain: domain,
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
            forces={playerForce === UMPIRE_FORCE ? forcesState : undefined}
            viewAsCallback={viewAsCallback}
            viewAsForce={viewAsForce}
            filterPlannedRoutes={filterPlannedRoutes}
            setFilterPlannedRoutes={setFilterPlannedRoutes}
            filterHistoryRoutes={filterHistoryRoutes}
            setFilterHistoryRoutes={setFilterHistoryRoutes}
            cellLabelType={cellLabelStyle}
            cellLabelCallback={setCellLabelStyle}
            addInfoMarker={showAddInfo ? localAddInfoMarker : undefined}
          />
          {mappingConstraintState && mappingConstraintState.tileLayer &&
            <TileLayer
              url={mappingConstraintState.tileLayer.url}
              attribution={mappingConstraintState.tileLayer.attribution}
              maxNativeZoom={mappingConstraintState.maxNativeZoom}
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
