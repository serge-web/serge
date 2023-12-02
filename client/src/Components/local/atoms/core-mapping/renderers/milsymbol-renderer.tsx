
import L from 'leaflet'
import ms from 'milsymbol'
import React from 'react'
import { Marker } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import styles from '../styles.module.scss'
import { CoreRendererProps } from '../types/props'

const MilSymbolRenderer: React.FC<CoreRendererProps> = ({ features }): any => {
  const filterFeatures = features.features.filter(f => f.properties._type === RENDERER_MILSYM)
    
  return filterFeatures.map((feature, idx) => {
    const icon = new ms.Symbol(feature.properties.sidc)
    const position = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]) 

    return <Marker
      key={idx}
      position={position}
      icon={L.divIcon({
        html: icon.asDOM().outerHTML,
        className: styles['asset-icon']
      })} />
  })
}

export default MilSymbolRenderer
