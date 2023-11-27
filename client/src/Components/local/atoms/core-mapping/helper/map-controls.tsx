import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import L, { PM } from 'leaflet'
import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from 'src/Components/local/asset-icon'
import styles from '../styles.module.scss'
import { GeomanControlProps } from '../types/props'

const MapControls: React.FC<GeomanControlProps> = ({ onCreate, onChange }) => {
  const map = useMap()

  useEffect(() => {
    if (map) {
      const icon = L.divIcon({
        iconSize: [30, 30],
        html: ReactDOMServer.renderToString(<AssetIcon imageSrc={'/images/marker-icon-2x.png'} />),
        className: styles['asset-icon']
      })
      map.pm.setGlobalOptions({ markerStyle: { icon } })
    }
  }, [map])

  return <GeomanControls
    options={{
      position: 'topright',
      rotateMode: true,
      pinningOption: true,
      snappingOption: true
    }}
    globalOptions={{}}
    onCreate={e => onCreate(e as unknown as PM.ChangeEventHandler)}
    onChange={e => onChange(e as unknown as PM.ChangeEventHandler)}

  />
}

export default MapControls
