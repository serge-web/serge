import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import L, { LeafletEvent, PM } from 'leaflet'
import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from 'src/Components/local/asset-icon'
import styles from '../styles.module.scss'
import { GeomanControlProps } from '../types/props'

const MapControls: React.FC<GeomanControlProps> = ({ onCreate }) => {
  const map = useMap()

  const initMapListener = () => {
    // handle remove listener for geoman items
    // map.on('pm:remove', (e: LeafletEvent) => {
    //   console.log('removing', e.layer.feature.properties.id)
    //   switch (e['shape']) {
    //     case 'Marker':
    //       onRemoved(get(e, 'layer.feature.properties.id', ''))
    //       break
    //     case 'Polygon':
    //       onRemoved(get(e, 'layer.feature.properties.id', ''))
    //       break
    //     case 'Line':
    //       onRemoved(get(e, 'layer.feature.properties.id', ''))
    //       break
    //     default:
    //       console.log('OnRemove Unimplemented for ' + e['shape'] + ' !!!')
    //   }
    // })

    // handle edit listener for geoman items
    map.on('pm:edit', (e: LeafletEvent) => {
      // handle edit/dragend listener for geoman items
      console.log('edit event', e)
    })

    // handle drag end listener for geoman items
    map.on('pm:dragend', (e: LeafletEvent) => {
      // handle edit/dragend listener for geoman items
      console.log('dragend event', e)
    })

    map.on('pm:change', (e: LeafletEvent) => {
      // handle edit/dragend listener for geoman items
      console.log('change event', e)
    })
    
    // handle onCreate listener for geoman items
    map.on('pm:create', (e: LeafletEvent) => {
      // handle edit/dragend listener for geoman items
      // e.layer.on('pm:edit', (e: any) => {
      //   console.log('Geoman edit action: edit: ', e)
      //   onChange(e.layer._leaflet_id, (e as any).latlngs)
      // })

      switch (e['shape']) {
        case 'Marker':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        case 'Polygon':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        case 'Line':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        case 'Rectangle':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        case 'Circle':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        default:
          console.log('OnCreate Unimplemented !!!', e['shape'])
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
      snappingOption: true,
      drawCircleMarker: false
    }}
    globalOptions={{}}
    onCreate={e => map.removeLayer(e.layer)}
  />
}

export default MapControls
