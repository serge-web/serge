import L from 'leaflet'
import React from 'react'
import { Map, TileLayer, ScaleControl } from 'react-leaflet'
import createGrid from './helpers/createGrid'
import HexGrid from '../hex-grid'
import Assets from '../assets'
import SergeHex from './types/serge-hex'
import SergeGrid from './types/serge-grid'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'

const defaultProps: PropTypes = {
  bounds: {
    imageTop: 0,
    imageLeft: 0,
    imageRight: 0,
    imageBottom: 0
  },
  tileDiameterMins: 5,
  forces: [{}],
  playerForce: 'Blue',
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
  bounds,
  tileDiameterMins,
  forces,
  playerForce,
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
  const { imageTop, imageLeft, imageRight, imageBottom } = bounds
  const position: [number, number] = [(imageTop + imageBottom) / 2, (imageLeft + imageRight) / 2]
  const topLeft = L.latLng(imageTop, imageLeft)
  const bottomRight = L.latLng(imageBottom, imageRight)
  const latLngBounds: L.LatLngBounds =  L.latLngBounds(topLeft, bottomRight)
  const gridCells: SergeGrid<SergeHex<{}>> = createGrid(latLngBounds, tileDiameterMins)

  return (
    <Map
      center={position}
      bounds={latLngBounds}
      maxBounds={latLngBounds}
      className={styles['map-container']}
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
      <HexGrid 
        gridCells = {gridCells}
      />
      <Assets 
        gridCells={gridCells} 
        forces={forces} 
        playerForce={playerForce}/>
      <ScaleControl/>
      {children}
    </Map>
  )
}
Mapping.defaultProps = defaultProps

export default Mapping
