import { LatLngExpression } from 'leaflet'
import React, { useState } from 'react'
import { Map, ScaleControl, TileLayer } from 'react-leaflet'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({ }) => {
  const TileLayerProps = MapConstants.TileLayer

  const [position] = useState<LatLngExpression>([51.505, -0.09])
  const [zoom] = useState<number>(12);

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: L.Map = ref.leafletElement
      map.zoomControl.setPosition('bottomright');
    }
  }

  return (
    <Map
      className={styles.map}
      center={position}
      zoom={zoom}
      ref={handleEvents}
    >
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
    </Map>
  )
}

export default SupportMapping
