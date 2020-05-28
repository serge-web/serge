import React, { createContext, useState, useEffect } from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import { Phase, ADJUDICATION_PHASE } from '@serge/config'
import MapBar from '../map-bar'

/* helper functions */
import createGrid from './helpers/create-grid'
import boundsFor from './helpers/bounds-for'
import { routeCreateStore, routeAddStep, routeSetCurrent } from '@serge/helpers'

/* Import Types */
import PropTypes from './types/props'
import {
  SergeHex,
  SergeGrid,
  MappingContext,
  PlanMobileAsset,
  SelectedAsset,
  RouteStore,
  RouteStep
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
  zoomControl: true,
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
  tileLayer,
  minZoom,
  maxZoom,
  touchZoom,
  zoom,
  zoomDelta,
  zoomSnap,
  zoomControl,
  attributionControl,
  zoomAnimation,
  planningConstraintsProp,
  planningRangeProp,
  channelID,
  postBack,
  children
}) => {
  /* Initialise states */
  const [showMapBar, setShowMapBar] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState<SelectedAsset>({
    uniqid: '',
    name: '',
    position: {
      lat: 0.00,
      lng: 0.00
    },
    type: 'Unknown',
    force: 'Unknown',
    controlledBy: [],
    condition: '',
    visibleTo: [],
    status: {
      speedKts: 0,
      state: ''
    }
  })

  const [zoomLevel, setZoomLevel] = useState(zoom || 0)

  /* Initialise variables */
  const [mapBounds, setMapBounds] = useState<{
    imageTop: number
    imageLeft: number
    imageRight: number
    imageBottom: number
  } | undefined>(undefined)
  const [latLngBounds, setLatLngBounds] = useState<L.LatLngBounds | undefined>(undefined)
  const [gridCells, setGridCells] = useState<SergeGrid<SergeHex<{}>> | undefined>(undefined)
  const [newLeg, setNewLeg] = useState< Array<SergeHex<{}>> | undefined>(undefined)
  const [planningConstraints, setPlanningConstraints] = useState<PlanMobileAsset | undefined>(planningConstraintsProp)
  const [mapCentre, setMapCentre] = useState<L.LatLng | undefined>(undefined)
  const [planningRange, setPlanningRange] = useState<number | undefined>(undefined)
  const [routeStore, setRouteStore] = useState<RouteStore>({ routes: [] })

  // if we've got a planning range from prop, double-check if it is different
  // to the current one
  if (planningRangeProp && planningRange !== planningRangeProp) {
    setPlanningRange(planningRangeProp)
  }

  // only update bounds if they're different to the current one
  if (bounds && bounds !== mapBounds) {
    setMapBounds(bounds)
  }

  // highlight the route for the selected asset
  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (selectedAsset) {
      const store: RouteStore = routeSetCurrent(selectedAsset.uniqid, routeStore)
      setRouteStore(store)
    }
  }, [selectedAsset])


  useEffect(() => {
    // note: we introduced the `gridCells` dependency to ensure the UI is `up` before
    // we modify the routeStore
    if (forces && gridCells) {
      const umpireInAdjudication = playerForce === 'umpire' && phase === ADJUDICATION_PHASE
      const store: RouteStore = routeCreateStore(forces, playerForce, umpireInAdjudication)
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
      // TODO: store the new planned leg for this asset
      const selRoute = routeStore.selected
      if (selRoute) {
        const newTurn = selRoute.planned[selRoute.planned.length - 1].turn + 1
        const coords: Array<string> = newLeg.map((cell: SergeHex<{}>) => {
          return cell.name
        })
        if (selRoute) {
          const newStep: RouteStep = {
            turn: newTurn,
            status: { state: 'BBQ', speedKts: 12 },
            coords: coords
          }
          const newStore: RouteStore = routeAddStep(routeStore, selRoute.uniqid, newStep)
          setRouteStore(newStore)
        }
      }

      // if we know our planning constraints, we can plan the next leg
      if (planningConstraints) {
        // get the last planned cell, to act as the first new planned cell
        const lastCell: SergeHex<{}> = newLeg[newLeg.length - 1]
        // create new planning contraints
        const newP: PlanMobileAsset = {
          origin: lastCell.name,
          travelMode: planningConstraints.travelMode
        }
        setPlanningConstraints(newP)
      }
    }
  }, [newLeg])

  // Anything you put in here will be available to any child component of Map via a context consumer
  const contextProps: MappingContext = {
    gridCells,
    forces,
    platforms,
    playerForce,
    phase,
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
    postBack
  }

  // any events for leafletjs you can get from leafletElement
  // https://leafletjs.com/reference-1.6.0.html#map-event
  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      ref.leafletElement.on('zoomend', () => {
        setZoomLevel(ref.leafletElement.getZoom())
      })
    }
  }

  return (
    <MapContext.Provider value={{ props: contextProps }}>
      <section className={styles['map-container']}>
        { mapBar && <MapBar /> }
        <Map
          className={styles.map}
          center={mapCentre}
          bounds={latLngBounds}
          maxBounds={latLngBounds}
          zoom={zoom}
          zoomDelta={zoomDelta}
          zoomSnap={zoomSnap}
          minZoom={minZoom}
          zoomControl={zoomControl}
          maxZoom={maxZoom}
          ref={handleEvents}
          touchZoom={touchZoom}
          zoomAnimation={zoomAnimation}
          attributionControl={attributionControl}
        >
          <TileLayer
            url={tileLayer.url}
            attribution={tileLayer.attribution}
            bounds={latLngBounds}
          />
          <ScaleControl/>
          {children}
        </Map>
      </section>
    </MapContext.Provider>
  )
}

Mapping.defaultProps = defaultProps

export default Mapping
