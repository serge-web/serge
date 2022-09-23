import { Asset, ForceData } from '@serge/custom-types'
import { LatLng, latLng } from 'leaflet'
import React, { useState, useEffect } from 'react'
import { Map, ScaleControl, TileLayer, Marker, LayerGroup, Tooltip } from 'react-leaflet'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({ allForces, position, bounds, zoom }) => {
  const TileLayerProps = MapConstants.TileLayer

  const [markers, setMarkers] = useState<Asset[]>([])

  useEffect(() => {
    const res: Asset[] = []
    allForces.forEach((force: ForceData) => {
      force.assets && force.assets.forEach((a: Asset) => {
        const loc = a.location
        if (loc) {
          res.push(a)
        }
      })
    })
    setMarkers(res)
  }, [allForces])

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: L.Map = ref.leafletElement
      map.zoomControl.setPosition('bottomright')
    }
  }

  return (
    <Map
      className={styles.map}
      center={bounds ? undefined : position}
      bounds={bounds}
      zoom={bounds ? undefined : zoom}
      ref={handleEvents}
    >
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'first-forces-layer'}>
        {
          markers && markers.map((a: Asset, index: number) => {
            const loc: LatLng = a.location ? latLng([a.location[0], a.location[1]]) : latLng([0, 0])
            return <Marker key={'asset-icon-' + index} position={loc}>
              <Tooltip>{a.name}</Tooltip>
            </Marker>

          })
        }
      </LayerGroup>
    </Map>
  )
}

export default SupportMapping
