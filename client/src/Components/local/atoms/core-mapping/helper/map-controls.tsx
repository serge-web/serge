import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import L, { LeafletEvent, PM } from 'leaflet'
import React, { useEffect, useRef } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from 'src/Components/local/asset-icon'
import { Ruler } from 'src/custom-types/leaflet-custom-types'
import styles from '../styles.module.scss'
import { GeomanControlProps } from '../types/props'

const MapControls: React.FC<GeomanControlProps> = ({ onCreate, onShowLabels }) => {
  const map = useMap()
  const ruler = useRef<Ruler | null>(null)

  const initMapListener = () => {
    let layersVisible = true 
    map.pm.Toolbar.createCustomControl({
      name: 'showLayersText',
      block: 'custom',
      className: 'control-icon leaflet-pm-icon-text',
      title: 'Show symbol labels',
      afterClick: () => {
        onShowLabels(layersVisible)

        // note // Using CSS, we have the ability to dynamically hide or show text based on styling.
        // This allows for a seamless user experience by toggling the visibility of elements without altering the HTML structure.

        // map.eachLayer((layer) => {
        //   if (layer instanceof L.Marker) {
        //     const iconElement = layer.getElement()
        //     const svgText = iconElement && iconElement.querySelector('text')
        //     if (svgText) {
        //       if (layersVisible) {
        //         svgText.style.opacity = '1'
        //       } else {
        //         svgText.style.opacity = '0'
        //       }
        //     }
        //   }
        // })

        layersVisible = !layersVisible 
      },
      
      // Set toggle to false to indicate that this custom control does not have a toggle functionality
      toggle: false

    })
    
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
      switch (e['shape']) {
        case 'Marker':
        case 'Polygon':
        case 'Line':
        case 'Rectangle':
        case 'Circle':
          onCreate(e as unknown as PM.ChangeEventHandler)
          break
        default:
          console.log('OnCreate Unimplemented !!!', e['shape'])
      }
    })
  }
   
  const addPendingTextEvent = (layer: L.Layer) => {
    layer.on('pm:edit', e => {
      map.removeLayer(layer)
      onCreate(e as any)
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
      map.zoomControl.setPosition('bottomright')
      L.control.scale({ position: 'topright' }).addTo(map)
      ruler.current = L.control.ruler({ position: 'bottomright' }).addTo(map)
      initMapListener()
    }
  }, [map])

  return <GeomanControls
    options={{
      position: 'topright',
      rotateMode: false,
      pinningOption: true,
      snappingOption: true,
      drawCircleMarker: false,
      cutPolygon: false
    }}
    globalOptions={{}}
    onCreate={e => {
      if (e.shape === 'Text') {
        addPendingTextEvent(e.layer)
      } else {
        map.removeLayer(e.layer)
      }
    }}
    onButtonClick={(e) => {
      if (!e.button.toggleStatus && ruler.current && ruler.current._choice) {
        ruler.current._toggleMeasure()
      }
    }}
  />
}

export default MapControls
