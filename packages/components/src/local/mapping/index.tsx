import React, { createContext, useState, useEffect } from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import { Phase, ADJUDICATION_PHASE } from '@serge/config'
import MapBar from '../map-bar'
import MapControl from '../map-control'

/* helper functions */
import createGrid from './helpers/create-grid'
import boundsFor from './helpers/bounds-for'
import {
  roundToNearest,
  routeCreateStore,
  routeAddSteps,
  routeSetCurrent,
  routeGetLatestPosition,
  routeClearFromStep
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
  RouteStep,
  PlanTurnFormValues
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
  forces: [{}],
  platforms: [{}],
  playerForce: 'Blue',
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
  postBack,
  children
}) => {
  /* Initialise states */
  const [showMapBar, setShowMapBar] = useState<boolean>(true)
  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset | undefined >(undefined)
  const [zoomLevel, setZoomLevel] = useState<number>(zoom || 0)

  /* Initialise variables */
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
  }, [selectedAsset])

  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forces && gridCells) {
      const umpireInAdjudication = playerForce === 'umpire' && phase === ADJUDICATION_PHASE
      const store: RouteStore = routeCreateStore(forces, playerForce, umpireInAdjudication, platforms)
      setRouteStore(store)
    }
  }, [forces, playerForce, phase, gridCells])

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
      setGridCells(createGrid(latLngBounds, tileDiameterMins))
    }
  }, [tileDiameterMins, latLngBounds])

  useEffect(() => {
    if (newLeg) {
      const selRoute = routeStore.selected
      if (selRoute) {
        const newTurn = selRoute.planned[selRoute.planned.length - 1].turn + 1
        const coords: Array<string> = newLeg.route.map((cell: SergeHex<{}>) => {
          return cell.name
        })
        if (selRoute) {
          const newStep: RouteStep = {
            turn: newTurn,
            status: { state: 'BBQ', speedKts: 12 },
            coords: coords
          }
          const newStore: RouteStore = routeAddSteps(routeStore, selRoute.uniqid, [newStep])
          setRouteStore(newStore)
        }
      }

      // if we know our planning constraints, we can plan the next leg
      if (planningConstraints) {
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
      }
    }
  }, [newLeg])

  const clearFromTurn = (turn: number): void => {
    const current: Route | undefined = routeStore.selected
    if (current) {
      console.log('clear from turn', turn, current.planned.length)
      const newStore = routeClearFromStep(routeStore, current.uniqid, turn)

      const current2: Route | undefined = newStore.selected
      if (current2) {
        console.log('clear after turn', turn, current2.planned.length)
      }
      console.log('cleared after turn', turn, newStore.selected)
      setRouteStore(newStore)
    }
  }

  const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
    const current: Route | undefined = routeStore.selected
    if (current) {
      // is it a mobile turn
      const status = plannedTurn.statusVal
      if (status.mobile) {
        // trigger route planning
        const origin: string = routeGetLatestPosition(current.currentPosition, current.planned)

        // work out how far asset can travel
        const constraints: PlanMobileAsset = {
          origin: origin,
          travelMode: 'sea',
          status: plannedTurn.statusVal.name,
          speed: plannedTurn.speedVal
        }

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
        // if we were planning a mobile route, clear that
        setPlanningConstraints(undefined)

        // ok, store the new leg
        // how many turns?
        let turnStart: number = turnNumber
        if (current.planned && current.planned.length > 0) {
          turnStart = current.planned[current.planned.length - 1].turn
        }
        let store: RouteStore = routeStore
        const steps: Array<RouteStep> = []
        for (let ctr = 0; ctr < plannedTurn.turnsVal; ctr++) {
          const step: RouteStep = { turn: ++turnStart, status: { state: status.name } }
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

  // Anything you put in here will be available to any child component of Map via a context consumer
  const contextProps: MappingContext = {
    gridCells,
    forces,
    platforms,
    playerForce,
    phase,
    turnNumber,
    planningConstraints,
    planningRange,
    showMapBar,
    selectedAsset,
    zoomLevel,
    channelID,
    routeStore,
    setNewLeg,
    setShowMapBar,
    setSelectedAsset,
    setZoomLevel,
    turnPlanned,
    clearFromTurn,
    postBack
  }

  let leafletElement: any

  // any events for leafletjs you can get from leafletElement
  // https://leafletjs.com/reference-1.6.0.html#map-event
  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      console.log(ref, 'map2');
      leafletElement = ref.leafletElement
      leafletElement.on('zoomend', () => {
        setZoomLevel(leafletElement.getZoom())
      })
    }
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
          ref={handleEvents}
          touchZoom={touchZoom}
          zoomAnimation={zoomAnimation}
          attributionControl={attributionControl}
        >
          {leafletElement && <MapControl map={leafletElement}/>}
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
