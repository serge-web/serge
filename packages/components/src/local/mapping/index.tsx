import React, { createContext, useState, useEffect } from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import createGrid from './helpers/create-grid'
import { Phase } from '@serge/config'
import { kebabCase } from 'lodash'

/* Import Types */
import PropTypes from './types/props'
import {
  SergeHex,
  SergeGrid,
  MappingContext,
  PlanMobileAsset,
  PlanTurnFormData,
  PerceptionFormData,
  AdjudicateTurnFormData,
  SelectedAsset
} from '@serge/custom-types'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'
import MapBar from '../map-bar'
import boundsFor from './helpers/bounds-for'

interface ContextInterface {
  props?: any
}

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
  const [perceptionFormData, setPerceptionFormData] = useState<PerceptionFormData>({
    populate: {
      perceivedForce: [],
      perceivedType: []
    },
    values: {
      perceivedNameVal: '',
      perceivedForceVal: '',
      perceivedTypeVal: ''
    }
  })
  const [planTurnFormData, setPlanTurnFormData] = useState<PlanTurnFormData>({
    populate: {
      status: [],
      speed: []
    },
    values: {
      statusVal: {
        name: '',
        mobile: false
      },
      speedVal: 0,
      turnsVal: 0
    }
  })
  const [adjudicateTurnFormData, setAdjudicateTurnFormData] = useState<AdjudicateTurnFormData>({
    populate: {
      status: [],
      speed: [],
      visibleTo: [],
      condition: []
    },
    values: {
      statusVal: {
        name: '',
        mobile: false
      },
      plannedRouteStatusVal: 'pending',
      speedVal: 0,
      visibleToVal: [],
      conditionVal: ''
    }
  })

  // Loops through all available forces and creates an entry for each one to be used as form data
  const availableForces = forces && forces.map((force: any) => {
    return {
      colour: force.color,
      name: force.name
    }
  })

  const platformTypes = platforms && platforms.map((p: any) => p.name)
  const currentPlatform = platforms && platforms.find((platform: any) => kebabCase(platform.name) === selectedAsset.type)
  const unknownForce = { name: 'Unknown', colour: '#ccc' }
  const availableStatus = currentPlatform && currentPlatform.states.find((s: any) => s.name === selectedAsset.status.state)

  // Populates data from the forms using initial state
  useEffect(() => {
    // First check that selectedAsset has been populated
    if (selectedAsset.uniqid !== '') {
      setPerceptionFormData({
        populate: {
          perceivedForce: [...availableForces, unknownForce],
          perceivedType: platformTypes
        },
        values: {
          perceivedNameVal: selectedAsset.name,
          perceivedForceVal: selectedAsset.force,
          perceivedTypeVal: selectedAsset.type
        }
      })

      setPlanTurnFormData({
        populate: {
          status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
          speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : []
        },
        values: {
          statusVal: availableStatus,
          speedVal: selectedAsset.status.speedKts,
          turnsVal: 0
        }
      })

      setAdjudicateTurnFormData({
        populate: {
          status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
          speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : [],
          visibleTo: [...availableForces, unknownForce],
          condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: any) => c) : []
        },
        values: {
          plannedRouteStatusVal: 'pending',
          statusVal: availableStatus,
          speedVal: selectedAsset.status.speedKts,
          visibleToVal: selectedAsset.visibleTo,
          conditionVal: selectedAsset.condition
        }
      })
    }
  }, [selectedAsset])

  // if we've got a planning range from prop, double-check if it is different
  // to the current one
  if (planningRangeProp && planningRange !== planningRangeProp) {
    setPlanningRange(planningRangeProp)
  }

  // only update bounds if they're different to the current one
  if (bounds && bounds !== mapBounds) {
    setMapBounds(bounds)
  }

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
    perceptionFormData,
    planTurnFormData,
    adjudicateTurnFormData,
    setPlanTurnFormData,
    setPerceptionFormData,
    setAdjudicateTurnFormData,
    setNewLeg,
    setShowMapBar,
    setSelectedAsset,
    setZoomLevel
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
