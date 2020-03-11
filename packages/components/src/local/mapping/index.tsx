
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'

const defaultProps: PropTypes = {
  position: [],
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
  zoomControl: false,
  attributionControl: false,
  zoomAnimation: false
}

/* Render component */
export const Mapping: React.FunctionComponent<PropTypes> = ({
  position,
  tileLayer,
  minZoom,
  maxZoom,
  touchZoom,
  zoom,
  zoomDelta,
  zoomSnap,
  zoomControl,
  attributionControl,
  zoomAnimation
}: PropTypes) =>
  <Map
    // @ts-ignore next line due to type errors in 'react-leaflet'
    center={position}
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
    />

    <Marker
      // @ts-ignore next line due to type errors in 'react-leaflet'
      position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>

Mapping.defaultProps = defaultProps

export default Mapping
