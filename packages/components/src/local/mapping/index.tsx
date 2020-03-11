
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

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
export const Mapping: React.FunctionComponent<PropTypes> = ({
  bounds,
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
}: PropTypes) => {
  const { imageTop, imageLeft, imageRight, imageBottom } = bounds
  const position = [(imageTop + imageBottom) / 2, (imageLeft + imageRight) / 2]
  const imageBounds = [{ lat: imageTop, lng: imageLeft }, { lat: imageBottom, lng: imageRight }]

  console.log(imageBounds)

  return (
    <Map
      // @ts-ignore
      bounds={imageBounds}
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
        // @ts-ignore
        position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}
Mapping.defaultProps = defaultProps

export default Mapping
