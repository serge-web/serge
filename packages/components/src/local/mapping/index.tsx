
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import './leaflet.css'
import styles from './styles.module.scss'

/* Render component */
export const Mapping: React.FunctionComponent<PropTypes> = ({ position, tileLayer, zoom }: PropTypes) =>
  // @ts-ignore next line due to type errors in 'react-leaflet'
  <Map className={styles['map-container']} center={position} zoom={zoom}>
    <TileLayer
      url={tileLayer.url}
      attribution={tileLayer.attribution}
    />
    {/*
      // @ts-ignore */}
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>

export default Mapping
