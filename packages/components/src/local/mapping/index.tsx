import L from 'leaflet'
import React, { createContext, useState } from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import createGrid from './helpers/createGrid'
import SergeHex from './types/serge-hex'
import SergeGrid from './types/serge-grid'
import { Phase } from '@serge/config'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'
import MappingContext from './types/mapping-context'
import MapBar from '../map-bar'

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
  zoomAnimation: false
}

/* Render component */
export const Mapping: React.FC<PropTypes> = ({
  mapBar,
  bounds,
  tileDiameterMins,
  forces,
  playerForce,
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
  children
}) => {

  /* Initialise states */
  const [showMapBar, setShowMapBar] = useState(false)

  /* Initialise variables */
  const { imageTop, imageLeft, imageRight, imageBottom } = bounds
  const position: [number, number] = [(imageTop + imageBottom) / 2, (imageLeft + imageRight) / 2]
  const topLeft = L.latLng(imageTop, imageLeft)
  const bottomRight = L.latLng(imageBottom, imageRight)
  const latLngBounds: L.LatLngBounds = L.latLngBounds(topLeft, bottomRight)
  const gridCells: SergeGrid<SergeHex<{}>> = createGrid(latLngBounds, tileDiameterMins)

  // Anything you put in here will be available to any child component of Map via a context consumer
  const contextProps: MappingContext = {
    gridCells,
    forces,
    playerForce,
    phase,
    showMapBar,
    setShowMapBar
  }

  return (
  <MapContext.Provider value={{ props: contextProps }}>
    <section className={styles['map-container']}>
      { mapBar && <MapBar /> }
      <Map
        className={styles['map']}
        center={position}
        bounds={latLngBounds}
        maxBounds={latLngBounds}
        zoom={zoom}
        zoomDelta={zoomDelta}
        zoomSnap={zoomSnap}
        minZoom={minZoom}
        zoomControl={zoomControl}
        maxZoom={maxZoom}
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
