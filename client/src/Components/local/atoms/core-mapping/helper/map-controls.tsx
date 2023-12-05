import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import L, { LeafletEvent, PM } from 'leaflet'
import { get } from 'lodash'
import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from 'src/Components/local/asset-icon'
import styles from '../styles.module.scss'
import { GeomanControlProps } from '../types/props'

const MapControls: React.FC<GeomanControlProps> = ({ onCreate, onChange, onRemoved }) => {
  const map = useMap()

  const initMapListener = () => {
    // handle remove listener for geoman items
    map.on('pm:remove', (e: LeafletEvent) => {
      switch (e['shape']) {
        case 'Marker':
          onRemoved(get(e, 'layer.options.attribution', ''))
          break
        case 'Polygon':
          onRemoved(get(e, 'layer.feature.properties.id', ''))
          break
        default:
          console.log('Unimplemented !!!')
      }
    })

    // handle onCreate listener for geoman items
    map.on('pm:create', (e: LeafletEvent) => {
      // handle edit/dragend listener for geoman items
      e.layer.on('pm:edit', (e: any) => {
        console.log('Geoman edit action: edit: ', e)
        onChange(e.layer._leaflet_id, (e as any).latlngs)
      })

      switch (e['shape']) {
        case 'Marker':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        case 'Polygon':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        default:
          console.log('Unimplemented !!!')
      }
    })
  }

  useEffect(() => {
    if (map) {
      const icon = L.divIcon({
        iconSize: [30, 30],
        html: ReactDOMServer.renderToString(<AssetIcon imageSrc={'/images/marker-icon-2x.png'} />),
        className: styles['asset-icon']
      })
      map.pm.setGlobalOptions({ markerStyle: { icon } })
      initMapListener()
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
  />
}

export default MapControls
