import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet-v4'
import styles from './styles.module.scss'
import PropTypes from './types/props'

const CoreMapping: React.FC<PropTypes> = () => {
  const position: LatLngExpression = [51.505, -0.09]

  return <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.container}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
  </MapContainer>
}

export default CoreMapping
